const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'swagzak.jr@gmail.com', 
        pass: '****' 
    }
});

// Email options
const mailOptions = {
    from: 'swagzak.jr@gmail.com', 
    to: 'swagzak.jr@gmail.com', 
    subject: 'Hello from Node.js', 
    text: 'This is a test email sent from a Node.js application!', 
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred:', error);
    }
    console.log('Email sent:', info.response);
});
