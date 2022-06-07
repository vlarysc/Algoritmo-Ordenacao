const valores = [0, 5, 6, 3, 2, 1, 4, 8, 9, 7];
let resultado = [];
let arrayPar = [];
let arrayImpar =  [];
let auxPar = [];
let AuxImpar = [];
let teste = [];
let antes = Date.now();
for(let i = 0; i < valores.length; i++) {
    if(valores[i] % 2 == 0){
        arrayPar.push(valores[i])
    } else {
        arrayImpar.push(valores[i])
    }
}

for(let a = 0; a < arrayImpar.length; a++) {
for(let k = 0; k < arrayImpar.length; k++) {
    if(arrayImpar[k + 1] < arrayImpar[k] ){
        AuxImpar = arrayImpar[k];
        arrayImpar[k] = arrayImpar[k + 1];
        arrayImpar[k + 1] = AuxImpar;
    }    
}


for(let j = 0; j < arrayPar.length; j++) {
    if(arrayPar[j + 1] < arrayPar[j] ){
        auxPar = arrayPar[j];
        arrayPar[j] = arrayPar[j + 1];
        arrayPar[j + 1] = auxPar;
    }
    
}
}

for(let x = 0; x < arrayImpar.length; x++) {
resultado.push(arrayPar[x]);
resultado.push(arrayImpar[x]);
}

console.log(resultado)
let duracao = Date.now() - antes;
console.log(duracao)
