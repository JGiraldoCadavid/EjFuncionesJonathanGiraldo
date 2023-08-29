function calcularPrecio(precio, cantprod){
    let preciofinal;
    if(cantprod>=10){
        preciofinal=(precio*cantprod)*0.9;
    }
    if(cantprod>=20){
        preciofinal=(precio*cantprod)*0.8;
    }
    return preciofinal;
}

console.log(calcularPrecio(100000,10));
console.log(calcularPrecio(100,15));
console.log(calcularPrecio(100000,20));
console.log(calcularPrecio(100000,30));
console.log(calcularPrecio(100000,5));