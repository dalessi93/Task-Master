CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(120),
    password VARCHAR(64),
    username VARCHAR(15),
    mobile int,
);

CREATE TABLE posts(
    post_id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(120),
    post TEXT,
    suburb VARCHAR(50),
    state VARCHAR(10),
    completed BOOLEAN,
    user_id int,
    CONSTRAINT fk_posts_users_user_id FOREIGN KEY (user_id) REFERENCES users (user_id),
    category VARCHAR(20),
);