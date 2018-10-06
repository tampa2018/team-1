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

create table campaigns(
	campaign_year varchar(8) not null,
    title varchar(50), 
    description varchar(250),
    primary key(campaign_year)
);

create table posts(
	post_id varchar(100) not null,
	fbid varchar(20) not null,
    post_subject varchar(500) not null,
    body varchar(1000),
    num_likes INT, 
    num_dislikes INT,
    time_stamp varchar(100),
    category varchar(100),
    campaign_year varchar(8),
    primary key (post_id),
    foreign key (fbid) references users(fbid) on delete cascade,
    foreign key (campaign_year) references campaigns(campaign_year) on delete cascade
  );

create table comments(
	fbid varchar(20) not null,
    post_id varchar(100) not null,
    comment_id varchar(100) not null,
    body varchar(1000),
    time_stamp varchar(100),
    primary key (comment_id),
    foreign key (post_id) references posts(post_id) on delete cascade,
    foreign key (fbid) references users(fbid) on delete cascade
);

INSERT into users values("1", "Bhavika", "Boga");
INSERT into users values("2", "Alex", "Hartley");
INSERT into users values("3", "Edward", "Abrahamson");
INSERT into users values("4", "Wyatt", "Waterfield");
INSERT into users values("5", "Rohan", "Kharwadkar");
INSERT into users values("6", "Samuel", "Stall");

INSERT into admins values("2");
INSERT into admins values("3");

INSERT into campaigns values("2018", "It's our 2018 campaign", "Get excited!");

INSERT into experts values("2", "JPMorgan", "I work at JPMorgan I swear");

INSERT into posts values("1", "1", "Who needs more coffee?", "me", 1000, 4, "someone give me coffee", "time", "2018");
INSERT into posts values("2", "1", "I ate too many cookies", "many regrets", 1000, 4, "cookies", "time", "2018");
INSERT into posts values("3", "2", "ideas ideas", "so much description", 1000, 4, "ideas", "time", "2018");
INSERT into posts values("4", "3", "idea1", "body1", 1000, 4, "category1", "time", "2018");
INSERT into posts values("5", "5", "idea2", "body2", 1000, 4, "category2", "time", "2018");
INSERT into posts values("6", "6", "idea3", "body2", 1000, 4, "category3", "time", "2018");

INSERT into comments values("2", "1", "1", "sammeeeee", "time");
INSERT into comments values("3", "3", "2", "oh wow what a great idea", "time");
INSERT into comments values("6", "2", "3", "lol me", "time");
INSERT into comments values("4", "6", "4", "more idea contribution, look at me go", "time");