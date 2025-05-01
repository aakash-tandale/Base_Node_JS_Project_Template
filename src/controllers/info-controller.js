
const {StatusCodes} = require('http-status-codes');
const info =(req,res)=>{
    res.status(StatusCodes.OK).json({
        message:'Welcome to the API'
    });
}
module.exports={

info

}