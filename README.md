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
* Generamos vector resultado desde el mapa ordenado. `{1,4,3,3,,5,5,5,5}`


## Implementación: 
* ### Ordenar el vector.
```
     std::vector<int> arr =  {5,1,5,4,3,5,5,3}; `
     std::sort(arr.begin(),arr.end(),
              [] (int a, int   b) {
                   return (a < b);
              }
     );
     cout << "ordenada: ";  muestra(arr);




     // La función muestra
     void muestra(vector<int> arr) {
          cout << "{" <<  arr[0];
          for(int i=1;i < arr.size();i++)
              cout << ", " << arr[i];
           cout << "}" << endl;    
     }

```

* ### Obtener un vector de pares {valor, frecuencia}.
Se usa un vector llamado mfrec, que tiene elementos pair de enteros, cada numero como primer elemento del par y la frecuencia de apariciones como segundo elemento. 
Notar: el algoritmo usa un vector de entrada que debe estar ordenado. Se podría haber utilizado un map o un set, pero se obto por vector, pues luego debemos ordenarlo con el algoritmo sort.
```
    vector<std::pair<int,int>>  mfrec;

    std::pair<int,int> par;
    int frec = 1;
    int ant = arr[0];
    for(int i=1;i<arr.size();i++) {
        if (arr[i] == ant) {
            frec++;
        } else {
            par.first  = ant;
            par.second = frec; 
            mfrec.push_back(par);

            frec = 1;
            ant = arr[i];
        }            
    }
    par.first  = ant;
    par.second = frec; 
    mfrec.push_back(par);

    // mostrando el resultado
    cout << "frecuencias: {";
    for(vector<dupla>::iterator it = mfrec.begin();it != mfrec.end(); it++) {
        cout << "(" << it->first << ":" << it->second << "),";
    }
    cout << "}" << endl;

```

* ### Ordenar el vector de pares {valor, frecuencia}.
```
    std::sort(mfrec.begin(), mfrec.end(),relOrdenFrecVal);

// la función es
    bool  relOrdenFrecVal(const pair<int,int>  & a, const pair<int,int>  & b) {
             if (a.second == b.second)
                return (a.first < b.first);
            return (a.second < b.second);
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

* ### Obtener la salida desde el vector de pares {valor, frecuencia}.
```

    cout << "resultado: {";
    for(vector<dupla>::iterator it = mfrec.begin();it != mfrec.end(); it++) {
        for (int i=0;i < it->second;i++)
            cout << it->first << ", ";
    }
    cout << "}" << endl;
```


## Notas: 
* ### Modo de ejecución.
La primer linea define una macro de nombre DEBUG, si esta macro se compila con true, muestra información que permite analizar el algoritmo

* ### Alternativa de Implementación.
La segunda linea define una macro de nombre ALTERNATIVA, si esta macro se compila con true, implementa alternativas de ejecución, por ejemplo: cambio de sort de función de relación de orden nominal a anónima(lambda).

```
(base) fsato@fsato-Aspire-E5-475:~/u1/desarrollo/cpp$ grep -n -B 3 ALT *
ordenaFrecyValorcpp.cpp-1-#define DEBUG false
ordenaFrecyValorcpp.cpp:2:#define ALTERNATIVA false 
--
ordenaFrecyValorcpp.cpp-43-
ordenaFrecyValorcpp.cpp-44-    if (arr.size() == 0) return arr;
ordenaFrecyValorcpp.cpp-45-
ordenaFrecyValorcpp.cpp:46:    if (!(ALTERNATIVA)) {
--
ordenaFrecyValorcpp.cpp-51-      );
ordenaFrecyValorcpp.cpp-52-    }
ordenaFrecyValorcpp.cpp-53-
ordenaFrecyValorcpp.cpp:54:    if (ALTERNATIVA) {
--
ordenaFrecyValorcpp.cpp-86-    }
ordenaFrecyValorcpp.cpp-87-    if (DEBUG) cout << "}" << endl;
ordenaFrecyValorcpp.cpp-88-
ordenaFrecyValorcpp.cpp:89:    if (!(ALTERNATIVA)) {
--
ordenaFrecyValorcpp.cpp-97-     if (DEBUG) cout << "}" << endl;
ordenaFrecyValorcpp.cpp-98-    } 
ordenaFrecyValorcpp.cpp-99-
ordenaFrecyValorcpp.cpp:100:    if (ALTERNATIVA) {
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


