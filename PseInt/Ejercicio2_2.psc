Funcion potencia<-PotenciaRecursiva(base, exponente)
	Si exponente == 1 Entonces
		potencia<-base
	SiNo
		potencia<-base*PotenciaRecursiva(base, exponente-1)
	FinSi
FinFuncion

Algoritmo Ejercicio2_2
	Escribir "Ingrese la base de la potencia :"
	Leer base
	Escribir "Ingrese el exponente de la potencia :"
	Leer exponente
	Escribir "La potencia de base ", base," y exponente ", exponente," es :", PotenciaRecursiva(base, exponente);
FinAlgoritmo
