angular.module('agil.servicios')

    .factory('Alias', ['$resource', function ($resource) {
        return $resource(restServer + "cliente/empresa/alias/:id_empresa/:id_usuario/:id_cliente");
    }])

    .factory('Gerencia', ['$resource', function ($resource) {
        return $resource(restServer + "cliente/empresa/gerencias/:id_empresa/:id_usuario/:id_cliente");
    }])

    .factory('Comensal', ['$resource', function ($resource) {
        return $resource(restServer + "cliente/empresa/comensales/:id_empresa/:id_usuario/:id_cliente");
    }])

    .factory('Comida', ['$resource', function ($resource) {
        return $resource(restServer + "cliente/empresa/horarios/comida/:id_empresa/:id_usuario/:id_cliente");
    }])

    .factory('PrecioComida', ['$resource', function ($resource) {
        return $resource(restServer + "cliente/empresa/precio/comida/:id_empresa/:id_usuario/:id_cliente");
    }])

    .factory('HistorialExcel', ['$resource', function ($resource) {
        return $resource(restServer + "cliente/empresa/excel/historial/:id_empresa/:id_usuario/:id_cliente");
    }])

    .factory('Historial', ['$resource', function ($resource) {
        return $resource(restServer + "cliente/empresa/historial/:id_empresa/:id_usuario/:id_cliente/:desde/:hasta/:mes/:anio/:empresaCliente/:gerencia/:comensal/:comida/:estado/:pagina/:items_pagina/:columna/:direccion");
    }])

    .factory('ComensalesExcel', ['$resource', function ($resource) {
        return $resource(restServer + "cliente/empresa/excel/comensal/:id_empresa/:id_usuario");
    }])

    .factory('AliasExcel', ['$resource', function ($resource) {
        return $resource(restServer + "cliente/empresa/excel/alias/:id_empresa/:id_usuario/:id_cliente/:desde/:hasta");
    }])

    .factory('GerenciasExcel', ['$resource', function ($resource) {
        return $resource(restServer + "cliente/empresa/excel/gerencias/:id_empresa/:id_usuario/:id_cliente");
    }])

    .factory('ComidasExcel', ['$resource', function ($resource) {
        return $resource(restServer + "cliente/empresa/excel/comidas/:id_empresa/:id_usuario/:id_cliente");
    }])

    .factory('PreciosExcel', ['$resource', function ($resource) {
        return $resource(restServer + "cliente/empresa/excel/precios/:id_empresa/:id_usuario/:id_cliente");
    }])

    .factory('BuscarComensal', ['$resource', function ($resource) {
        return $resource(restServer + "comensal/empresa/busqueda/:busqueda/:id_empresa/:id_usuario/:id_cliente");
    }])

    .factory('ReporteComedor', ['$resource', function ($resource) {
        return $resource(restServer + "reporte/comedor/:id_empresa/:id_usuario/:id_cliente/:desde/:hasta/:mes/:anio/:empresaCliente/:gerencia/:comensal/:comida/:estado");
    }])

    .factory('ReporteEmpresa', ['$resource', function ($resource) {
        return $resource(restServer + "reporte/empresa/:id_empresa/:id_usuario/:id_cliente/:desde/:hasta/:mes/:anio/:empresaCliente/:gerencia/:comensal/:comida/:estado");
    }])

    .factory('ReporteComensal', ['$resource', function ($resource) {
        return $resource(restServer + "reporte/comensal/:id_empresa/:id_usuario/:id_cliente/:desde/:hasta/:mes/:anio/:empresaCliente/:gerencia/:comensal/:comida/:estado");
    }])

    .factory('ReporteGeneralComensal', ['$resource', function ($resource) {
        return $resource(restServer + "reporte/general/comensal/:id_empresa/:desde/:hasta");
    }])

    .factory('AlertaMarcacion', ['$resource', function ($resource) {
        return $resource(restServer + "alertas/marcaciones/:id_empresa/:id_usuario/:id_cliente/:desde/:hasta/:columna/:direccion/:descartados/:comensal");
    }])

    .factory('AgregarMarcacion', ['$resource', function ($resource) {
        return $resource(restServer + "agregar/marcaciones/:id_empresa/:id_usuario/:id_cliente/:comensal");
    }])

    .factory('HistorialDocumentos', ['$resource', function ($resource) {
        return $resource(restServer + "cliente/documentos/historial/:id_empresa/:id_usuario/:id_cliente/:desde/:hasta/:mes/:anio/:empresaCliente/:gerencia/:comensal/:comida/:estado/:pagina/:items_pagina");
    }])
    .factory('Documentos', ['$resource', function ($resource) {
        return $resource(restServer + "obtener/documentos/historial/:id_empresa/:id_usuario/:id_cliente/:documento/:fecha");
    }])

    .factory('EdicionHistorial', ['$resource', function ($resource) {
        return $resource(restServer + "cliente/empresa/edicion/historial/:id_empresa/:id_usuario/:id_cliente");
    }])

    .factory('GuardarAlias', ['Alias', '$q', function (Alias, $q) {
        var res = function (idEmpresa, alias, usuario) {
            var delay = $q.defer();
            Alias.save({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: 0 }, alias, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ObtenerAlias', ['Alias', '$q', function (Alias, $q) {
        var res = function (idEmpresa, usuario, cliente) {
            var delay = $q.defer();
            Alias.get({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente ? cliente : 0 }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('GuardarGerencias', ['Gerencia', '$q', function (Gerencia, $q) {
        var res = function (idEmpresa, gerencias, usuario) {
            var delay = $q.defer();
            Gerencia.save({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: 0 }, gerencias, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ObtenerGerencias', ['Gerencia', '$q', function (Gerencia, $q) {
        var res = function (idEmpresa, usuario, cliente) {
            var delay = $q.defer();
            Gerencia.get({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente ? cliente : 0 }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('GuardarComensales', ['Comensal', '$q', function (Comensal, $q) {
        var res = function (idEmpresa, datos, usuario, cliente) {
            var delay = $q.defer();
            Comensal.save({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente }, datos, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ObtenerComensales', ['Comensal', '$q', function (Comensal, $q) {
        var res = function (idEmpresa, usuario, cliente) {
            var delay = $q.defer();
            Comensal.get({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente ? cliente : 0 }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('GuardarComidas', ['Comida', '$q', function (Comida, $q) {
        var res = function (idEmpresa, comida, usuario, cliente) {
            var delay = $q.defer();
            Comida.save({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente }, comida, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ObtenerComidas', ['Comida', '$q', function (Comida, $q) {
        var res = function (idEmpresa, usuario, cliente) {
            var delay = $q.defer();
            Comida.get({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('GuardarPrecioComidas', ['PrecioComida', '$q', function (PrecioComida, $q) {
        var res = function (idEmpresa, precioComida, usuario, cliente) {
            var delay = $q.defer();
            PrecioComida.save({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente }, precioComida, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ObtenerPrecioComidas', ['PrecioComida', '$q', function (PrecioComida, $q) {
        var res = function (idEmpresa, usuario, cliente) {
            var delay = $q.defer();
            PrecioComida.get({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('GuardarPrecioComidas', ['PrecioComida', '$q', function (PrecioComida, $q) {
        var res = function (idEmpresa, precioComida, usuario, cliente) {
            var delay = $q.defer();
            PrecioComida.save({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente }, precioComida, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ObtenerPrecioComidas', ['PrecioComida', '$q', function (PrecioComida, $q) {
        var res = function (idEmpresa, usuario, cliente) {
            var delay = $q.defer();
            PrecioComida.get({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ObtenerHistorial', ['Historial', '$q', function (Historial, $q) {
        var res = function (idEmpresa, usuario, cliente, filtro) {
            var delay = $q.defer(); filtro.filter.mes
            Historial.get({
                id_empresa: idEmpresa,
                id_usuario: usuario,
                id_cliente: cliente,
                desde: filtro.filter.desde ? filtro.filter.desde !== "" ? (filtro.filter.mes || filtro.filter.anio) ? 0 : filtro.filter.desde : 0 : 0,
                hasta: filtro.filter.hasta ? filtro.filter.hasta !== "" ? (filtro.filter.mes || filtro.filter.anio) ? 0 : filtro.filter.hasta : 0 : 0,
                mes: filtro.filter.mes ? (filtro.filter.desde || filtro.filter.hasta) ? 0 : filtro.filter.mes.id : 0,
                anio: filtro.filter.anio ? (filtro.filter.desde || filtro.filter.hasta) ? 0 : filtro.filter.anio.id : 0,
                empresaCliente: filtro.filter.empresaCliente ? filtro.filter.empresaCliente.id ? filtro.filter.empresaCliente.id : 0 : 0,
                gerencia: filtro.filter.gerencia ? filtro.filter.gerencia : 0,
                comensal: filtro.filter.comensal ? filtro.filter.comensal.length > 0 ? filtro.filter.comensalesProcesados.join(',') : 0 : 0,
                comida: filtro.filter.comida ? filtro.filter.comida : 0,
                estado: filtro.filter.estado ? filtro.filter.estado !== "" ? filtro.filter.estado : 0 : 0,
                pagina: filtro.currentPage,
                items_pagina: filtro.itemsPerPage,
                columna: filtro.column,
                direccion: filtro.direccion
            }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('GuardarHistorialExcel', ['HistorialExcel', '$q', function (HistorialExcel, $q) {
        var res = function (idEmpresa, lista, usuario, cliente) {
            var delay = $q.defer();
            HistorialExcel.save({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente }, lista, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;

    }])
    .factory('GuardarComensalesExcel', ['ComensalesExcel', '$q', function (ComensalesExcel, $q) {
        var res = function (idEmpresa, lista, usuario, cliente) {
            var delay = $q.defer();
            ComensalesExcel.save({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente }, lista, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('GuardarEmpresasExcel', ['AliasExcel', '$q', function (AliasExcel, $q) {
        var res = function (idEmpresa, lista, usuario, cliente) {
            var delay = $q.defer();
            AliasExcel.save({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente }, lista, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('GuardarGerenciasExcel', ['GerenciasExcel', '$q', function (GerenciasExcel, $q) {
        var res = function (idEmpresa, lista, usuario, cliente) {
            var delay = $q.defer();
            GerenciasExcel.save({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente }, lista, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('GuardarComidasExcel', ['ComidasExcel', '$q', function (ComidasExcel, $q) {
        var res = function (idEmpresa, lista, usuario, cliente) {
            var delay = $q.defer();
            ComidasExcel.save({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente }, lista, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('GuardarPreciosExcel', ['PreciosExcel', '$q', function (PreciosExcel, $q) {
        var res = function (idEmpresa, lista, usuario, cliente) {
            var delay = $q.defer();
            PreciosExcel.save({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente }, lista, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('BusquedaComensales', ['BuscarComensal', '$q', function (BuscarComensal, $q) {
        var res = function (idEmpresa, usuario, cliente, query) {
            var delay = $q.defer();
            BuscarComensal.query({ busqueda: query, id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ObtenerReporteComedor', ['ReporteComedor', '$q', function (ReporteComedor, $q) {
        var res = function (idEmpresa, usuario, cliente, filtro) {
            var delay = $q.defer();
            ReporteComedor.get({
                id_empresa: idEmpresa,
                id_usuario: usuario,
                id_cliente: cliente,
                desde: filtro.filter.desde ? filtro.filter.desde !== "" ? (filtro.filter.mes || filtro.filter.anio) ? 0 : filtro.filter.desde : 0 : 0,
                hasta: filtro.filter.hasta ? filtro.filter.hasta !== "" ? (filtro.filter.mes || filtro.filter.anio) ? 0 : filtro.filter.hasta : 0 : 0,
                mes: filtro.filter.mes ? (filtro.filter.desde || filtro.filter.hasta) ? 0 : filtro.filter.mes.id : 0,
                anio: filtro.filter.anio ? (filtro.filter.desde || filtro.filter.hasta) ? 0 : filtro.filter.anio.id : 0,
                empresaCliente: filtro.filter.empresaCliente ? filtro.filter.empresaCliente.id ? filtro.filter.empresaCliente.id : 0 : 0,
                gerencia: filtro.filter.gerencia ? filtro.filter.gerencia : 0,
                comensal: filtro.filter.comensal ? filtro.filter.comensal.length > 0 ? filtro.filter.comensalesProcesados.join(',') : 0 : 0,
                comida: filtro.filter.comida ? filtro.filter.comida : 0,
                estado: filtro.filter.estado ? filtro.filter.estado !== "" ? filtro.filter.estado : 0 : 0
            }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ObtenerReporteEmpresa', ['ReporteEmpresa', '$q', function (ReporteEmpresa, $q) {
        var res = function (idEmpresa, usuario, cliente, filtro) {
            var delay = $q.defer();
            ReporteEmpresa.get({
                id_empresa: idEmpresa,
                id_usuario: usuario,
                id_cliente: cliente,
                desde: filtro.filter.desde ? filtro.filter.desde !== "" ? (filtro.filter.mes || filtro.filter.anio) ? 0 : filtro.filter.desde : 0 : 0,
                hasta: filtro.filter.hasta ? filtro.filter.hasta !== "" ? (filtro.filter.mes || filtro.filter.anio) ? 0 : filtro.filter.hasta : 0 : 0,
                mes: filtro.filter.mes ? (filtro.filter.desde || filtro.filter.hasta) ? 0 : filtro.filter.mes.id : 0,
                anio: filtro.filter.anio ? (filtro.filter.desde || filtro.filter.hasta) ? 0 : filtro.filter.anio.id : 0,
                empresaCliente: filtro.filter.empresaCliente ? filtro.filter.empresaCliente.id ? filtro.filter.empresaCliente.id : 0 : 0,
                gerencia: filtro.filter.gerencia ? filtro.filter.gerencia : 0,
                comensal: filtro.filter.comensal ? filtro.filter.comensal.length > 0 ? filtro.filter.comensalesProcesados.join(',') : 0 : 0,
                comida: filtro.filter.comida ? filtro.filter.comida : 0,
                estado: filtro.filter.estado ? filtro.filter.estado !== "" ? filtro.filter.estado : 0 : 0
            }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ObtenerReporteComensal', ['ReporteComensal', '$q', function (ReporteComensal, $q) {
        var res = function (idEmpresa, usuario, cliente, filtro) {
            var delay = $q.defer();
            ReporteComensal.get({
                id_empresa: idEmpresa,
                id_usuario: usuario,
                id_cliente: cliente,
                desde: filtro.filter.desde ? filtro.filter.desde !== "" ? (filtro.filter.mes || filtro.filter.anio) ? 0 : filtro.filter.desde : 0 : 0,
                hasta: filtro.filter.hasta ? filtro.filter.hasta !== "" ? (filtro.filter.mes || filtro.filter.anio) ? 0 : filtro.filter.hasta : 0 : 0,
                mes: filtro.filter.mes ? (filtro.filter.desde || filtro.filter.hasta) ? 0 : filtro.filter.mes.id : 0,
                anio: filtro.filter.anio ? (filtro.filter.desde || filtro.filter.hasta) ? 0 : filtro.filter.anio.id : 0,
                empresaCliente: filtro.filter.empresaCliente ? filtro.filter.empresaCliente.id ? filtro.filter.empresaCliente.id : 0 : 0,
                gerencia: filtro.filter.gerencia ? filtro.filter.gerencia : 0,
                comensal: filtro.filter.comensalesProcesados ? filtro.filter.comensalesProcesados.length > 0 ? filtro.filter.comensalesProcesados.join(',') : 0 : 0,
                comida: filtro.filter.comida ? filtro.filter.comida : 0,
                estado: filtro.filter.estado ? filtro.filter.estado !== "" ? filtro.filter.estado : 0 : 0
            }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ObtenerReporteGeneralComensal', ['ReporteGeneralComensal', '$q', function (ReporteGeneralComensal, $q) {
        var res = function (idEmpresa, filtro) {
            var delay = $q.defer();
            ReporteGeneralComensal.get({
                id_empresa: idEmpresa,
                desde: filtro.filter.desde ? filtro.filter.desde !== "" ? (filtro.filter.mes || filtro.filter.anio) ? 0 : filtro.filter.desde : 0 : 0,
                hasta: filtro.filter.hasta ? filtro.filter.hasta !== "" ? (filtro.filter.mes || filtro.filter.anio) ? 0 : filtro.filter.hasta : 0 : 0,
            }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ObtenerAlertasMarcacion', ['AlertaMarcacion', '$q', function (AlertaMarcacion, $q) {
        var res = function (idEmpresa, usuario, cliente, filtro) {
            var delay = $q.defer();
            AlertaMarcacion.get({
                id_empresa: idEmpresa,
                id_usuario: usuario,
                id_cliente: filtro.empresaCliente ? filtro.empresaCliente.id : 0,
                desde: filtro.desde,
                hasta: filtro.hasta,
                columna: filtro.columna,
                direccion: filtro.direccion,
                descartados: (filtro.descartados !== undefined && filtro.descartados !== null) ? filtro.descartados : false,
                comensal: filtro.comensal !== undefined && filtro.comensal !== undefined && filtro.comensal !== "" ? filtro.comensal : 0
            }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('EditarAlertasMarcacion', ['AgregarMarcacion', '$q', function (AgregarMarcacion, $q) {
        var res = function (idEmpresa, usuario, cliente, comensal) {
            var delay = $q.defer();
            AgregarMarcacion.save({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente, comensal: comensal.comensal.id }, comensal, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ObtenerHistorialDocumentos', ['HistorialDocumentos', '$q', function (HistorialDocumentos, $q) {
        var res = function (idEmpresa, usuario, cliente, filtro) {
            var delay = $q.defer(); filtro.filter.mes
            HistorialDocumentos.get({
                id_empresa: idEmpresa,
                id_usuario: usuario,
                id_cliente: cliente,
                desde: filtro.filter.desde ? filtro.filter.desde !== "" ? (filtro.filter.mes || filtro.filter.anio) ? 0 : filtro.filter.desde : 0 : 0,
                hasta: filtro.filter.hasta ? filtro.filter.hasta !== "" ? (filtro.filter.mes || filtro.filter.anio) ? 0 : filtro.filter.hasta : 0 : 0,
                mes: filtro.filter.mes ? (filtro.filter.desde || filtro.filter.hasta) ? 0 : filtro.filter.mes.id : 0,
                anio: filtro.filter.anio ? (filtro.filter.desde || filtro.filter.hasta) ? 0 : filtro.filter.anio.id : 0,
                empresaCliente: filtro.filter.empresaCliente ? filtro.filter.empresaCliente.id ? filtro.filter.empresaCliente.id : 0 : 0,
                gerencia: filtro.filter.gerencia ? filtro.filter.gerencia : 0,
                comensal: filtro.filter.comensal ? filtro.filter.comensal.length > 0 ? filtro.filter.comensalesProcesados.join(',') : 0 : 0,
                comida: filtro.filter.comida ? filtro.filter.comida : 0,
                estado: filtro.filter.estado ? filtro.filter.estado !== "" ? filtro.filter.estado : 0 : 0,
                pagina: filtro.currentPage,
                items_pagina: filtro.itemsPerPage
            }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ObtenerDocumento', ['Documentos', '$q', function (Documentos, $q) {
        var res = function (idEmpresa, usuario, cliente, documento) {
            var delay = $q.defer();
            Documentos.get({
                id_empresa: idEmpresa,
                id_usuario: usuario,
                id_cliente: cliente,
                documento: documento.documento,
                fecha: documento.fecha
            }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('EditarHistorial', ['EdicionHistorial', '$q', function (EdicionHistorial, $q) {
        var res = function (idEmpresa, historial, usuario, cliente) {
            var delay = $q.defer();
            EdicionHistorial.save({ id_empresa: idEmpresa, id_usuario: usuario, id_cliente: cliente }, historial, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('RutaClienteComensales', ['$resource', function ($resource) {
        return $resource(restServer + "clientes/comensales/empresa/:id_empresa/busqueda/:texto");
    }])

    .factory('ListaClienteComensales', ['RutaClienteComensales', '$q', function (RutaClienteComensales, $q) {
        var res = function (idEmpresa, texto) {
            var delay = $q.defer();
            var busq=texto?texto:0
            RutaClienteComensales.query({id_empresa: idEmpresa, texto:busq }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])