Algoritmo Ejemplo4
	//definiendo variables
	Definir  nh,ch,sb,bon,des,sf como real;
	//inicializando variables
	nh=0; ch=0; sb=0; bon=0; des=0; sf=0;
	//capturando valores
	Escribir "Ingresa el numero de horas trabajadas: ";
	Leer  nh;
	Escribir "Ingresa el costo por hora trabajada: ";
	Leer  ch;
	//realizando operaciones
	sb=nh*ch;
	bon=sb*0.07;
	des=sb*0.0375;
	sf=sb+bon-des;
	//mostrando resultados
	Escribir "El sueldo basico es: ",sb;
	Escribir "El sueldo bonificacion es: ",bon;
	Escribir "El sueldo descuento es: ",des;
	Escribir "El sueldo final es: ",sf;
	
FinAlgoritmo
