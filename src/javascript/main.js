var variavelMulta = 0;
var valoBoleto = 0;
var dataP = '0';
var dataV = '0';
var days = 0;
var jurosTotal = 0;

  function Vencimento(){
    
    dataV = document.querySelector('input#vencimento').value;
    
    dataV = new Date(dataV );

    console.log('Vencimento', dataV.toLocaleDateString('pt-br'));

  }
  
  function DataPagamento(){
    
    dataP = document.querySelector('input#pagamento').value;
    dataP =  new Date(dataP);

    console.log('Data de Pagamento: ', dataP.toLocaleDateString('pt-br'));
    
  }
  

const Multa = () =>{
  var select = document.getElementById('lista-multa');
  
  select.onchange = function(){
    variavelMulta = this.value;
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


   if(days <= 0){
     diasAtrasados.textContent = 0;
    jurosTotal = (valoBoleto * 1/100/30 * 0)
    jrs.textContent = jurosTotal.toFixed(2);

   }
   else{
     diasAtrasados.textContent = Math.abs(days);
    jurosTotal = (valoBoleto * 1/100/30 * days)
    jrs.textContent = jurosTotal.toFixed(2);
   }
 
}

function CalcularFatura(){
    //multa
    const valorM = document.getElementById('valorMulta')

    //valorBoleto
    const valor2 = document.getElementById('valor')

  
    //valo total de multa
    let valorTotalMulta = variavelMulta * valoBoleto;
    valorM.textContent = valorTotalMulta;
  
    //valor total boleto
    
    var soma = (valorTotalMulta + valoBoleto);
    let addJuros = jurosTotal * soma / 100
    let total = soma + addJuros;
    valor2.textContent = total.toFixed(2);  

}


const calcular = () =>{
  calcularDias();
  CalcularFatura();

}


Multa();




