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
    let Multa = document.querySelector('input#lista-multa').value;
    MultaPorcentagemValor = Number(Multa) / 100;

}

function ValorDoBoleto(){
  let valor = document.querySelector("#valor-boleto").value;
  valoBoleto = Number(valor);

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
     valorM.textContent = valorTotalMulta.toFixed(2);
     valorM.textContent = valorTotalMulta.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

     //valor total boleto
     var somaMultaBoleto = (valorTotalMulta + valoBoleto);
     let jurosTotal = (100 * 1/100/30 * days)
     let JurosEmReal = jurosTotal * valoBoleto / 100;
     let total1 = somaMultaBoleto + JurosEmReal;
     valor2.textContent = total1.toFixed(2);  
     valor2.textContent = total1.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
    

   if(days <= 0){
    diasAtrasados.textContent = 0;
    let jurosTotal = (100 * 1/100/30 * 0)
    jrs.textContent = jurosTotal.toFixed(2);
    jrs.textContent = jurosTotal.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
   }
   else{
    diasAtrasados.textContent = Math.abs(days);
    let jurosTotal = (100 * 1/100/30 * days)
    let JurosEmReal = valoBoleto * jurosTotal / 100;
    jrs.textContent = JurosEmReal.toFixed(2);
    jrs.textContent = JurosEmReal.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
    console.log('Total Juros', jurosTotal);
 
   }


}






const calcular = () =>{
  calcularDias();
  Multa();
}








