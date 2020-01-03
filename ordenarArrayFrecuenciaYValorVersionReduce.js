
var arr = [5,1,5,4,3,5,5,3];
console.log("ent: ",arr);

// 1- Generamos un mapa de conjuntos con la clave elemento y valor frecuencia
var mapset = [];
mapset = arr.reduce((mapset,nro) => mapset.set(nro, 1 + (mapset.get(nro) || 0)), new Map());


// 2- ordenamos el mapa, asc frecuencia y asc valor
mapset[Symbol.iterator]= function * (){
    yield* [...this.entries()].sort((a,b) => (
           (b[1] == a[1]) 
              ? (b[0] == a[0]
                  ? 0 
                  : ((a[0] > b[0])
                        ? 1
                        : -1
                    )
                ) 
              : ((b[1] > a[1])
                    ? -1
                    : 1
                )   
            )
         );
}
//console.log(mapset);

//3- Generamos el vector resultado
var arrres = []
for (let [num, frec] of mapset) {     
    for(var j = 0; j < frec;j++)
        arrres.push(num);
}


console.log("res: ",arrres);



/* Otras formas de ordenar el mapa

console.log("-------------------------------------- ordenando el mapset");
// orden totalmente asc por frec y por value
mapset[Symbol.iterator]= function * (){
    yield* [...this.entries()].sort((a,b) => (
         parseInt(a[1]) * 100 + a[0]) - (parseInt(b[1]) * 100 + b[0])
         );
}

console.log(mapset);


// orden totalmente desc por frec y por value
mapset[Symbol.iterator]= function * (){
    yield* [...this.entries()].sort((a,b) => (
         parseInt(b[1]) * 100 + (100 - a[0])) - (parseInt(a[1]) * 100 + (100 - b[0]))
         );
}
console.log(mapset);

*/
