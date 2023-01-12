

/**
 * Datos a nivel mundial
 */
const confirmados= document.getElementById('casosConfirmados');
const activos= document.getElementById('casosActivos');
const muertes= document.getElementById('muertesConfirmadas');
const tasaFatalidad= document.getElementById('tasaFatalidad');
const fechaDatos= document.getElementById('fechaDatos');
const selectPaises= document.getElementById('selectPaises');

selectPaises.addEventListener('change', paisSeleccionado);

API_llamada("reports/total")
	.then(function(data){
		let datos= data.datos.data;
		confirmados.innerHTML= Intl.NumberFormat('es-ES').format(datos.confirmed);
		activos.innerHTML= Intl.NumberFormat('es-ES').format(datos.active);
		muertes.innerHTML= Intl.NumberFormat('es-ES').format(datos.deaths);
		tasaFatalidad.innerHTML= Intl.NumberFormat('es-ES').format(datos.fatality_rate)
		fechaDatos.innerHTML+= lastUpdate(datos.last_update);
	})
	.catch(function(er){
		console.error("ERROR: " + er);
	});

API_llamada("regions")
	.then(function(data){
		let datos= data.datos.data;
		datos= datos.sort(function (a, b) {
			if (a.name > b.name) {
			  return 1;
			}
			if (a.name < b.name) {
			  return -1;
			}
			// a must be equal to b
			return 0;
		  });
		
		for(let i=0;i<datos.length;i++){
			let opt= creaNodo('option', datos[i].name);
				opt.value= datos[i].iso;
			selectPaises.appendChild(opt);
		}
		  
	})
	.catch(function(er){
		console.error("ERROR: " + er);
	});





function paisSeleccionado(){
	let pais= this.selectedOptions[0].textContent;
	let codPais= this.selectedOptions[0].value;

	let spans= document.getElementsByClassName("nivelMundial");
	if(codPais!=0)
		for(let i=0;i<spans.length;i++)
			spans[i].innerHTML= "("+pais+")";
	else
		for(let i=0;i<spans.length;i++)
			spans[i].innerHTML= "a nivel mundial";


	let confirmadosPais=0;
	let activosPais=0;
	let muertesPais=0;

	
	API_llamada("reports?iso="+codPais)
		.then(function(data){
			let datos= data.datos.data;
			for(let i=0;i<datos.length;i++){
				confirmadosPais= confirmadosPais+datos[i].confirmed;
				activosPais= activosPais+datos[i].active;
				muertesPais= muertesPais+datos[i].deaths;
			}
			confirmados.innerHTML= Intl.NumberFormat('es-ES').format(confirmadosPais);
			activos.innerHTML= Intl.NumberFormat('es-ES').format(activosPais);
			muertes.innerHTML= Intl.NumberFormat('es-ES').format(muertesPais);
		})





}