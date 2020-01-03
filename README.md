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
* Ordenar el mapade pares {elemento, frecuencia}.   `                   Map { 1 => 1, 4 => 1, 3 => 2, 5 => 4 }`
* Generamos vector resultado desde el mapa ordenado. `{1,4,3,3,5,5,5,5}`


## Implementación: 
* ### Generar un mapa de conjuntos con clave(elemento) y valor(frec) .
```
var mapset = [];
mapset = arr.reduce((mapset,nro) => mapset.set(nro, 1 + (mapset.get(nro) || 0)), new Map());

```

* ### Ordenar el mapa de pares {elemento, frecuencia}.   .
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
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Alternativa de Ordenar el mapa de pares {elemento, frecuencia}.
```

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

```


