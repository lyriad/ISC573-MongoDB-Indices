const generarFecha = function (annio) {
    if (annio == undefined || annio == null) { annio = 2016; }

    dia = Math.floor((Math.random() * 30) + 1);
    mes = Math.floor((Math.random() * 12) + 1);

    return new Date(annio, mes, dia, 0, 0);
}

const obtenerCliente = function () {
    var listadoClientes = [{ ID: "1001", NOMBRE: "MARIA CASTRO" }, { ID: "1002", NOMBRE: "ROBERTO SANTANA" }, { ID: "1003", NOMBRE: "MARIO RAMIREZ" },
    { ID: "1004", NOMBRE: "ALEXANDRA VASQUEZ" }, { ID: "1005", NOMBRE: "JOSE RAMON RAMIREZ" }, { ID: "1006", NOMBRE: "CARME GUTIERREZ" },
    { ID: "1007", NOMBRE: "ANGELA RODRIGUEZ" }, { ID: "1008", NOMBRE: "MANUEL CEPEDA" }, { ID: "1009", NOMBRE: "FRANCISCO PEREZ" },
    { ID: "1010", NOMBRE: "OLIVER RODRIGUEZ" }]

    indice = Math.floor((Math.random() * 10))
    return listadoClientes[indice];
}

const obtenerCiudad = function () {
    listadoCiudad = ["SANTIAGO", "MOCA", "LA VEGA", "SANTO DOMINGO", "DAJABON", "MONTECRISTI", "HIGUEY", "MAO VALVERDE"];

    indice = Math.floor((Math.random() * 8));
    return listadoCiudad[indice];
}

const obtenerProducto = function () {
    listadoProducto = [{ ID: "11", DESCRIPCION: "PRODUCTO 11", PRECIO: 14.00 }, { ID: "14", DESCRIPCION: "PRODUCTO 14", PRECIO: 10.00 },
    { ID: "42", DESCRIPCION: "PRODUCTO 42", PRECIO: 9.80 }, { ID: "72", DESCRIPCION: "PRODUCTO 72", PRECIO: 34.80 },
    { ID: "51", DESCRIPCION: "PRODUCTO 51", PRECIO: 42.40 }, { ID: "41", DESCRIPCION: "PRODUCTO 41", PRECIO: 7.70 },
    { ID: "65", DESCRIPCION: "PRODUCTO 65", PRECIO: 16.80 }, { ID: "20", DESCRIPCION: "PRODUCTO 20", PRECIO: 64.80 },
    { ID: "33", DESCRIPCION: "PRODUCTO 33", PRECIO: 150.00 }, { ID: "60", DESCRIPCION: "PRODUCTO 60", PRECIO: 27.20 },
    { ID: "39", DESCRIPCION: "PRODUCTO 39", PRECIO: 14.40 }, { ID: "49", DESCRIPCION: "PRODUCTO 49", PRECIO: 16.00 }];
    indice = Math.floor((Math.random() * 12));
    return listadoProducto[indice];
}

const obtenerSucursal = function () {
    listadoSucursal = [null, "SUCURSAL SANTIAGO", "SUCURSAL SANTO DOMINGO"];
    indice = Math.floor((Math.random() * 3));
    return listadoSucursal[indice];
}
/*db.loadServerScripts();*/

/*
var documentoFactura = {
    codigoFactura: 1012,
    sucursal: "SUCURSAL SANTIAGO",
    codigoCliente: "1010",
    fechaFactura: ISODate("2016-10-09 00:00:00"),
    nombreCliente: "OLIVER RODRIGUEZ",
    ciudadFactura: "SANTIAGO",
    ciudadDespacho: "LA VEGA",
    totalFactura: 2394.00,
    articulos: [
        { codigoProducto: "39", descripcion: "PRODUCTO 39", precioVenta: 14.40, cantidadFacturada: 10.00, importe: 144.00 },
        { codigoProducto: "33", descripcion: "PRODUCTO 33", precioVenta: 150.00, cantidadFacturada: 15.00, importe: 2250.00 }
    ]
}
*/

module.exports = {
    generarFecha,
    obtenerCliente,
    obtenerCiudad,
    obtenerProducto,
    obtenerSucursal
};
