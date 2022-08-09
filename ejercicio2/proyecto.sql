create table marca 
(marcaID number GENERATED ALWAYS AS IDENTITY ,
nombre varchar (30)

)

Alter table marca ADD CONSTRAINT pk_marca PRIMARY KEY (marcaID);
create table modelo
(
modeloID number GENERATED ALWAYS as IDENTITY,
nombre varchar(30),
marcaID number,
motor varchar(10),
consumoMedio number,
tipoCombustible varchar(10),
constraint pk_modelo primary key(modeloID),
FOREIGN key (marcaID) references marca(marcaID)
)
alter table modelo add anio number;
alter table modelo add transmision varchar(20);
alter table marca add pais varchar(20);

insert INTO marca (nombre)
values ('toyota');
insert INTO marca (nombre)
values ('Honda');
insert INTO marca (nombre)
values ('ford');
insert INTO marca (nombre)
values ('Nissan');
insert INTO marca (nombre)
values ('Kia');
insert INTO marca (nombre)
values ('wolkswagen');
insert INTO marca (nombre)
values ('hyundai');
insert INTO marca (nombre)
values ('bmw');
insert INTO marca (nombre)
values ('volvo');
insert INTO marca (nombre)
values ('chevrolet');
insert INTO marca (nombre)
values ('dodge');

select * from marca;
select * from modelo;

update marca 
 set pais='japon' where marcaid=1 or marcaid=2 or marcaid=4 ;
 update marca 
 set pais='estados Unidos' where marcaid=3 or marcaid=10 or marcaid=11 ;
 update marca 
 set pais='corea' where marcaid=5 or marcaid=7 ;
update marca 
 set pais='alemania' where marcaid=6 or marcaid=8 ;
 update marca 
 set pais='suecia' where marcaid=9 ;

/*Chevrolet*/
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('spark',10,'1400',18.22,'gasolina',2020,'manual');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('spark F',10,'1400',18.23,'gasolina',2020,'cvt');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('spark E',10,'1400',18.22,'gasolina',2018,'cvt');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('aveo B',10,'1500',16.62,'gasolina',2020,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('aveo',10,'1500',17.38,'gasolina',2020,'cvt');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('aveo E',10,'1500',17.38,'gasolina',2019,'mecanica');

/*Dodge*/
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('neon SE',11,'1400',14.42,'gasolina',2020,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('neon Sport',11,'1600',14.26,'gasolina',2020,'mecanica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('charger',11,'3600',9.11,'gasolina',2020,'automatica');

/*ford*/
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('focus SE',3,'2000',6.7,'gasolina',2018,'mecanica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('focus 1.0 ecobost',3,'1000',20,'gasolina',2018,'automatico');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Escape SE',3,'2000',9.4,'gasolina',2018,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Escape',3,'2500',8.92,'gasolina',2010,'automatica');

/*honda*/
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('crv ex',2,'2400',13.9,'gasolina',2019,'cvt');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('crv touring',2,'1500',15.2,'gasolina',2020,'cvt');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('crv turbo',2,'1500',15.2,'gasolina',2020,'cvt');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('civic ex',2,'1700',14.4,'gasolina',2019,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('civic type-r',2,'1700',11.6,'gasolina',2020,'mecanica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('civic touring',2,'1700',17.4,'gasolina',2019,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('civic s',2,'2000',16.6,'gasolina',2019,'mecanica');

/*Hyundai*/
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('elantra gls',7,'2000',17.2,'gasolina',2020,'cvt');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values(' elantra gls tm',7,'2000',15.65,'gasolina',2019,'mecanica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('tucson gls',7,'2000',12.45,'gasolina',2020,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values(' tucson gls premium',7,'2000',12.45,'gasolina',2020,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('santa fe',7,'2000',10.8,'gasolina',2019,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('santa fe limited',7,'2000',10.8,'gasolina',2020,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('i10',7,'1300',18,'gasolina',2019,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('i10 GL',7,'1300',16.7,'gasolina',2020,'automatica');


/*Insert nuevos 
KIA*/

insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Soul',5,'2000',17.5,'gasolina',2019,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Soul Lx',5,'1600',17.06,'gasolina',2020,'mecanica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Sorento SX',5,'3400',10.8,'gasolina',2020,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Sorento Limited',5,'2400',12.67,'gasolina',2020,'automatica');

/*Nissan*/
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Sentra',4,'2000',15.1,'gasolina',2020,'cvt');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Altima',4,'2500',12.4,'gasolina',2020,'cvt');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('np300 CS',4,'2500',12.4,'gasolina',2020,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('np300',4,'2500',10.7,'diesel',2020,'mt');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('np300 DC',7,'2500',8.76,'gasolina',2020,'automatica');

/*toyota*/
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Corolla LE',1,'1800',16,'gasolina',2020,'CVT');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Corolla HV',1,'1800',26,'hibrido',2020,'CVT');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Corolla S',1,'2000',17.8,'gasolina',2020,'CVT');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Hilux cabina sencilla',1,'2400',8.76,'gasolina',2020,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Hilux doble Cabina',1,'2500',8.6,'gasolina',2020,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Hilux DC',1,'3000',12.1,'gasolina',2021,'mecanica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Hilux 4x4',1,'3000',11.6,'gasolina',2020,'mecanica');

update marca
set nombre='volkswagen' where marcaid=6;

/*volkswagen*/
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Jetta ',6,'1400',17.2,'gasolina',2020,'mecanica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Jetta triptonic ',6,'1400',16.4,'gasolina',2020,'triptonica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('Jetta TSI ',6,'2000',14.4,'gasolina',2020,'mecanica');

/*volvo*/
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('XC40 momentum ',9,'1700',13.2,'gasolina',2020,'automatica');
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('XC40 T5 ',9,'1700',13,1,'gasolina',2020,'automatica');

/*BMW*/
insert into modelo(nombre,marcaID,motor,consumoMedio,tipoCombustible,anio,transmision)
values('X5 ',8,'3000',8.9,'diesel',2020,'automatica');




select * from marca join modelo on marca.marcaid=modelo.marcaid where pais='estados Unidos' order by modelo.consumomedio;


