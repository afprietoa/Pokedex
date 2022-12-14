Algoritmo Ejercicio2_4
	Definir descipcion Como Cadena
	Definir descripcion_invertida, marca, modelo, descripcion Como Caracter
	Definir cantidad Como Entero
	descripcion_invertida<-""
	Escribir "Ingrese la marca del vehiculo :"
	Leer marca
	Escribir "Ingrese el modelo del vehiculo :"
	Leer modelo
	descripcion = Concatenar(marca, modelo)
	Escribir descripcion
	cantidad<-Longitud(descripcion)
	Escribir cantidad
	Mientras cantidad>0 Hacer
		descripcion_invertida = descripcion_invertida + Subcadena(descripcion, cantidad, cantidad)
		cantidad = cantidad-1
	FinMientras
	
	Escribir "La palabra ",descripcion," invertida es: " descripcion_invertida
FinAlgoritmo
