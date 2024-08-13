import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import axios from 'axios';
import path from 'path';
import { htmlEmail, textEmail } from './constant.js';
import { text } from 'express';

dotenv.config();

// Configure the transporter for Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
    },
});

console.log('Email:', process.env.EMAIL);
console.log('App Password:', process.env.APP_PASSWORD);



const mailOptions = {
    from: {
        name: `Coding with Soumya`,
        address: process.env.EMAIL,
    }, // sender address
    to: ['b521059@iiit-bh.ac.in'],
    subject: 'Send Testing using nodemailer and gmail',
    text: textEmail,
    html: htmlEmail,
};

const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error(error);
    }
};

for (let index = 0; index < 5; index++) {
    sendMail(transporter, mailOptions);
    console.log(index)
}

