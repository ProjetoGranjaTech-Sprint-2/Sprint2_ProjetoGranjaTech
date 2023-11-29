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


create table galinheiro(
idGalinheiro int primary key auto_increment,
fkCliente int,
constraint fkCliente foreign key (fkCliente) references cadastro_cliente(idCliente)
);


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
id int primary key auto_increment,
tipo varchar(11), constraint chkTipo check(tipo in ('umidade', 'temperatura')),
fkGalin int,
constraint fkGalinheiro foreign key (fkGalin) references galinheiro(idGalinheiro)
);


create table historico(
idHist int auto_increment,
fkSensor int,
constraint fkSensor foreign key (fkSensor) references sensor(id),
primary key (idHist, fkSensor),
timeVrf datetime,
stats decimal (3,1),
uniMedida varchar(2), constraint chkUniMedida check (uniMedida in ('%', '°C')) 
);