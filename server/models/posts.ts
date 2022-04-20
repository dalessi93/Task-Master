import { db } from "../database/db";

export const Posts = {
    getAll: () => {
        const query = 'SELECT * FROM posts';
        return db.query(query).then((response: any) => {
            return response.rows;
        });
    },
    getByCategory: (category: any) => {
        const query = 'SELECT * FROM posts WHERE category = $1';
        return db
            .query(query, [category])
            .then((response: any) => {
                return response.rows;
            });
    },
    getBySuburb: (suburb: any) => {
        const query = 'SELECT * FROM posts WHERE suburb = $1';
        return db
            .query(query, [suburb])
            .then((response: any) => {
                return response.rows;
            });
    },
    getByState: (state: any) => {
        const query = 'SELECT * FROM posts WHERE state = $1';
        return db
            .query(query, [state])
            .then((response: any) => {
                return response.rows;
            });
    },
    create: ({ title, post, suburb, state, completed, user_id, category }) => {
        const query = 'INSERT INTO posts (title, post, suburb, state, completed, user_id, category) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
        return db
            .query(query, [title, post, suburb, state, completed, user_id, category])
            .then((response) => {
                return response.rows && response.rows.length > 0 ? response.rows[0] : null;
            });
    },
}