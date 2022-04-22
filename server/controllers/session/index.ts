import express from "express";
import { Users } from "../../models/users";
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', (req: any, res: any) => {
    const email = req.body.email;
    const password = req.body.password;
    Users.getByEmail(email).then((emailResponse: any) => {
        const valid =
        emailResponse && emailResponse.password;
            // bcrypt.compareSync(password, response.password);
        if (email === emailResponse.email && valid === true) {
            req.session.email = email;
            res.status(200).json({
                id: emailResponse.id,
                email: emailResponse.email,
            });
        } 
    });
});



export default router;