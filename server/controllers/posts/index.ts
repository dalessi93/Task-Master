import express from "express";
import { Posts } from "../../models/posts";

const router = express.Router();

router.get('/', (req: any, res: any) => {
    Posts.getAll().then((response: any) => {
        res.json(response);
    });
});

router.get("/:category", (req, res) => {
    Posts.getByCategory(req.params.category).then((response: any) => {
      res.json(response);
    });
  });

router.get("/:suburb", (req, res) => {
    Posts.getBySuburb(req.params.suburb).then((response: any) => {
      res.json(response);
    });
  });

router.get("/:state", (req, res) => {
    Posts.getByState(req.params.state).then((response: any) => {
      res.json(response);
    });
  });

export default router;