use sprint2;

create table galinheiro(
idGalinheiro int primary key auto_increment,
fkCliente int,
constraint fkCliente foreign key (fkCliente) references cadastro_cliente(idCliente)
);

insert into galinheiro values
(null, 4, 2, 1),
(null, 3, 3, 2);

select * from galinheiro;

select * from galinheiro join cadastro on fkCadastro = idCadastro where idCadastro = 1;
