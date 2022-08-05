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

SELECT * FROM MARCA;


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


/*CHEVROLET*/
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Spark',10,'1400',18.22,'Gasolina',2020,'Manual','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Spark F',10,'1400',18.67,'Gasolina',2020,'CVT','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Spark e',10,'1400',18.22,'Gasolina',2020,'CVT','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Aveo B',10,'1500',16.62,'Gasolina',2020,'Automatica','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Aveo',10,'1500',17.33,'Gasolina',2020,'CVT','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Aveo E',10,'1500',20.22,'Gasolina',2020,'Manual','USA');


/*Dodge*/
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('neon SE',11,'1400',14.42,'Gasolina',2020,'Automatico','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('neon Sport',11,'1600',14.00,'Gasolina',2020,'Manual','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Charger',11,'3600',9.42,'Gasolina',2020,'Automatico','USA');

/*Ford*/
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Focus SE',3,'2000',6.42,'Gasolina',2013,'Manual','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Focus Eco Boost',3,'1000',10,'Gasolina',2016,'Automatico','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Escape',3,'1900',10.42,'Gasolina',2019,'Automatico','USA');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Edge',3,'2400',12.42,'Gasolina',2018,'Automatico','USA');

/*Honda*/
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('CRV EX',2,'2400',13.90,'Gasolina',2020,'Automatico','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('CRV',2,'1500',15.2,'Gasolina',2020,'Manual','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('CRV TURBO',2,'2600',19.42,'Gasolina',2020,'Automatico','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('S2000',2,'3300',20.42,'Gasolina',2000,'Manual','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('NSX',2,'3400',22.12,'Gasolina',1994,'Manual','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Civic R-Type',2,'1600',9.42,'Gasolina',2020,'Manual','Japon');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Accord',2,'1200',9.42,'Gasolina',2005,'Automatico','Japon');


/*Hyundai*/

INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Elantra',7,'2000',17.2,'Gasolina',2020,'Automatico','Korea');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Elantra GLS',7,'2500',15.65,'Gasolina',2020,'Manual','Korea');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Tucson Turbo',7,'2800',12.45,'Gasolina',2020,'Automatico','Korea');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Santa FE',7,'2200',10.8,'Diesel',2020,'Manual','Korea');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Santa FE LIMITED',11.8,'2400',22.12,'Diesel',2009,'Manual','Korea');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('i10 GL',7,'1600',18,'Gasolina',2020,'Manual','Korea');
INSERT INTO MODELO(nombre_modelo, marca_id, motor, consumo_medio, tipo_combustible, anio, transmision,pais) VALUES('Sonata',7,'1200',9.42,'Gasolina',2018,'Automatico','Korea');



select * from marca join modelo on marca.marcaid=modelo.marcaid where pais='estados Unidos' order by modelo.consumomedio;


