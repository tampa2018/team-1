# SQL commands to create and populate the MySQL database for Project Three
# CNT 4714 - Fall 2018
#
# delete the database if it already exists
drop database if exists team1;

# create a new database named project3
create database team1;

# switch to the new database
use team1;

# create the schemas for the four relations in this database
create table users(
	fbid varchar(20) not null,
    first_name varchar(20),
    last_name varchar(20),
    primary key (fbid)
);

create table experts (
    fbid varchar(20) not null,
    company varchar(100),
    designation varchar(200),
    primary key (fbid),
    foreign key(fbid) references users(fbid) on delete cascade 
);

create table admins (
    fbid varchar(20) not null,
    primary key(fbid),
    foreign key(fbid) references users(fbid) on delete cascade 
);

create table posts(
	fbid varchar(20) not null,
    post_id varchar(100) not null,
    post_subject varchar(500) not null,
    body varchar(62000),
    num_likes INT, 
    num_dislikes INT,
    category varchar(100),
    primary key (post_id),
    foreign key (fbid) references users(fbid) on delete cascade
  );

create table comments(
	fbid varchar(20) not null,
    post_id varchar(100) not null,
    comment_id varchar(100) not null,
    body varchar(62000),
    primary key (comment_id),
    foreign key (post_id) references posts(post_id) on delete cascade,
    foreign key (fbid) references users(fbid) on delete cascade
);