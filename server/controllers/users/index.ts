import express from "express";
import { Users } from "../../models/users";

const router = express.Router();

router.get('/', (req: any, res: any) => {
        Users.getAll().then((response: any) => {
            res.json(response)
        })
    
});

export default router;