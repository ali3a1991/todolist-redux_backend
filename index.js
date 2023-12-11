import "dotenv/config";
import cors from "cors";
import express from "express";
import multer from "multer";
import {router as authRouter} from './routes/userRoutes.js'
import {router as todoRouter} from './routes/todoRouters.js'

const port = process.env.PORT;
const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());
app.use('/api/auth', upload.none(), authRouter)
app.use('/api/user', upload.none(), todoRouter)

app.listen(port, () => console.log("i am port:", port));
