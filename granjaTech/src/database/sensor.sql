use sprint2;

create database sprint2;

create table sensor(
id int primary key auto_increment,
tipo varchar(11), constraint chkTipo check(tipo in ('umidade', 'temperatura')),
fkGalin int,
constraint fkGalinheiro foreign key (fkGalin) references galinheiro(idGalinheiro)
);

describe sensor;


insert into sensor values
(null, 'temperatura', 1),
(null, 'temperatura', 1),
(null, 'temperatura', 1),
(null, 'temperatura', 1),
(null, 'umidade', 1),
(null, 'umidade', 1),
(null, 'temperatura', 2),
(null, 'temperatura', 2),
(null, 'temperatura', 2),
(null, 'umidade', 2),
(null, 'umidade', 2),
(null, 'umidade', 2);

select * from sensor;

select * from sensor join galinheiro on fkGalin = idGalinheiro where idGalinheiro = 2;