function calcularImpuesto(ingresoAnual){
    let impuesto;
    if(ingresoAnual<=10000){
        impuesto = ingresoAnual*0.1;
    }else {
        if(ingresoAnual>10000 && ingresoAnual<=20000){
            impuesto = ingresoAnual*0.15;
        }else{
            if(ingresoAnual>20000){
                impuesto = ingresoAnual*0.2;
            }
        }
    }
    return impuesto;
}

console.log(calcularImpuesto(5000));
console.log(calcularImpuesto(10000));
console.log(calcularImpuesto(11000));
console.log(calcularImpuesto(20000));
console.log(calcularImpuesto(21000));
console.log(calcularImpuesto(30000));