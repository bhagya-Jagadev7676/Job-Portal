
import express from 'express'

const router=express.Router();
import {applyjob, getapplicationsoflogineduser, updateapplication} from '../controller/jobapplicationscontroller.js';


router.post('/apply/:jobid/:userid',applyjob);
router.get('/apply/:userid',getapplicationsoflogineduser);
router.put('apply/:id',updateapplication)
export default router
