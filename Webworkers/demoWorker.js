var i =0;
function cuenta(){
	i=i+1;
	//envia la respuesta del worker a lo que lo mando llamar
	postMessage(i);
	//Ejecutaremos cuenta() cada 500 ms
	setTimeout("cuenta()",500);
}
cuenta();