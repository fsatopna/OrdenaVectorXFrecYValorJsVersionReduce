***
# OrdenaVectorXFrecYValorJsVersionReduce
***

Version mas compleja que la anterior.

## Problema: 
Se tiene un vector de enteros, y se desea ordenar el mismo por la frecuencia de cada elemento y para la misma frecuencia por el valor del elemento:

* entrada:  {5, 1, 5, 4, 3, 5, 5, 3}    
* salida :  {1, 4, 3, 3, 5, 5, 5, 5} 

### Entrada
<Table>
  <tr>
      <td>Elementos</td>
      <td>5</td>
      <td>1</td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>5</td>
      <td>5</td>
      <td>3</td>
   </tr>
   <tr>
</Table>

### Frecuencias
<Table>
  <tr>
      <td>Elemento</td>
      <td>1</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
   </tr>
   <tr>
    <td>Frecuencia</td>
      <td>1</td>
      <td>2</td>
      <td>1</td>
      <td>4</td>
  </tr>
</Table>

## Objetivo
Comprender y utilizar distintos tipos de contenedores y algoritmos para resolución de problemas de conjunto.

***


## Estrategia: 
* Generar un mapa de conjuntos con clave(elemento) y valor(frec)          `Map { 5 => 4, 1 => 1, 4 => 1, 3 => 2 }` 
* Obtener un vector de pares {elemento, frecuencia}.   `                   Map { 1 => 1, 4 => 1, 3 => 2, 5 => 4 }`
* Generamos vector resultado desde el mapa ordenado. `{1,4,3,3,5,5,5,5}`


## Implementación: 
* ### Generar un mapa de conjuntos con clave(elemento) y valor(frec) .
```
var mapset = [];
mapset = arr.reduce((mapset,nro) => mapset.set(nro, 1 + (mapset.get(nro) || 0)), new Map());

```

* ### Obtener un vector de pares {elemento, frecuencia}.   .
```
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
```

* ### Generamos vector resultado desde el mapa ordenado.
```
   var arrres = []
   for (let [num, frec] of mapset) {     
      for(var j = 0; j < frec;j++)
          arrres.push(num);
   }
```
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Alternativa de Ordenar el vector de pares {valor, frecuencia}.
```
    sort(mfrec.begin(), mfrec.end(),
         [] (const pair<int,int> &  a, const pair<int,int> &  b) {
             if (a.second == b.second)
                return (a.first < b.first);
            return (a.second < b.second);
             });

```



```

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



/*
function Frec(pnro, pfrec) {
    this.nro  = pnro;
    this.frec = pfrec;
}


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
```


