const horas= 80;

const calculandoPago = (horas)=>{
    let resultado = 0;
    if (horas <= 30) {
        resultado = 50 *horas;
    } else if(horas >30 && horas <= 60){
        resultado = horas * 40;
    }else{
        resultado = horas*25;
    }
    return resultado;
};

const pagoPorHora = (resultado)=>{
    return resultado / (24*30)
};

let pago = calculandoPago(horas);

console.log("el pago por hora es:" + Math.round(pagoPorHora(pago)));
console.log("calculando pago por mensualidad:" + pago);
