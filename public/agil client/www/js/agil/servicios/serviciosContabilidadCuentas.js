angular.module('agil.servicios')
.factory('ValidarCodigoCuenta', ['$resource',function ($resource) {
	return $resource(restServer+"validar-codigo/empresa/:id_empresa", { id_empresa: '@id_empresa' },
	{
		'update': { method:'PUT' }
	});
}])
	.factory('ConfigCuentas', ['$resource',function ($resource) {
		return $resource(restServer + "configuracion-cuentas/:id_empresa", { id_empresa: '@id_empresa' },
			{
				'update': { method: 'PUT' }
			});
	}])
	.factory('AsignarCuentaCiente', ['$resource',function ($resource) {
		return $resource(restServer + "contabilidad-cuentas/asignar-cuenta-cliente",
			{
				'update': { method: 'PUT' }
			});
	}])
	.factory('AsignarCuentaProveedor', ['$resource',function ($resource) {
		return $resource(restServer + "contabilidad-cuentas/asignar-cuenta-proveedor",
			{
				'update': { method: 'PUT' }
			});
	}])
	.factory('ConfiguracionesCuentasEmpresa', ['ConfigCuentas', '$q', function (ConfigCuentas, $q) {
		var res = function (idEmpresa) {
			var delay = $q.defer();
			ConfigCuentas.get({ id_empresa: idEmpresa }, function (entidades) {
				delay.resolve(entidades);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])
	.factory('ConfiguracionCuentas', ['$resource',function ($resource) {
		return $resource(restServer + "configuracion-cuentas/empresa/:id_empresa", { id_empresa: '@id_empresa' },
			{
				'update': { method: 'PUT' }
			});
	}])

	.factory('ConfiguracionCuentaEmpresa', ['ConfiguracionCuentas', '$q', function (ConfiguracionCuentas, $q) {
		var res = function (idEmpresa) {
			var delay = $q.defer();
			ConfiguracionCuentas.get({ id_empresa: idEmpresa }, function (entidades) {
				delay.resolve(entidades);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])

	.factory('ContabilidadCuentas', ['$resource',function ($resource) {
		return $resource(restServer + "contabilidad-cuentas/empresa/:id_empresa", { id_empresa: '@id_empresa' },
			{
				'update': { method: 'PUT' }
			});
	}])

	.factory('ListaContabilidadCuentas', ['ContabilidadCuentas', '$q', function (ContabilidadCuentas, $q) {
		var res = function (idEmpresa) {
			var delay = $q.defer();
			ContabilidadCuentas.query({ id_empresa: idEmpresa }, function (entidades) {
				delay.resolve(entidades);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])

	.factory('ContabilidadCuenta', ['$resource',function ($resource) {
		return $resource(restServer + "contabilidad-cuenta/:id", { id: '@id' },
			{
				'update': { method: 'PUT' }
			})
	}])
	.factory('RutaCuenta', ['$resource',function ($resource) {
		return $resource(restServer + "contabilidad-cuenta/:id/empresa/:id_empresa", null)
	}])
	
	.factory('ObtenerCuenta', ['RutaCuenta', '$q', function (RutaCuenta, $q) {
		var res = function (id_cuenta, id_empresa) {
			var delay = $q.defer();
			RutaCuenta.get({
				id: id_cuenta,
				id_empresa: id_empresa
			}, function (cuenta) {
				delay.resolve(cuenta);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])

	.factory('CuentaContabilidadFiltro', ['$resource',function ($resource) {
		return $resource(restServer + "contabilidad-cuentas/empresa/:id_empresa/clasificacion/:id_clasificacion/tipo/:id_tipo/monto/:monto/pagina/:pagina/items-pagina/:items_pagina/busqueda/:busqueda/columna/:columna/direccion/:direccion", null,
			{
				'update': { method: 'PUT' }
			});
	}])

	.factory('CuentaContabilidad', ['CuentaContabilidadFiltro', '$q', function (CuentaContabilidadFiltro, $q) {
		var res = function (paginator) {
			var delay = $q.defer();
			CuentaContabilidadFiltro.get({
				id_empresa: paginator.filter.empresa,
				id_clasificacion: paginator.filter.clasificacion,
				id_tipo: paginator.filter.tipo_cuenta,
				monto: paginator.filter.monto,
				pagina: paginator.currentPage,
				items_pagina: paginator.itemsPerPage,
				busqueda: paginator.search,
				columna: paginator.column,
				direccion: paginator.direction
			}, function (entidades) {
				delay.resolve(entidades);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])

	.factory('CuentasEmpresaPaginador', ['$resource',function ($resource) {
		return $resource(restServer + "contabilidad-cuentas/empresa/:id_empresa/pagina/:pagina/items-pagina/:items_pagina/busqueda/:texto_busqueda");
	}])

	.factory('CuentasClasificaciones', ['$resource',function ($resource) {
		return $resource(restServer + "contabilidad-cuentas/clasificaciones/:id", { id: '@id' },
			{
				'update': { method: 'PUT' }
			});
	}])
	.factory('CuentasClasificaciones2', ['$resource',function ($resource) {
		return $resource(restServer + "contabilidad-cuentas/clasificaciones/id/:id_empresa",null,
			{
				'update': { method: 'PUT' }
			});
	}])
	.factory('CuentasClasificacionesEdicion', ['$resource',function ($resource) {
		return $resource(restServer + "contabilidad-cuentas/clasificaciones/edicion/id/:id_empresa", null,
			{
				'update': { method: 'PUT' }
			});
	}])

	.factory('lasClasificaciones', ['CuentasClasificaciones2', '$q', function (CuentasClasificaciones2, $q) {
		var res = function (idEmpresa) {
			var delay = $q.defer();
			CuentasClasificaciones2.get({id_empresa:idEmpresa},function (entidades) {
				delay.resolve(entidades);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])

	.factory('TiposDeCuentas', ['$resource',function ($resource) {
		return $resource(restServer + "contabilidad-cuentas/tipos-cuenta/:id", { id: '@id' },
			{
				'update': { method: 'PUT' }
			});
	}])

	.factory('losTiposDeCuentas', ['TiposDeCuentas', '$q', function (TiposDeCuentas, $q) {
		var res = function () {
			var delay = $q.defer();
			TiposDeCuentas.get(function (entidades) {
				delay.resolve(entidades);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])

	.factory('operaciones', ['$resource',function ($resource) {
		return $resource(restServer + "contabilidad-cuentas/calculos/operaciones/:id", { id: '@id' },
			{
				'update': { method: 'PUT' }
			});
	}])

	.factory('lasOperacionesCalculos', ['operaciones', '$q', function (operaciones, $q) {
		var res = function () {
			var delay = $q.defer();
			operaciones.get(function (entidades) {
				delay.resolve(entidades);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])

	.factory('saldosClasificaciones', ['$resource',function ($resource) {
		return $resource(restServer + "contabilidad-cuentas/clasificaciones/saldos");
	}])

	.factory('losSaldos', ['saldosClasificaciones', '$q', function (saldosClasificaciones, $q) {
		var res = function () {
			var delay = $q.defer();
			saldosClasificaciones.get(function (entidades) {
				delay.resolve(entidades);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])

	.factory('movimientosClasificaciones', ['$resource',function ($resource) {
		return $resource(restServer + "contabilidad-cuentas/clasificaciones/movimientos");
	}])

	.factory('losMovimientos', ['movimientosClasificaciones', '$q', function (movimientosClasificaciones, $q) {
		var res = function () {
			var delay = $q.defer();
			movimientosClasificaciones.get(function (entidades) {
				delay.resolve(entidades);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])

	.factory('CuentasPaginador', ['CuentasEmpresaPaginador', '$q', function (CuentasEmpresaPaginador, $q) {
		var res = function (idEmpresa, pagina, itemsPagina, texto) {
			var delay = $q.defer();
			CuentasEmpresaPaginador.get({ id_empresa: idEmpresa, pagina: pagina, items_pagina: itemsPagina, texto_busqueda: texto }, function (entidades) {
				delay.resolve(entidades);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])
	.factory('CuentasEmpresaCreacion', ['$resource',function ($resource) {
		return $resource(restServer + "cuentas/empresa");
	}])
	.factory('ContabilidadConfiguracionGeneralTipoCuenta', ['$resource',function ($resource) {
		return $resource(restServer + "contabilidad-configuracion-general-tipos-cuentas/empresa/:id_empresa");
	}])

	.factory('GuardarContabilidadConfiguracionGeneralTipoCuenta', ['ContabilidadConfiguracionGeneralTipoCuenta', '$q', function (ContabilidadConfiguracionGeneralTipoCuenta, $q) {
		var res = function (idEmpresa, datos) {
			var delay = $q.defer();
			ContabilidadConfiguracionGeneralTipoCuenta.save({ id_empresa: idEmpresa},datos, function (entidades) {
				delay.resolve(entidades);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])
	.factory('ObtenerContabilidadConfiguracionGeneralTipoCuenta', ['ContabilidadConfiguracionGeneralTipoCuenta', '$q', function (ContabilidadConfiguracionGeneralTipoCuenta, $q) {
		var res = function (idEmpresa) {
			var delay = $q.defer();
			ContabilidadConfiguracionGeneralTipoCuenta.query({ id_empresa: idEmpresa}, function (entidades) {
				delay.resolve(entidades);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])

	.factory('RutaLibroMayorGeneral', ['$resource', function ($resource) {
		return $resource(restServer + "comprobante-cuenta-general/periodo/:inicio/:fin/cuenta_auxiliar/:cuenta_auxiliar/centro_costos/:centro_costos/empresa/:id_empresa");
	}])

	.factory('LibroMayorGeneral', ['RutaLibroMayorGeneral', '$q', function (RutaLibroMayorGeneral, $q) {
		var res = function (filter) {
			var delay = $q.defer();
			RutaLibroMayorGeneral.get({
				inicio: filter.fechaInicio,
				fin: filter.fechaFin,
				cuenta_auxiliar: filter.cuenta_auxiliar,
				centro_costos: filter.centro_costos,
				id_empresa: filter.id_empresa
			}, function (entidad) {
				delay.resolve(entidad);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])

	.factory('MayoresGlobal', ['$resource', function ($resource) {
		return $resource(restServer + "contabilidad-cuenta/global/empresa/:empresa/gestion/:gestion/mes/:mes/inicio/:inicio/fin/:fin");
	}])

	.factory('ObtenerMayoresGlobal', ['MayoresGlobal', '$q', function (MayoresGlobal, $q) {
		var res = function (filter, periodo, empresa) {
			var delay = $q.defer();
			MayoresGlobal.get({
				empresa: empresa,
				gestion: filter.gestion,
				mes: filter.mes,
				inicio: periodo.inicio,
				fin:periodo.fin
			}, function (entidad) {
				delay.resolve(entidad);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])

	.factory('CuentaContable', ['$resource', function ($resource) {
		return $resource(restServer + "contabilidad-cuenta/buscar/:id_empresa/:id_clasificacion/:id_tipo/:texto");
	}])

	.factory('BuscarCuentaContable', ['CuentaContable', '$q', function (CuentaContable, $q) {
		var res = function ( id_empresa, id_clasificacion, id_tipo, texto ) {
			var delay = $q.defer();
			CuentaContable.get({ id_empresa, id_clasificacion, id_tipo, texto }, function (entidad) {
				delay.resolve(entidad);
			}, function (error) {
				delay.reject(error);
			});
			return delay.promise;
		};
		return res;
	}])

	
	