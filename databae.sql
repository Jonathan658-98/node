pscreate database library
/* \l -> Permite listar las bases de datos*/
create table books(
    section int,
    title text,
    author text
);

/*(1, 'Foundation', 'Isaac Asimov');*/
insert into books values
    (2, 'Digital Fortress', 'Dan Brown'),
    (1, 'World War z', 'Max Brooks');

create table users(
    username text,
    password text
);

insert into users values
    ('Daniel', 'Dan1725'),
    ('Juan', 'Jn1835'),
    ('Pedro', 'Pdr25');