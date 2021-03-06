module.exports = function (sequelize, Sequelize) {
    var Proforma = sequelize.define('agil_proforma', {
        cambio_dolar: {
            type: Sequelize.DECIMAL(20,4),
            field: 'cambio_dolar'
        },
        fecha_proforma: {
            type: Sequelize.DATE,
            field: 'fecha_proforma'
        },
        fecha_proforma_ok: {
            type: Sequelize.DATE,
            field: 'fecha_proforma_ok'
        },
        fecha_recepcion: {
            type: Sequelize.DATE,
            field: 'fecha_recepcion'
        },
        fecha_factura: {
            type: Sequelize.DATE,
            field: 'fecha_factura'
        },
        fecha_cobro: {
            type: Sequelize.DATE,
            field: 'fecha_cobro'
        },
        periodo_mes: {
            type: Sequelize.INTEGER,
            field: 'periodo_mes'
        },
        periodo_anio: {
            type: Sequelize.INTEGER,
            field: 'periodo_anio'
        },
        id_sucursal: {
            type: Sequelize.INTEGER,
            field: 'sucursal'
        },
        id_actividad: {
            type: Sequelize.INTEGER,
            field: 'actividad'
        },
        id_cliente: {
            type: Sequelize.INTEGER,
            field: 'cliente'
        },
        id_usuario: {
            type: Sequelize.INTEGER,
            field: 'usuario'
        },
        detalle: {
            type: Sequelize.TEXT,
            field: 'detalle'
        },
        totalImporteBs: {
            type: Sequelize.DECIMAL(20, 4),
            field: 'monto'
        },
        totalImporteSus: {
            type: Sequelize.DECIMAL(20, 4),
            field: 'totalImporteSus'
        },
        id_empresa: {
            type: Sequelize.INTEGER,
            field: 'empresa'
        },
        descripcion: {
            type: Sequelize.TEXT,
            field: 'descripcion_factura'
        },
        factura: {
            type: Sequelize.BIGINT,
            field: 'factura'
        },
        autorizacion: {
            type: Sequelize.BIGINT,
            field: 'autorizacion'
        },
        fecha_limite_emision: {
            type: Sequelize.DATE,
            field: 'fecha_limite_emision'
        },
        id_movimiento: {
            type: Sequelize.INTEGER,
            field: 'movimiento'
        },
        codigo_control: {
            type: Sequelize.STRING,
            field: 'codigo_control'
        },
        dias_credito: {
            type: Sequelize.INTEGER,
            field: 'dias',
            defaultValue: null
        },
        a_cuenta: {
            type: Sequelize.DECIMAL(20, 4),
            field: 'a_cuenta',
            defaultValue: null
        },
        id_tipo_pago: {
            type: Sequelize.INTEGER,
            field: 'tipo_pago',
            defaultValue: null
        },
        correlativo: {
            type: Sequelize.INTEGER,
            field: 'correlativo',
            defaultValue: null
        },
        eliminado: {
            type: Sequelize.BOOLEAN,
            field: 'eliminado'
        },
        glosa_unica: {
            type: Sequelize.BOOLEAN,
            field: 'glosa_unica'
        },
        facturas_anuladas: {
            type: Sequelize.STRING,
            field: 'facturas_anuladas'
        },
        observacion: {
            type: Sequelize.STRING,
            field: 'observacion'
        },
        id_asiento_contabilidad: {
            type: Sequelize.INTEGER,
            field: 'asiento_contabilidad',
        },
        contabilizado: {
            type: Sequelize.BOOLEAN,
            field: 'contabilizado',
            defaultValue:false
        },
        // autorizaciones_anuladas: {
        //     type: Sequelize.STRING,
        //     field: 'autorizaciones_anuladas'
        // }
    }, {
            freezeTableName: true
        });
    Proforma.sync().then(function () {
    });
    return Proforma;
}