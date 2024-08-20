
const Product = require('./Model');

exports.Fetchdata = async (req, res) => {
    try {
        const data = await Product.findAll({});
        res.status(201).json({
            success: true,
            data: data,
            message:'Fetched Successfully',
        })
        }
        
    catch (error) {
        res.status(500).json({
            success: false,
            message:error.message,
        })
    }
}