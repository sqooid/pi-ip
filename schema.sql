drop table if exists hosts;
create table if not exists hosts (id integer primary key, hostname text, ip text, updated Datetime)