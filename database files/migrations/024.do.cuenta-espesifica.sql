ALTER TABLE agil_contabilidad_cuenta ADD especifica tinyint default 0;
ALTER TABLE agil_contabilidad_cuenta ADD tipo_especifica tinyint default 0;
ALTER TABLE agil_contabilidad_cuenta ADD vincular_cuenta tinyint default 0;
ALTER TABLE agil_contabilidad_cuenta ADD especifica_texto1 int(11);
ALTER TABLE agil_contabilidad_cuenta ADD especifica_texto2 int(11);
ALTER TABLE agil_contabilidad_cuenta ADD especifica_texto3 int(11);
ALTER TABLE agil_sucursal DROP reiniciar_comprobante_ingreso_correlativo;
ALTER TABLE agil_sucursal DROP reiniciar_comprobante_egreso_correlativo;
ALTER TABLE agil_sucursal DROP reiniciar_comprobante_traspaso_correlativo;
ALTER TABLE agil_sucursal DROP reiniciar_comprobante_caja_chica_correlativo;
ALTER TABLE agil_sucursal ADD reiniciar_comprobante_ingreso_correlativo tinyint default 0;
ALTER TABLE agil_sucursal ADD reiniciar_comprobante_egreso_correlativo tinyint default 0;
ALTER TABLE agil_sucursal ADD reiniciar_comprobante_traspaso_correlativo tinyint default 0;
ALTER TABLE agil_sucursal ADD reiniciar_comprobante_caja_chica_correlativo tinyint default 0;
