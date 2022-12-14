Algoritmo Ejercicio2_1
	Escribir "¿Cuántos números desea sumas?"
	Leer cantidad
	i<-1
	Mientras i<=cantidad Hacer
		Escribir "Ingrese el número ", i, " :";
		Leer n
		total<-total+n
		i<-i+1
	Fin Mientras

	Escribir "El total de la suma es :", total;
FinAlgoritmo
