use sprint2;

create table historico(
idHist int auto_increment,
fkSensor int,
constraint fkSensor foreign key (fkSensor) references sensor(idSensor),
primary key (idHist, fkSensor),
timeVrf datetime,
stats decimal (3,1)
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
				g.idGalinheiro as Galinheiro,
					g.fkCadastro as Cliente 
						from historico as h join sensor as s on h.fkSensor = s.idSensor join galinheiro as g on s.fkGalin = g.idGalinheiro where g.idGalinheiro = 1;