use sprint2;

create table galinheiro(
idGalinheiro int primary key auto_increment,
qtdSensorTemp int,
qtdSensorUmid int,
fkCadastro int,
constraint fkCadastro foreign key (fkCadastro) references cadastro(idCadastro)
);

insert into galinheiro values
(null, 4, 2, 1),
(null, 3, 3, 2);

select * from galinheiro;

select * from galinheiro join cadastro on fkCadastro = idCadastro where idCadastro = 1;
