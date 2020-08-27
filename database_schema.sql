CREATE TABLE users (
	id 			bigint primary key auto_increment,
    username 	varchar(50) not null unique,
    password 	varchar(50) not null,
    level 		int not null
);

CREATE TABLE post (
	id 			bigint primary key auto_increment,
    type 		varchar(10) not null,
    title 		varchar(50) not null,
    content 	varchar(1000) not null
);

CREATE TABLE comments (
	id			bigint primary key auto_increment,
    date		timestamp not null,
    content		varchar(500) not null,
    user_id 	bigint not null references users(id),
    post_id		bigint not null references post(id)
);

CREATE TABLE category (
	id 			bigint primary key auto_increment,
    title 		varchar(30) not null,
    description varchar(300) not null
);

CREATE TABLE category_post (
	post_id 		bigint,
    category_id 	bigint,
    constraint category_post_pk primary key (post_id, category_id)
);
