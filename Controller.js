
const express = require('express');
const Product = require('./Model');

exports.Createdata = async (req, res) => {
    try {
        
 
        const { name, profession } = req.body;
        if (!name || !profession) {
            res.status(400).json({
                success: false,
                data: "Items Not found"
            })
        }
        const data = await Product.create({
          name,profession
        })
        res.status(201).json({
            success: true,
            data: data,
            message: "Data added successfully",
            
        })
        console.log(data);
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message:error.message,
        })
    }
}