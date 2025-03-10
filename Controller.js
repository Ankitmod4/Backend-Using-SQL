const express = require('express');
const ChatApp = require('./Model');

exports.Createdata = async (req, res) => {
    try {
        const { Username, Email, Password, DPLINK } = req.body;
        console.log(Username, Email, Password, DPLINK);
        if (!Username || !Password || !DPLINK || !Email) { 
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

        const data = await ChatApp.create({ Username, Email, Password, DPLINK });

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
