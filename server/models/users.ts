import { response } from "express";
import { db } from "../database/db";

export const Users = {
    getAll: () => {
        const query = 'SELECT * FROM users';
        return db.query(query).then((response: any) => {
            return response.rows;
        });
    },
    getById: (id: any) => {
        const query = 'SELECT * FROM users WHERE user_id = $1';
        return db
            .query(query, [id])
            .then((response: any) => {
                return response.rows && response.rows.length > 0 ? response.rows[0] : null;
            });
    },
    getByEmail: (email: string) => {
        const query = 'SELECT * FROM users WHERE email = $1';
        return db
            .query(query, [email])
            .then((response: any) => {
                return response.rows[0];
            });
    },
    create: ({ email, password, username }) => {
        const query = 'INSERT INTO users (email, password, username) VALUES($1, $2, $3) RETURNING *';
        return db
            .query(query, [email, password, username])
            .then((response: any) => {
                return response.rows && response.rows.length > 0 ? response.rows[0] : null;
            });
    },
    update: (email: any, username: any, mobile: any, id: any) => {
        const query = `UPDATE users SET email = $1, username = $2, mobile = $3 WHERE user_id = $4 RETURNING *`;
        return db
            .query(query, [email, username, mobile, id])
            .then((response: any) => {
                return response.rows ? response.rows[0] : {};
            });
    },
}