import userModel from '../Models/user.model.js'
import axios from 'axios'
import FromData from 'form-data'
export const generateImage = async (req, res) =>{
    try{
        const {userId, prompt} = req.body
        const user = await userModel.findById(userId)

        if(!user || !prompt){
            return res.json({
                success : false,
                msg : "Missing details"
            })
        }
        if(user.creditBalance === 0 || user.creditBalance < 0){
            return res.json({
                success : false,
                msg : "credits is not full filled the requirment !!",
                creditBalance : user.creditBalance
            })
        }

        const formData = new FromData()
        formData.append('prompt', prompt)

     const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1',
            formData, {
                headers : {
                    'x-api-key' :process.env.CLIPDROP_API,
                },
                responseType: 'arraybuffer'
            }
        )
      const base64Image = Buffer.from(data, 'binary').toString('base64')
      const resultImage = `data:image/png;base64,${base64Image}`

      await userModel.findByIdAndUpdate(user._id, {creditBalance: user.creditBalance-1})
      res.json({
        success: true,
        msg : "Image Generated",
        creditBalance : user.creditBalance-1,
        resultImage
      })
      
    }catch(err){
        console.log(err)
        return res.json(
            {
                success : false,
                msg : err.message
            }
        )
    }
}