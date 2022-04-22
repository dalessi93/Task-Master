import express from "express";
import { Users } from "../../models/users";
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', (req: any, res: any) =>{
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
    Users.create(user).then((user) => {
        req.session.email = user.email;
        req.session.username = user.username;
        return res.json(user);
    })
})



export default router;