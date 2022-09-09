//Crea un archivo JS que contenga las siguientes líneas

// Una función sin parámetros que devuelva siempre "true"
 let isTrue=()=> 3 === 3
    console.log(isTrue())
 
// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
let frase = ()=>{console.log("Hola soy una promesa")}
setTimeout(frase, 0000);

// Una función generadora de índices pares automáticos

function* generaId() {
    let ind = 0;
    while(true) {
        ind++
        ind += 1
        yield ind 
    }
}
const indPar = generaId();
console.log(indPar.next().value)
console.log(indPar.next().value)


