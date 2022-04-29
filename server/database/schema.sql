CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(120),
    password VARCHAR(64),
    username VARCHAR(15),
    mobile int,
);

INSERT INTO
    users (email, password, username, mobile)
VALUES
    (
        'test3@gmail.com',
        '$2b$10$CohrPIyOtNAZDnthhJV8Z.ZeFcCPPI5RC2zzpDyjvx/2NOtZGRSiK',
        'Bob',
        0467 8971 1989
    ),
    (
        'test4@gmail.com',
        '$2b$10$tFYuPBqo9Sf76ABm0br9keSrPymuecJPZ3OOl4KMzQ4QLtBx5gMv.',
        'Pablo',
        0488 6774 1285
    ),
    (
        'test5@gmail.com',
        '$2b$10$K1U/qovc8AwwkGTOpa4iOegBJpq8FQCb/OTOClrgX/cN0gD4ZEamm',
        'John',
        0453 7643 9274
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