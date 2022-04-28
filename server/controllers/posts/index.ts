import express from "express";
import { Posts } from "../../models/posts";

const router = express.Router();

// router.get('/', (req: any, res: any) => {
//     Posts.getAll().then((response: any) => {
//         res.json(response);
//     });
// });

// router.get("/:category", (req, res) => {
//     Posts.getByCategory(req.params.category).then((response: any) => {
//       res.json(response);
//     });
//   });

// router.get("/:suburb", (req, res) => {
//     Posts.getBySuburb(req.params.suburb).then((response: any) => {
//       res.json(response);
//     });
//   });

// router.get("/:state", (req, res) => {
//     Posts.getByState(req.params.state).then((response: any) => {
//       res.json(response);
//     });
//   });

router.get("/filter", (req, res) => {
  
    Posts.getByFilter(req.query.category, req.query.suburb, req.query.state, req.query.id).then((response: any) => {
      res.json(response);
    });
});

router.post('/', (req: any, res: any) => {
  Posts.create(req.body).then((response: any) => {
      res.status(201).json(response);
  });
});

router.delete('/:id([0-9]+)', (req: any, res: any) => {
  Posts.delete(req.params.id).then((response: any) => {
      if (response) {
          res.json({ status: true, message: 'Post deleted' });
      }
  });
});

export default router;