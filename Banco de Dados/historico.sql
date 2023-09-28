use sprint2;

create table historico(
idHist int primary key auto_increment,
fkSensor int not null,
constraint fkSensor foreign key (fkSensor) references sensor(idSensor),
fkGalin int not null,
constraint fkGalinheiro foreign key (fkGalin) references galinheiro(idGalinheiro),
timeVrf datetime not null,
statsTemp decimal(3, 1),
statsUmid decimal(3, 1) 
);
-- verificação de 30 em 30 minutos

insert into historico values
(null, 1, 1, '2023-09-23 12:00:00', '26.5', null),
(null, 2, 1, '2023-09-23 12:00:00', '26.5', null),
(null, 3, 1, '2023-09-23 12:00:00','26.8', null),
(null, 4, 1, '2023-09-23 12:00:00', '26.6', null),
(null, 5, 1, '2023-09-23 12:00:00', '26.5', null),
(null, 6, 1, '2023-09-23 12:00:00', null, '45.5'),
(null, 7, 1, '2023-09-23 12:00:00', null, '45.5'),
(null, 8, 1, '2023-09-23 12:00:00', null, '45.9'),
(null, 9, 1, '2023-09-23 12:00:00', null, '45.7'),
(null, 10, 2, '2023-09-23 12:15:00', '24.9', null),
(null, 11, 2, '2023-09-23 12:15:00', '25.0', null),
(null, 12, 2, '2023-09-23 12:15:00', '25.0', null),
(null, 13, 2, '2023-09-23 12:15:00', '24.7', null),
(null, 14, 2, '2023-09-23 12:15:00', null, '42.7'),
(null, 15, 2, '2023-09-23 12:15:00', null, '42.8'),
(null, 16, 2, '2023-09-23 12:15:00', null, '44.00'),
(null, 17, 3, '2023-09-23 12:30:00', '27.3', null),
(null, 18, 3, '2023-09-23 12:30:00', '27.1', null),
(null, 19, 3, '2023-09-23 12:30:00', '27.0', null),
(null, 20, 3, '2023-09-23 12:30:00', '27.0', null),
(null, 21, 3, '2023-09-23 12:30:00', '27.1', null),
(null, 22, 3, '2023-09-23 12:30:00', '27.1', null),
(null, 23, 3, '2023-09-23 12:30:00', null, '48.0'),
(null, 24, 3, '2023-09-23 12:30:00', null, '48.2'),
(null, 25, 3, '2023-09-23 12:30:00', null, '48.1'),
(null, 26, 3, '2023-09-23 12:30:00', null, '48.6'),
(null, 27, 3, '2023-09-23 12:30:00', null, '48.4'),
(null, 28, 4, '2023-09-23 12:45:00', '23.8', null),
(null, 29, 4, '2023-09-23 12:45:00', '24.0', null),
(null, 30, 4, '2023-09-23 12:45:00', '24.2', null),
(null, 31, 4, '2023-09-23 12:45:00', null, '35.1'),
(null, 32, 4, '2023-09-23 12:45:00', null, '35.3'),
(null, 33, 5, '2023-09-23 13:00:00', '28.0', null),
(null, 34, 5, '2023-09-23 13:00:00', '27.9', null),
(null, 35, 5, '2023-09-23 13:00:00', '28.3', null),
(null, 36, 5, '2023-09-23 13:00:00', '28.1', null),
(null, 37, 5, '2023-09-23 13:00:00', '28.1', null),
(null, 38, 5, '2023-09-23 13:00:00', '28.1', null),
(null, 39, 5, '2023-09-23 13:00:00', '28.2', null),
(null, 40, 5, '2023-09-23 13:00:00', null, '50.1'),
(null, 41, 5, '2023-09-23 13:00:00', null, '51.0'),
(null, 42, 5, '2023-09-23 13:00:00', null, '51.1'),
(null, 43, 5, '2023-09-23 13:00:00', null, '50.7'),
(null, 44, 5, '2023-09-23 13:00:00', null, '50.5'),
(null, 45, 5, '2023-09-23 13:00:00', null, '50.1');

select * from historico;

select * from historico join galinheiro on fkGalin = idGalinheiro;

select * from historico join galinheiro on fkGalin = idGalinheiro where idGalinheiro = 2;

select h.fkSensor as Sensor,
	h.timeVrf as timeVrf,
		h.statsTemp as statsTemp,
			h.statsUmid as statsUmid,
				g.idGalinheiro as Galinheiro
				from historico as h join galinheiro as g 
					on fkGalin = idGalinheiro
						where idGalinheiro = 4;