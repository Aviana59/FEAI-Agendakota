// server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/send-email', async (req, res) => {
    try {
        const { email, image, strategy } = req.body;
        
        const mailOptions = {
            from: `"AgendaKota AI" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: '📈 Hasil Strategi Pemasaran Anda',
            html: `
                <div style="font-family: Arial, sans-serif;">
                    <h2 style="color: #2d3748;">Strategi Pemasaran Anda</h2>
                    <p>Berikut hasil lengkap strategi pemasaran yang telah dibuat:</p>
                    <div style="margin-top: 20px;">
                        ${strategy.replace(/\n/g, '<br>')}
                    </div>
                    <p style="margin-top: 30px;">Salam,<br/>Tim AgendaKota</p>
                </div>
            `,
            attachments: [{
                filename: 'strategi-pemasaran.png',
                content: image.split('base64,')[1],
                encoding: 'base64'
            }]
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Gagal mengirim email' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});