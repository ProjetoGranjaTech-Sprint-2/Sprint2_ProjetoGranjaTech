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

insert into cadastro_cliente values
(null, 'José de Souza', 'Granja Raio de Luz', '49608551000135', 'granjaraiodeluz@outlook.com', 'Gr@nj@rai0deluZ', null, '02060050', 'São Paulo', 'São Paulo', 'Sonho', 'Margem Ficticia', 100),
(null, 'Maria Santana', 'Espaço Galinhas Felizes', '56220554000152', 'galinhasfelizes@gmail.com', 'G@linh@asfeliz3s', '11952314521', '01020052','São Paulo', 'São Paulo', 'Vila Meta', 'Juscelina Alvaras', 2);

select * from cadastro_cliente;



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

describe sensor;

select * from sensor;

select * from sensor join galinheiro on fkGalin = idGalinheiro where idGalinheiro = 2;



create table historico(
idHist int auto_increment,
fkSensor int,
constraint fkSensor foreign key (fkSensor) references sensor(id),
primary key (idHist, fkSensor),
timeVrf datetime,
stats decimal (3,1),
uniMedida varchar(2), constraint chkUniMedida check (uniMedida in ('%', '°C')) 
);

insert into historico values
(null, 1, '2023-10-23 12:00', '20'),
(null, 1, '2023-10-23 12:30', '20'),
(null, 1, '2023-10-23 13:00', '20.5'),
(null, 2, '2023-10-23 12:00', '22'),
(null, 2, '2023-10-23 12:30', '22.8'),
(null, 2, '2023-10-23 13:00', '23'),
(null, 3, '2023-10-23 12:00', '20'),
(null, 3, '2023-10-23 12:30', '20'),
(null, 3, '2023-10-23 13:00', '20'),
(null, 4, '2023-10-23 12:00', '25'),
(null, 4, '2023-10-23 12:30', '25'),
(null, 4, '2023-10-23 13:00', '26'),
(null, 5, '2023-10-23 12:00', '60'),
(null, 5, '2023-10-23 12:30', '65'),
(null, 5, '2023-10-23 13:00', '65'),
(null, 6, '2023-10-23 12:00', '52'),
(null, 6, '2023-10-23 12:30', '50'),
(null, 6, '2023-10-23 13:00', '45'),
(null, 7, '2023-10-23 12:00', '25'),
(null, 7, '2023-10-23 12:30', '25'),
(null, 7, '2023-10-23 13:00', '25'),
(null, 8, '2023-10-23 12:00', '20'),
(null, 8, '2023-10-23 12:30', '21'),
(null, 8, '2023-10-23 13:00', '22'),
(null, 9, '2023-10-23 12:00', '17'),
(null, 9, '2023-10-23 12:30', '17.5'),
(null, 9, '2023-10-23 13:00', '18'),
(null, 10, '2023-10-23 12:00', '30'),
(null, 10, '2023-10-23 12:30', '32'),
(null, 10, '2023-10-23 13:00', '31'),
(null, 11, '2023-10-23 12:00', '40'),
(null, 11, '2023-10-23 12:30', '41'),
(null, 11, '2023-10-23 13:00', '41'),
(null, 12, '2023-10-23 12:00', '26'),
(null, 12, '2023-10-23 12:30', '27'),
(null, 12, '2023-10-23 13:00', '26');

select * from historico;

select * from historico join sensor on fkSensor = idSensor;
select * from historico join sensor on historico.fkSensor = sensor.idSensor join galinheiro on sensor.fkGalin = galinheiro.idGalinheiro;

select h.timeVrf as DataHora,
	h.stats as Dado,
		s.idSensor as Sensor,
			s.tipo as TipoSensor,
				s.uni_medida as Medida,
					g.idGalinheiro as Galinheiro,
						g.fkCadastro as Cliente 
							from historico as h join sensor as s on h.fkSensor = s.idSensor join galinheiro as g on s.fkGalin = g.idGalinheiro where g.idGalinheiro = 1;
