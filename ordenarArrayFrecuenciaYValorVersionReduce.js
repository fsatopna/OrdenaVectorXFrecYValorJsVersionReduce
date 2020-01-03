
var arr = [5,1,5,4,3,5,5,3];

console.log("------------------------------ Entrada");
console.log("entrada  :", arr);

var mapset = [];
mapset = arr.reduce((mapset,nro) => mapset.set(nro, 1 + (mapset.get(nro) || 0)), new Map());

//console.log("------------------------------ Mapa creado por reduce");
//console.log("arr:  ", mapset);

//console.log("recorre mapa (prueba) --------------");
//for (let [mikey, mivalue] of mapset) {     // get data sorted
//    console.log(mikey + ' ' + mivalue);
//}
//console.log("fin recorremapa (prueba)-----------");

//console.log("recorre2 mapa (prueba) --------------");
//for (let [mikey, mivalue] of mapset) {     // get data sorted
//    console.log(mikey + ' ' + mivalue);
//}
//console.log("fin recorre2 mapa (prueba)----------");

var arrunord = [];
mapset.forEach((frec,num) => {
       arrunord.push(new Frec(num,frec))
});

//console.log("------------------------------------- array objetos desordenado armado desde el mapa");
//console.log(arrunord);


var arrord = arrunord.sort(function(a,b){
    return (parseInt(a.frec * 100 + a.nro) - parseInt(b.frec * 100 + b.nro))
})

//console.log("-------------------------------------- array objetos ordenado");
//console.log(arrord)

var arrres = []
for (var i = 0; i < arrord.length; i++) {
    for(var j = 0; j < arrord[i].frec;j++)
       arrres.push(arrord[i].nro);
}

console.log("-------------------------------------- ");
console.log("resultado:", arrres);

var arrorddes = arrunord.sort(function(a,b){
    if (a.frec < b.frec) 
        return 1;
    else if (a.frec > b.frec)
        return -1;
    else { if (a.nro < b.nro)
               return -1;
            else if (a.nro > b.nro)
                return 1;
            else return 0;
    }
})


function Frec(pnro, pfrec) {
    this.nro  = pnro;
    this.frec = pfrec;
}
