CREATE DATABASE TEORIA_SIM;
USE  TEORIA_SIM;

CREATE TABLE MARCA (
    marca_id INTEGER IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR (30) NOT NULL    
);

CREATE TABLE MODELO(
    modelo_id INTEGER IDENTITY(1,1) PRIMARY KEY,
    nombre_modelo VARCHAR(30) NOT NULL,
    marca_id INTEGER,
    motor VARCHAR(30) NOT NULL,
    consumo_medio FLOAT,
    tipo_combustible VARCHAR(10),
    anio INTEGER NOT NULL,
    transmision VARCHAR(20),
    pais VARCHAR(20) NOT NULL,


    CONSTRAINT fk_marca_id_modelo FOREIGN KEY (marca_id) REFERENCES MARCA(marca_id)
);

/*TAbla nueva*/
create table SIMULACION(
simulacion_id integer identity(1,1) primary key,
modelo_id integer,
consumo_actual float,
escenario varchar(20),
velocidad float,
rendimiento FLOAT

constraint fkModelo foreign key (modelo_id) references MODELO (modelo_id));


INSERT INTO MARCA(nombre) VALUES ('Toyota');
INSERT INTO MARCA(nombre) VALUES ('Honda');
INSERT INTO MARCA(nombre) VALUES ('Ford');
INSERT INTO MARCA(nombre) VALUES ('Nissan');
INSERT INTO MARCA(nombre) VALUES ('Kia');
INSERT INTO MARCA(nombre) VALUES ('Volkswagen');
INSERT INTO MARCA(nombre) VALUES ('Hyundai');
INSERT INTO MARCA(nombre) VALUES ('BMW');
INSERT INTO MARCA(nombre) VALUES ('Volvo');
INSERT INTO MARCA(nombre) VALUES ('Chevrolet');
INSERT INTO MARCA(nombre) VALUES ('Dodge');


SELECT * FROM modelo;
/*CHEVROLET*/
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Spark',10,'1400',18.22,'Gasolina',2020,'Manual','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Spark F',10,'1400',18.23,'Gasolina',2020,'CVT','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Spark D',10,'1400',18.22,'Gasolina',2020,'CVT','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Aveo B',10,'1500',16.62,'Gasolina',2020,'Automatica','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Aveo',10,'1500',17.38,'Gasolina',2020,'CVT','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Aveo E',10,'1500',17.38,'Gasolina',2020,'Manual','USA');


/*Dodge*/
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('neon SE',11,'1400',14.42,'Gasolina',2020,'Automatico','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('neon Sport',11,'1600',14.26,'Gasolina',2020,'Manual','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Charger',11,'3600',9.11,'Gasolina',2020,'Automatico','USA');

/*Ford*/
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Focus SE',3,'2000',6.42,'Gasolina',2013,'Manual','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Focus Eco Boost',3,'1000',10,'Gasolina',2016,'Automatico','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Escape',3,'1900',10.42,'Gasolina',2019,'Automatico','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Edge',3,'2400',12.42,'Gasolina',2018,'Automatico','USA');

/*Honda*/
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('CRV EX',2,'2400',13.90,'Gasolina',2020,'Automatico','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('CRV',2,'1500',15.2,'Gasolina',2020,'Manual','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('CRV TURBO',2,'2600',19.42,'Gasolina',2020,'Automatico','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('S2000',2,'2000',18.42,'Gasolina',2000,'Manual','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('NSX',2,'3500',22.12,'Gasolina',2020,'Manual','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Civic R-Type',2,'2000',11.60,'Gasolina',2020,'Manual','Japon');


/*Hyundai*/

INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Elantra',7,'1600',17.2,'Gasolina',2020,'Automatico','Korea');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Elantra GLS',7,'1600',15.65,'Gasolina',2020,'Manual','Korea');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Tucson Turbo',7,'2000',12.45,'Gasolina',2020,'Automatico','Korea');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Santa FE',7,'2400',10.8,'Diesel',2020,'Manual','Korea');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Santa FE LIMITED',11.8,'2400',22.12,'Diesel',2009,'Manual','Korea');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('i10 GL',7,'1200',18,'Gasolina',2020,'Manual','Korea');

SELECT * FROM MODELO WHERE marca_id = 2;

/*
KIA
*/
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Soul',5,'2000',14.57,'Gasolina',2020,'Automatico','Korea');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Soul Lx',5,'2000',15.59,'Gasolina',2020,'Automatico','Korea');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Sorento SX',5,'2200',10.85,'Gasolina',2020,'Automatico','Korea');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Sorento Limited',5,'2300',12.67,'Gasolina',2020,'Automatico','Korea');


/*
Nissan
*/
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Sentra',4,'1600',15.1,'Gasolina',2020,'CVT','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Altima',4,'2500',15.79,'Gasolina',2020,'CVT','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Np300 CS',4,'2500',10.4,'Gasolina',2020,'Automatico','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Np300',4,'2500',10.7,'Diesel',2020,'MT','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Np300 DC',7,'2500',12.90,'Gasolina',2020,'Automatico','Japon');



/*Toyota*/


INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Corolla LE',1,'1800',16,'Gasolina',2020,'CVT','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Corolla HV',1,'1800',29.30,'Hibrido',2020,'CVT','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Corolla S',1,'2000',17.8,'Gasolina',2020,'CVT','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Hilux cabina sencilla',1,'2400',8.76,'Gasolina',2020,'Automatico','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Hilux doble Cabina',1,'2500',8.6,'Gasolina',2020,'Automatico','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Hilux DC',1,'2400',12.1,'Gasolina',2021,'Mecanico','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Hilux 4x4',1,'2400',11.9,'Gasolina',2020,'Mecanico','Japon');


/*
Volkswagen 
*/

INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Jetta ',6,'1400',17.2,'Gasolina',2020,'Mecanico','Alemania');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Jetta triptonic ',6,'1400',15.8,'Gasolina',2020,'Triptonica','Alemania');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Jetta TSI ',6,'1300',14.4,'Gasolina',2020,'Mecanico','Alemania');



/*
Vovlo
*/
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('XC40 momentum ',9,'1500',13.2,'Gasolina',2020,'Automatico','Suecia');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('XC40 T5 ',9,'1500',13.1,'Gasolina',2020,'Automatico','Suecia');

/*
BMW
*/
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('X5 ',8,'3000',8.9,'Diesel',2020,'Automatico','Alemania');



select * from marca join modelo on marca.marcaid=modelo.marcaid where pais='estados Unidos' order by modelo.consumomedio;


