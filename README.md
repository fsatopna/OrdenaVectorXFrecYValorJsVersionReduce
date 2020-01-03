# OrdenaVectorXFrecYValorJsVersionReduce

Idem a version sin reduce (proyecto anterior), solo cambia

```
var mapset = [];
mapset = arr.reduce((mapset,nro) => mapset.set(nro, 1 + (mapset.get(nro) || 0)), new Map());
console.log("arr:  ", mapset);
```
Generando el siguiente mapa 
```
arr:   Map { 5 => 4, 1 => 1, 4 => 1, 3 => 2 }
```


