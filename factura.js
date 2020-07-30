const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Factura = new Schema({
    codigoFactura: {
        type: Number,
        required: true
    },
    sucursal: {
        type: String,
        enum: [null, "SUCURSAL SANTIAGO", "SUCURSAL SANTO DOMINGO"]
    },
    codigoCliente: {
        type: String,
        required: true
    },
    fechaFactura: {
        type: Date,
        required: true
    },
    nombreCliente: {
        type: String,
        required: true
    },
    ciudadFactura: {
        type: String,
        required: true,
        enum: ["SANTIAGO", "MOCA", "LA VEGA", "SANTO DOMINGO", "DAJABON", "MONTECRISTI", "HIGUEY", "MAO VALVERDE"]
    },
    ciudadDespacho: {
        type: String,
        required: true,
        enum: ["SANTIAGO", "MOCA", "LA VEGA", "SANTO DOMINGO", "DAJABON", "MONTECRISTI", "HIGUEY", "MAO VALVERDE"]
    },
    totalFactura: {
        type: Number,
        required: true,
        min: 0
    },
    articulos: {
        type: [
            new Schema({
                codigoProducto: {
                    type: String,
                    required: true
                },
                descripcion: {
                    type: String,
                    required: true
                },
                precioVenta: {
                    type: Number,
                    required: true,
                    min: 0
                },
                cantidadFacturada: {
                    type: Number,
                    required: true,
                    min: 0
                },
                importe: {
                    type: Number,
                    required: true,
                    min: 0
                },
            })
        ]
    }
});

module.exports = mongoose.model('facturacion', Factura);
