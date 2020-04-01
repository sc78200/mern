import express from 'express';
import { signIn, signUp } from '../controllers/personController';
let personRouter = express.Router();

personRouter.post('/signUp', signUp);
personRouter.post('/signIn', signIn);


export default personRouter;
