
/**
 * Función que devuelve la fecha en formato dd-mm-aaaa
 * @param {*} date -> Fecha en formato aaaa-mm-dd
 * @returns La fecha en formato dd-mm-aaaa
 */
function formatoFecha(date){
    let fecha= date.split("-");
    let y= fecha[0];
    let m= fecha[1];
    let d= fecha[2];

    return d+"-"+m+"-"+y;
}


/**
 * Función que devuelve la fecha y la hora de la última actualización de datos
 * @param {*} fechaHora 
 * @returns 
 */
function lastUpdate(fechaHora){

    let fecha= fechaHora.split(" ")[0];
    let hora= fechaHora.split(" ")[1];
    fecha= formatoFecha(fecha);
    return fecha + " - " + hora;
}



/**
 * Función que crea un nodo y lo devuelve
 * @param {String} tipo -> El tipo de nodo a crear
 * @param {String} txt -> Texto que llevará, en su caso, el nodo
 * @returns -> El nodo creado
 */
function creaNodo(tipo, txt) {

    if (txt == undefined)
        return document.createElement(tipo);
    else {
        let nodo = document.createElement(tipo);
        let texto = document.createTextNode(txt);

        nodo.appendChild(texto);
        return nodo;
    }
}
