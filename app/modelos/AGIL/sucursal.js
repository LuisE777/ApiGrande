module.exports = function (sequelize, Sequelize) {
	var Sucursal = sequelize.define('agil_sucursal', {
		id_empresa: {
			type: Sequelize.INTEGER,
			field: 'empresa'
		},
		nombre: {
			type: Sequelize.STRING,
			field: 'nombre'
		},
		numero: {
			type: Sequelize.INTEGER,
			field: 'numero'
		},
		direccion: {
			type: Sequelize.STRING,
			field: 'direccion'
		},
		telefono1: {
			type: Sequelize.STRING,
			field: 'telefono1'
		},
		telefono2: {
			type: Sequelize.STRING,
			field: 'telefono2'
		},
		telefono3: {
			type: Sequelize.STRING,
			field: 'telefono3'
		},
		id_departamento: {
			type: Sequelize.INTEGER,
			field: 'departamento'
		},
		id_municipio: {
			type: Sequelize.INTEGER,
			field: 'municipio'
		},
		nota_venta_correlativo: {
			type: Sequelize.INTEGER,
			field: 'nota_venta_correlativo'
		},
		nota_traspaso_correlativo: {
			type: Sequelize.INTEGER,
			field: 'nota_traspaso_correlativo'
		},
		nota_baja_correlativo: {
			type: Sequelize.INTEGER,
			field: 'nota_baja_correlativo'
		},
		pedido_correlativo: {
			type: Sequelize.INTEGER,
			field: 'pedido_correlativo'
		},
		frase_pedido: {
			type: Sequelize.STRING,
			field: 'frase_pedido'
		},
		copias_impresion_pedido: {
			type: Sequelize.INTEGER,
			field: 'copias_impresion_pedido'
		},
		nota_recibo_correlativo: {
			type: Sequelize.INTEGER,
			field: 'nota_recibo_correlativo'
		},
		imprimir_pedido_corto: {
			type: Sequelize.BOOLEAN,
			field: 'imprimir_pedido_corto'
		},
		cotizacion_correlativo: {
			type: Sequelize.INTEGER,
			field: 'cotizacion_correlativo'
		},
		pre_factura_correlativo: {
			type: Sequelize.INTEGER,
			field: 'pre_factura_correlativo'
		},
		comprobante_ingreso_correlativo: {
			type: Sequelize.INTEGER,
			field: 'comprobante_ingreso_correlativo'
		},
		comprobante_egreso_correlativo: {
			type: Sequelize.INTEGER,
			field: 'comprobante_egreso_correlativo'
		},
		comprobante_traspaso_correlativo: {
			type: Sequelize.INTEGER,
			field: 'comprobante_traspaso_correlativo'
		}
		,
		comprobante_caja_chica_correlativo: {
			type: Sequelize.INTEGER,
			field: 'comprobante_caja_chica_correlativo'
		},
		reiniciar_comprobante_ingreso_correlativo: {
			type: Sequelize.BOOLEAN,
			field: 'reiniciar_comprobante_ingreso_correlativo'
		},
		reiniciar_comprobante_egreso_correlativo: {
			type: Sequelize.BOOLEAN,
			field: 'reiniciar_comprobante_egreso_correlativo'
		},
		reiniciar_comprobante_traspaso_correlativo: {
			type: Sequelize.BOOLEAN,
			field: 'reiniciar_comprobante_traspaso_correlativo'
		}
		,
		reiniciar_comprobante_caja_chica_correlativo: {
			type: Sequelize.BOOLEAN,
			field: 'reiniciar_comprobante_caja_chica_correlativo'
		},
		fecha_reinicio_correlativo: {
			type: Sequelize.DATE,
			field: 'fecha_reinicio_correlativo'
		},
		nota_venta_farmacia_correlativo: {
			type: Sequelize.INTEGER,
			field: 'nota_venta_farmacia_correlativo'
		},
		despacho_correlativo: {
			type: Sequelize.INTEGER,
			field: 'despacho_correlativo'
		},
		despacho_recivo_correlativo: {
			type: Sequelize.INTEGER,
			field: 'despacho_recivo_correlativo'
		},
		ropa_trabajo_correlativo: {
			type: Sequelize.INTEGER,
			field: 'ropa_trabajo_correlativo'
		},
		correlativo_proforma: {
			type: Sequelize.INTEGER,
			field: 'correlativo_proforma'
		},
		caja_chica_ingreso_correlativo: {
			type: Sequelize.INTEGER,
			field: 'caja_chica_ingreso_correlativo'
		},
		caja_chica_egreso_correlativo: {
			type: Sequelize.INTEGER,
			field: 'caja_chica_egreso_correlativo'
		},
		anticipo_cliente_correlativo: {
			type: Sequelize.INTEGER,
			field: 'anticipo_cliente_correlativo'
		},
		anticipo_proveedor_correlativo: {
			type: Sequelize.INTEGER,
			field: 'anticipo_proveedor_correlativo'
		},
		anticipo_compensacion_cliente_correlativo: {
			type: Sequelize.INTEGER,
			field: 'anticipo_compensacion_cliente_correlativo'
		},
		anticipo_compensacion_proveedor_correlativo: {
			type: Sequelize.INTEGER,
			field: 'anticipo_compensacion_proveedor_correlativo'
		},
		vale_caja_chica_correlativo: {
			type: Sequelize.INTEGER,
			field: 'vale_caja_chica_correlativo'
		},
		numero_rendicion_fondo_gasto_correlativo: {
			type: Sequelize.INTEGER,
			field: 'numero_rendicion_fondo_gasto_correlativo'
		},
		numero_correlativo_prestamo_rrhh: {
			type: Sequelize.INTEGER,
			field: 'numero_correlativo_prestamo_rrhh'
		},
		numero_correlativo_caja_chica_incremento: {
			type: Sequelize.INTEGER,
			field: 'numero_correlativo_caja_chica_incremento'
		},
		numero_correlativo_ot: {
			type: Sequelize.INTEGER,
			field: 'numero_correlativo_ot'
		},
		numero_correlativo_ot_mecanica: {
			type: Sequelize.INTEGER,
			field: 'numero_correlativo_ot_mecanica'
		},
		numero_correlativo_ot_chaperia: {
			type: Sequelize.INTEGER,
			field: 'numero_correlativo_ot_chaperia'
		},
		numero_correlativo_modulo_pedido:{
			type: Sequelize.INTEGER,
			field: 'numero_correlativo_modulo_pedido'
		},
		numero_correlativo_reposicion_almacen:{
			type: Sequelize.INTEGER,
			field: 'numero_correlativo_reposicion_almacen'
		},
		numero_correlativo_solicitud_almacen:{
			type: Sequelize.INTEGER,
			field: 'numero_correlativo_solicitud_almacen'
		},
		numero_correlativo_devolucion_item:{
			type: Sequelize.INTEGER,
			field: 'numero_correlativo_devolucion_item'
		},
		numero_correlativo_reposicion_item:{
			type: Sequelize.INTEGER,
			field: 'numero_correlativo_reposicion_item'
		},
		numero_correlativo_ingreso_por_ajuste:{
			type: Sequelize.INTEGER,
			field: 'numero_correlativo_ingreso_por_ajuste'
		},
		numero_correlativo_orden_servicio:{
			type: Sequelize.INTEGER,
			field: 'numero_correlativo_orden_servicio'
		},
		numero_correlativo_ingreso_produccion:{
			type: Sequelize.INTEGER,
			field: 'numero_correlativo_ingreso_produccion'
		},
		activo: {
			type: Sequelize.BOOLEAN,
			field: 'activo'
		},
		usar_facturacion_en_linea: {
			type: Sequelize.BOOLEAN,
			field: 'usar_facturacion_en_linea'
		}
		
	}, {
			freezeTableName: true
		});

	Sucursal.sync().then(function () {

	});

	return Sucursal;
}