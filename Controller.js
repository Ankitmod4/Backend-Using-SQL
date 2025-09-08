const express = require('express');
const ChatApp = require('./Model');

exports.Createdata = async (req, res) => {
    try {
        const { Username, Email, Password } = req.body;
        console.log(Username, Email, Password,);
        if (!Username || !Password  || !Email) { 
            return res.status(400).json({ 
                success: false,
                message: "Items Not found"
            });
        }

        const existingUser = await ChatApp.findOne({ where: { Email } });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists, please log in"
            });
        }

        const data = await ChatApp.create({ Username, Email, Password });

        res.status(201).json({
            success: true,
            data: data,
            message: "Data added successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
