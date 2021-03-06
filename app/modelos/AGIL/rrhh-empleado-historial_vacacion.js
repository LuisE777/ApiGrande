module.exports = function (sequelize, Sequelize) {
	var RrhhEmpleadoHistorialVacacion = sequelize.define('agil_rrhh_empleado_historial_vacacion', {
		/* id_empleado: {
			type: Sequelize.INTEGER,
			field: 'empleado'
		}, */
		id_ficha:{
			type: Sequelize.INTEGER,
			field: 'ficha'
		},
		gestion: {
			type: Sequelize.INTEGER,
			field: 'gestion'
		},
		anio: {
			type: Sequelize.INTEGER,
			field: 'anio'
		},
		aplicadas: {
			type: Sequelize.INTEGER,
			field: 'aplicadas'
		},
		tomadas: {
			type: Sequelize.DECIMAL(20, 4),
			field: 'tomadas'
		},
		eliminado: {
			type: Sequelize.BOOLEAN,
			field: 'eliminado'
		}
	}, {
			freezeTableName: true
		});
		RrhhEmpleadoHistorialVacacion.sync().then(function () {
	});
	return RrhhEmpleadoHistorialVacacion;
}