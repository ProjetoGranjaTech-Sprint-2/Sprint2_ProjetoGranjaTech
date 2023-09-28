use sprint2;

create table sensor( 
    idSensor int primary key auto_increment, 
    fkGalin int,
    constraint fkGalin foreign key (fkGalin) references galinheiro(idGalinheiro),
    tipoSensor varchar(11),
    constraint chkTipoSensor check(tipoSensor in('umidade', 'temperatura'))
    );
    
insert into sensor values
(null, 1, 'temperatura'),
(null, 1, 'temperatura'),
(null, 1, 'temperatura'),
(null, 1, 'temperatura'),
(null, 1, 'temperatura'),
(null, 1, 'umidade'),
(null, 1, 'umidade'),
(null, 1, 'umidade'),
(null, 1, 'umidade'),
(null, 2, 'temperatura'),
(null, 2, 'temperatura'),
(null, 2, 'temperatura'),
(null, 2, 'temperatura'),
(null, 2, 'umidade'),
(null, 2, 'umidade'),
(null, 2, 'umidade'),
(null, 3, 'temperatura'),
(null, 3, 'temperatura'),
(null, 3, 'temperatura'),
(null, 3, 'temperatura'),
(null, 3, 'temperatura'),
(null, 3, 'temperatura'),
(null, 3, 'umidade'),
(null, 3, 'umidade'),
(null, 3, 'umidade'),
(null, 3, 'umidade'),
(null, 3, 'umidade'),
(null, 4, 'temperatura'),
(null, 4, 'temperatura'),
(null, 4, 'temperatura'),
(null, 4, 'umidade'),
(null, 4, 'umidade'),
(null, 5, 'temperatura'),
(null, 5, 'temperatura'),
(null, 5, 'temperatura'),
(null, 5, 'temperatura'),
(null, 5, 'temperatura'),
(null, 5, 'temperatura'),
(null, 5, 'temperatura'),
(null, 5, 'umidade'),
(null, 5, 'umidade'),
(null, 5, 'umidade'),
(null, 5, 'umidade'),
(null, 5, 'umidade'),
(null, 5, 'umidade');

select * from sensor;

select * from sensor join galinheiro on fkGalin = idGalinheiro;