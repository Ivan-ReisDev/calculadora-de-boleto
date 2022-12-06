//formulario
const $boxPrincipal = document.getElementById('box-principal');

//inputs
const $vencimento = document.getElementById('vencimento');
const $valorBoleto = document.getElementById('valor-boleto');
const $pagamento = document.getElementById('pagamento');
const $listaMulta = document.getElementById('lista-multa');

//botoes
const $calcular = document.getElementById('calcular');
const $limpar = document.getElementById('limpar');

//tabela
const $diasAtrasados = document.getElementById('diasAtras');
const $valorMulta = document.getElementById('valorMulta');
const $juros = document.getElementById('juros');
const $valor = document.getElementById('valor');

//dias 
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//Evento de calcular com o enter
$boxPrincipal.addEventListener('keyup', (e) => {
  if (e.keyCode == 13) {
    calculoGeral();
  }
});

// Limpar input e tabela apertando a letra L;
$boxPrincipal.addEventListener('keyup', (e) => {
  if (e.keyCode == 46) {
    cleanInput()
    cleanTabela()
  }
});

//Evento de calcular com o click
$calcular.addEventListener('click', (e) => {
  calculoGeral();
});

//Limpar inputs e tabelas clicando no botão limpar
$limpar.addEventListener('click', (e) => {
  cleanInput()
  cleanTabela()
})

// Mascara do input valor do boleto (aparere na tela do usuário)
$valorBoleto.addEventListener("keyup", formatarMoeda);
function formatarMoeda(e) {
  let v = e.target.value.replace(/\D/g, "");
  v = (v / 100).toFixed(2) + "";
  v = v.replace(".", ",");
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
  e.target.value = v;
  $valorBoleto = v

};

//Função limpa input
function cleanInput() {
  $vencimento.value = '';
  $pagamento.value = '';
  $listaMulta.value = '';
  $valorBoleto.value = '';
};

//Função limpa tabela
function cleanTabela() {
  $diasAtrasados.innerHTML = '0';
  $valorMulta.innerHTML = 'R$ 0,00';
  $juros.innerHTML = 'R$ 0,00';
  $valor.innerHTML = 'R$ 0,00';
};

function ContadorDias() {
  let date_ini = new Date(document.getElementById('pagamento').value);
  let date_end = new Date(document.getElementById('vencimento').value);
  let diff = date_ini.getTime() - date_end.getTime();
  let res = Math.floor(diff / day);
  return res
}

function jurosCalculo() {
  //ValorBoleto x 1/100/30*dias

  let dias = ContadorDias()
  let mes = 30;
  let ResJuros = transBoleto() * 1 / 100 / mes * dias;
  return ResJuros;
}

function calculoMulta() {
  //ValorBoleto * Porcentagem/100
  let PorcentagemJuros = $listaMulta.value
  PorcentagemJuros = PorcentagemJuros / 100;
  return Number(PorcentagemJuros * transBoleto());
}

function transBoleto() {
  let TransBoleto = $valorBoleto.value;
  let transform = TransBoleto.replace(/\./g, "");
  transform = transform.replace(/,/g, ".");
  return Number(transform)
}

function calculoGeral() {
  let ResValorTotal = calculoMulta() + jurosCalculo() + transBoleto();
  //Alterações no DOM
  $diasAtrasados.textContent = ContadorDias();

  $valorMulta.textContent = calculoMulta().toFixed(2);
  $valorMulta.textContent = calculoMulta().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  $juros.textContent = jurosCalculo().toFixed(2);
  $juros.textContent = jurosCalculo().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  $valor.textContent = ResValorTotal.toFixed(2);
  $valor.textContent = ResValorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
