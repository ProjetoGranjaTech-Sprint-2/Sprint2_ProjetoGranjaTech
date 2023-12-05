create database BDGranjaTech;

use BDGranjaTech;

create table cadastro_cliente(
	idCliente int primary key auto_increment,
	nomeEmpresarial varchar(50) not null,
	nomeFantasia varchar(50) not null,
	cnpj char(18) not null,
	email varchar(50) not null,
	senha varchar(20) not null,
	telefone char(11) default ('Sem telefone'),
	cep varchar(9) not null,
	estado varchar(45) not null,
	cidade varchar(45) not null,
	bairro varchar(45) not null,
	rua varchar(45) not null,
	numero int not null
);

select * from cadastro_cliente;
delete from cadastro_cliente
	where idCliente = 2;

create table galinheiro(
idGalinheiro int auto_increment unique,
fkCliente int,
constraint fkCliente foreign key (fkCliente) references cadastro_cliente(idCliente),
primary key (idGalinheiro, fkCliente)
);

select * from galinheiro;


create table login (
	idAcesso int auto_increment, 
    fkCliente int, 
		constraint fkCliente_login 
			foreign key (fkCliente) 
				references cadastro_cliente(idCliente),
	primary key (idAcesso, fkCliente),
    dt_acesso datetime,
    fkGalinheiro int, constraint fkGalinheiro_login foreign key (fkGalinheiro) references galinheiro(idGalinheiro)
);



create table sensor(
id int primary key auto_increment unique,
fkGalin int,
constraint fkGalinheiro foreign key (fkGalin) references galinheiro(idGalinheiro),
tipo varchar(11), constraint chkTipo check(tipo in ('umidade', 'temperatura'))
);


INSERT INTO sensor values 
	(1, 1, 'temperatura'),
	(2, 1, 'umidade');



create table historico(
idHist int auto_increment,
fkSensor int,
constraint fkSensor foreign key (fkSensor) references sensor(id),
primary key (idHist, fkSensor),
timeVrf TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
stats decimal (3,1),
-- statsUmi decimal (3,1),
uniMedida varchar(2), constraint chkUniMedida check (uniMedida in ('%', '°C')) 
);

select * from historico 
	where fkSensor = 2
		order by idHist desc
			limit 48;

select * from historico;

select * from historico
	join sensor on fkSensor = id
		where fkGalin = 'XPTO';