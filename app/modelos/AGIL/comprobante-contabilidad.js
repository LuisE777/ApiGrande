module.exports = function (sequelize, Sequelize) {
    var ComprobanteContabilidad = sequelize.define('agil_comprobante_contabilidad', {
        id_tipo: {
            type: Sequelize.INTEGER,
            field: 'tipo'
        },
        abierto: {
            type: Sequelize.BOOLEAN,
            field: 'abierto'
        },
        numero: {
            type: Sequelize.INTEGER,
            field: 'numero'
        },
        fecha: {
            type: Sequelize.DATE,
            field: 'fecha'
        },
        id_sucursal: {
            type: Sequelize.INTEGER,
            field: 'sucursal'
        },
        gloza: {
            type: Sequelize.TEXT("long"),
            field: 'gloza'
        },
        id_usuario: {
            type: Sequelize.INTEGER,
            field: 'usuario'
        },
        eliminado: {
            type: Sequelize.BOOLEAN,
            field: 'eliminado'
        },
        importe: {
            type: Sequelize.DECIMAL(20, 4),
            field: 'importe'
        },
        favorito: {
            type: Sequelize.BOOLEAN,
            field: 'favorito'
        },
        id_tipo_cambio: {
            type: Sequelize.INTEGER,
            field: 'tipo_cambio'
        },
        fecha_creacion: {
            type: Sequelize.DATE,
            field: 'fecha_creacion'
        }
    }, {
            freezeTableName: true
        });

    ComprobanteContabilidad.sync();

    return ComprobanteContabilidad;
}