use sprint2;

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

insert into cadastro_cliente values
(null, 'José de Souza', 'Granja Raio de Luz', '49608551000135', 'granjaraiodeluz@outlook.com', 'Gr@nj@rai0deluZ', null, '02060050', 'São Paulo', 'São Paulo', 'Sonho', 'Margem Ficticia', 100),
(null, 'Maria Santana', 'Espaço Galinhas Felizes', '56220554000152', 'galinhasfelizes@gmail.com', 'G@linh@asfeliz3s', '11952314521', '01020052','São Paulo', 'São Paulo', 'Vila Meta', 'Juscelina Alvaras', 2);

select * from cadastro_cliente;