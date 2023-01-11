// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '504293c81fmshc65293d2efcc14fp108a1ajsn45f944adb924',
// 		'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
// 	}
// };

// fetch('https://covid-19-statistics.p.rapidapi.com/regions', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

function API_llamada(resto){
    return new Promise(function(resolve, reject){
        fetch(API_url()+resto,options())
            .then(function(resp){
                if(resp.ok)
                    resp.json()
                        .then(function(data){
                            resolve({datos: data});
                        })
                        .catch(function(er){
                            console.error("ERROR: " + er);
                        })
            })
            .catch(function(er){
                reject({error: er});
            })
    })
}

/**
 * Función que crea el objeto que hay que mandar en cada petición
 * @returns -> El objeto
 */
function options(){
    let obj= {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '504293c81fmshc65293d2efcc14fp108a1ajsn45f944adb924',
            'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
        }
    };
    return obj;
}


function API_url() {
    var url = "https://covid-19-statistics.p.rapidapi.com/"
    return url;
}


// function llamada_fetch(obj, method, headers){    

//     return new Promise(function(resolve, reject){
//         fetch(API_url(), {
//             method: method,
//             headers: headers,
//             body: JSON.stringify(obj)
//         })
//         .then(function(resp){
//             if(resp.ok)
//                 resp.json()
//                     .then(function(data){
//                        resolve({datos: data})
//                     })
//                     .catch(function(er){
//                         console.error("ERROR: " + er);
//                     })
//         })
//         .catch(function(er){
//            reject({error: er})
//         })
//     })
    
// }