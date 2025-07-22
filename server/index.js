require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');

// Authentication
const authRouter = require('./routes/auth')

// admin
const projectRouter = require('./routes/admin/project')


mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('connected to database');
    })
    .catch((err) => {
        console.log(err);
    })

const app = express();
const PORT = process.env.PORT || 5000;


app.use(
    cors({
        origin: 'https://mubasil-portfolio.vercel.app',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders:[
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma',
        ],
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 204
    })
)

// app.options('*', cors());


app.use(cookieParser());
app.use(express.json());
// Authentication
app.use('/api/auth', authRouter);
app.use('/api/admin/projects', projectRouter);
app.get('/', (req, res) => {
    res.send('Backend is running 🚀');
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
