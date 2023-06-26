# desafio5_tienda_de_Joyas

Desafío - Tienda de Joyas

API REST.

1. Límite de recursos
2. Filtro de recursos por campos
3. Paginación
4. Ordenamiento
5. Estructura de datos HATEOAS


script utilizado fue:

CREATE DATABASE joyas; \c joyas;
CREATE TABLE inventario (id SERIAL, nombre VARCHAR(50), categoria VARCHAR(50), metal VARCHAR(50), precio INT, stock INT);
INSERT INTO inventario values
(DEFAULT, 'Collar Heart', 'collar', 'oro', 20000 , 2), (DEFAULT, 'Collar History', 'collar', 'plata', 15000 , 5), (DEFAULT, 'Aros Berry', 'aros', 'oro', 12000 , 10),
(DEFAULT, 'Aros Hook Blue', 'aros', 'oro', 25000 , 4), (DEFAULT, 'Anillo Wish', 'aros', 'plata', 30000 , 4), (DEFAULT, 'Anillo Cuarzo Greece', 'anillo', 'oro', 40000 , 2);


Estructura de datos:

Consulta de joyas con cláusulas en estructura de datos HATEOAS: 
localhost:3000/joyas?limits=3&page=2&order_by=stock_ASC


Filtrando las joyas por precio máximo, mínimo, categoría y metal: 
http://localhost:3000/joyas/filtros?precio_min=25000&precio_max=30000&categoria =aros&metal=plata


GET /joyas 
GET /joyas/filtros









