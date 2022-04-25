import express from "express";
import { Users } from "../../models/users";
import bcrypt from 'bcrypt';

const router = express.Router();

// Login
router.post('/', (req: any, res: any, next: any) => {
    const email = req.body.email;
    const password = req.body.password;
    Users.getByEmail(email).then((emailResponse: any) => {
        const valid = emailResponse && bcrypt.compareSync(password, emailResponse.password);
        if (email === emailResponse.email && valid === true) {
            // req.session.user_id = emailResponse.id;
            req.session.user_id = emailResponse.user_id;
            req.session.email = email;
            res.status(200).json({
                // id: emailResponse.id,
                id: emailResponse.user_id,
                email: emailResponse.email,
            });
        } else {
            res.status(400).json({
                message: 'Incorrect login details! please try again.',
            });
        }
    });
});

// Get session

router.get('/', (req: any, res: any) => {
    if (req.session.email) {
        res.json({
            id: req.session.user_id,
            email: req.session.email,
        });
    } else {
        res.status(401).json({
            message: 'Not logged in.',
        });
    }
});


// Logout

router.delete('/', (req: any, res: any) => {
    req.session.destroy();
    console.log('Signed out');
    res.json({
        message: 'Logged out.',
    });
});


export default router;