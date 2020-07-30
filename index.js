const connectToDB = require('./mongo');
const Factura = require('./factura');
const {
    generarFecha,
    obtenerCliente,
    obtenerCiudad,
    obtenerProducto,
    obtenerSucursal
} = require('./helpers');

connectToDB();

const seed = async () => {

    for (index = 1; index <= 500000; index++) {

        console.log('Generando factura de código', index);

        const cliente = obtenerCliente();
        const sucursal = obtenerSucursal();
        const fechaFactura = generarFecha();
        const ciudadFactura = obtenerCiudad();
        let ciudadDespacho;

        do {
            ciudadDespacho = obtenerCiudad();
        } while (ciudadDespacho === ciudadFactura);

        const articulos = [];
        let totalFactura = 0;

        for (i = 0; i < Math.floor((Math.random() * 12) + 1); i++) {

            const articulo = obtenerProducto();
            const cantidad = Math.floor((Math.random() * 6) + 1);
            const importe = cantidad * articulo.PRECIO;

            const indiceArticulo = articulos.findIndex(
                ({ ID }) => ID === articulo.ID);

            if (indiceArticulo === -1) {
                articulos.push({
                    codigoProducto: articulo.ID,
                    descripcion: articulo.DESCRIPCION,
                    precioVenta: articulo.PRECIO,
                    cantidadFacturada: cantidad,
                    importe: importe
                });
            } else {

                articulos[indiceArticulo].cantidadFacturada += cantidad;
                articulos[indiceArticulo].importe += importe;
            }
            totalFactura += importe;
        }

        const factura = new Factura({
            'codigoFactura': index,
            'sucursal': sucursal,
            'codigoCliente': cliente.ID,
            'fechaFactura': fechaFactura,
            'nombreCliente': cliente.NOMBRE,
            'ciudadFactura': ciudadFactura,
            'ciudadDespacho': ciudadDespacho,
            'totalFactura': totalFactura,
            'articulos': articulos
        });
        await factura.save();
        break;
    }
    console.log('Ya terminó');
    process.exit(0);
}

setTimeout(async () => await seed(), 2000);
