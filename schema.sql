drop table if exists hosts;
create table if not exists hosts (hostname text primary key, ip text, updated integer)