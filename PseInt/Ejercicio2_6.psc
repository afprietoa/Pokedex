Algoritmo Ejercicio2_6
	Definir valor_articulo, iva, valor_iva, cantidad_compra, subtotal_con_iva, total_con_iva Como Real
	Definir contador, cantidad_venta, total_sin_iva, subtotal_sin_iva Como Entero
	Escribir "La cantidad de artículos"
	Leer cantidad_venta
	contador<-0
	total_items<-0
	total_compra<-0
	total_con_iva<-0
	Mientras contador<cantidad_venta
		Escribir  "Digite el valor de la unidad"
		Leer valor_articulo
		Escribir "digite la cantidad"
		Leer cantidad_compra
		subtotal_sin_iva<-valor_articulo*cantidad_compra
		Escribir "digite el iva :"
		Leer iva
		valor_iva<-subtotal_sin_iva*iva/100
		subtotal_con_iva=subtotal_sin_iva+valor_iva
		Escribir "El iva es : ", valor_iva
		Escribir "El subtotal es  : ", subtotal_con_iva
		
		total_items<-total_items+cantidad_compra
		total_con_iva<-total_con_iva+valor_iva
		total_compra=total_compra+subtotal_con_iva
		
		contador=contador+1
	FinMientras
	Escribir  "número de articulos", total_items
	Escribir "total de iva", total_con_iva
	Escribir  "total ventas ", total_compra
	
FinAlgoritmo
