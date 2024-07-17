drop database if exists expensetracker;
create database expensetracker;
use expensetracker;


create table users(
	id INT NOT NULL auto_increment,
    firstName varchar(255) not null,
	lastName varchar(255) not null,
	email varchar(255) not null,
	password varchar(255) not null,
    primary key(id)
    
);
create table finances(
	id INT NOT NULL auto_increment,
    title varchar(255) not null,
    description varchar(255),
    amount INT not null,
    user_id INT NOT NULL,
    primary KEY(id),
    FOREIGN key (user_id) REFERENCEs users(id)
);
