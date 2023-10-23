use sprint2;

create table sensor(
idSensor int primary key auto_increment,
tipo varchar(11),
fkGalin int,
constraint fkGalinheiro foreign key (fkGalin) references galinheiro(idGalinheiro)
);

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