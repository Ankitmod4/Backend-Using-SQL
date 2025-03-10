const ChatApp = require('./Model');


exports.FetchUsers=(async(req,res)=>{
    try{
       const data=await   ChatApp.findAll();
       res.status(200).json({
           success:true,
           data:data,
           message:"Data Fetched Successfully",
       
    })
}
    catch(err){
        res.status(401).json({
            sucess:false,
            message:err.message,
            
        })

    }
})