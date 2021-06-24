
function calcularPorcentagem(valor, porcentagem)
{
   return ( (porcentagem/100) * valor)
}

function valorAliquota(salario)
{
  if(salario <= 1556.94){
      return 8;
  }
  else if(salario <= 2594.92){
      return 9;
  }
  else if(salario <= 5189.82){
      return 11;
  }
  else{
      return 570.88; 
  }
}

function calcularAliquota(salario)
{
    let inssAliquota = valorAliquota(salario)

    let resultado = 0
    
    if(inssAliquota <= 11)
       resultado = calcularPorcentagem(salario, inssAliquota)
    else
       resultado = inssAliquota
    
    return salario - resultado
}

function AliquotaIR(salario)
{
    if(salario <= 1903.98){
        return 0;
    }
    else if(salario <= 2826.65){
        return [7.5, 142.80];
    }
    else if(salario <= 3751.05){
        return [15, 354.80]
    }
    else if(salario <= 4664.68){
        return [22.5, 636.13]
    }
    else{
        return [27.5, 869.36]
    }
}

function calcularIR(salario)
{
    aliquota = AliquotaIR(salario);
    if(aliquota){
        let valorPorcentagem = calcularPorcentagem(salario, aliquota[0])
        return (salario - (valorPorcentagem - aliquota[1]) )
    }
    return salario
}

let salario = 3000
let resultado = calcularAliquota(salario)
resultado = calcularIR(resultado)

console.log("Salário Liquido: " + resultado)