import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import db from './utils/db.js';
import 'colors'
import router from './routes/user.js'
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.get("/",(req,res)=>{
    res.status("Durgesh Katyayan")
})
app.use('/api/v1',router)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`.bgMagenta.white));
