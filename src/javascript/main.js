var MultaPorcentagemValor = 0;
var valoBoleto = 0;
var dataP = '0';
var dataV = '0';
var days = 0;


function Vencimento(){
    
    dataV = document.querySelector('input#vencimento').value;
    dataV = new Date(dataV );
  }
  
function DataPagamento(){
    
    dataP = document.querySelector('input#pagamento').value;
    dataP =  new Date(dataP);
}
  
function Multa(){
    var select = document.getElementById('lista-multa');
    select.onchange = function(){
    MultaPorcentagemValor = this.value;
    }
}

function ValorDoBoleto(){
  let valor = document.querySelector("#valor-boleto").value;
  valoBoleto = parseInt(valor);

}


function calcularDias(){
   //juros
   const jrs = document.getElementById('juros')
     
   const diasAtrasados = document.getElementById('diasAtras')
 
   //diferença de dias
   let total = (dataP - dataV);
   let totalT = 1000 * 60 * 60 * 24;
   days = total / totalT;

     //multa
     const valorM = document.getElementById('valorMulta');

     //valorBoleto
     const valor2 = document.getElementById('valor');
   
     //valo total de multa
     let valorTotalMulta = MultaPorcentagemValor * valoBoleto;
     valorM.textContent = valorTotalMulta;
   
     //valor total boleto
     var somaMultaBoleto = (valorTotalMulta + valoBoleto);
     let jurosTotal = (somaMultaBoleto * 1/100/30 * days)
     let JurosEmReal = jurosTotal * somaMultaBoleto / 100;
     let total1 = somaMultaBoleto + JurosEmReal;
     valor2.textContent = total1.toFixed(2);  
    

   if(days <= 0){
    diasAtrasados.textContent = 0;
    let jurosTotal = (somaMultaBoleto * 1/100/30 * 0)
    jrs.textContent = jurosTotal.toFixed(2);
   }
   else{
    diasAtrasados.textContent = Math.abs(days);
    let jurosTotal = (somaMultaBoleto * 1/100/30 * days)
    let JurosEmReal = jurosTotal * somaMultaBoleto / 100;
    jrs.textContent = JurosEmReal.toFixed(2);
    console.log(JurosEmReal.toFixed(2));
   }


}






const calcular = () =>{
  calcularDias();
  Multa();
}








