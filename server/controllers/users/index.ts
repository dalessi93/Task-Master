import express from "express";
import { Users } from "../../models/users";
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', (req: any, res: any, next) =>{
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
    Users.create(user).then((user: any) => {
        req.session.email = user.email;
        req.session.username = user.username;
        return res.json(user);
    })
    .catch((error: any) => {
        next(error);
    });
})

router.get('/:id([0-9]+)', (req: any, res: any) => {
    Users.getById(req.params.id).then((response: any) => {
    res.json(response);
    });
});

// router.patch('/:id([0-9]+)', (req: any, res: any) => {
//     const { email, username, mobile, id} = req.body;
//     Users.update(email, username, mobile, id).then((response: any) => {
//         res.json({ message: 'Item updated' });
//     });
// });

export default router;