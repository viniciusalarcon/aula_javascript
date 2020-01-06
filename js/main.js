// // ------- String -------- //
// var _name = 'Alarcon';
// var _idade = 22;
// var _idade2 = 3
// var _idadeTotal = _idade + _idade2;
// alert('Bem vindo, eu sou o '+ _name + '. Tenho '+ _idadeTotal)
// frase = 'Japão é o melhor time do mundo!';
// alert(frase.replace('Japão', 'Brasil').toUpperCase())

// // -------- Array --------- //
// var _lista = ['maçã', 'banana', 'pêra'];
// _lista.pop('Ele sempre tira a última array. No caso tirarei "Pêra"');
// _lista.push('uva');
// console.log(_lista);
// console.log(_lista.reverse('Exibirá em ordem reversa'));
// console.log(_lista.toString());
// console.log(_lista.join(' | '));

// // ---------- JSON ---------- //
// var _frutas = [{fruta: 'maçã', cor: 'vermelha'}, {fruta: 'uva', cor: 'roxa'}]
// console.log(_frutas)

// // --------- Condição --------- //
// var idade = prompt('Qual sua idade')
// if(idade < 18) {
//    alert('Menor de idade')
// }else{
//    alert('Maior de idade')
// }
// 
// var count = 0;
// while (count <= 5) {
//     alert(count);
//     count++
// }
//
//  var count2;
//  for(count2 = 1; count2 <= 5; count2 = count2 + 2){
//      alert(count2);
//  };

// // ------- Get Date and your properties ------- //
// var _date = new Date();
// var _day = _date.getDate();
// var _month = _date.getMonth()+1;
// var _year = _date.getFullYear();
// var _hours = _date.getHours()+1;
// var _minutes = _date.getMinutes()+1;
// var _seconds = _date.getSeconds()+1;
// console.log('Hoje é dia '+ _day+'/'+ _month+'/'+ _year+'. São exatamente: '+_hours+':'+_minutes+':'+_seconds)

// // -------- funções -------- //
// function soma(n1, n2) {
//   return n1 + n2;  
// }
// var _numb1 = soma(5,0)
// var _numb2 = soma(0,10)
// var _total = soma(5,10)
// console.log('A soma de '+ _numb1 +' e '+ _numb2 +' é: ' + _total)

// function setReplace(frase, nome, novo_nome) {
//     return frase.replace(nome, novo_nome)
// }
// console.log(setReplace('Vai Japão', 'Japão', 'Brasil' ))

// function validaIdade(idade) {
//     var validar;
//     if (idade >= 18) {
//         validar = 'maior de idade';
//     } else {
//         validar = 'menor de idade';
//     }
//     return validar
// }
// var _idade = prompt('Qual a sua idade?')
// console.log('Você é ' + validaIdade(_idade))

function load() {
    alert('Página carregada!')
}

function clicandoBotao() {
//   alert('Obrigado por clicar!');
document.getElementById("agradecimento").innerHTML = 'Obrigado por clicar! Clique aqui para ir para o Linkedin'
}

function redirecionar() {
    // window.location.href = 'http://br.linkedin.com/in/viniciusalarcon'
    window.open('http://br.linkedin.com/in/viniciusalarcon')
}

function trocar() {
    document.getElementById("mouseover").innerHTML = 'Obrigado por passar o mouse!';
    //alert('Trocar texto');
}

function voltar() {
    document.getElementById("mouseover").innerHTML = 'Passar o mouse aqu!';
    //alert('Trocar texto');
}

function trocar2(element) {
    element.innerHTML = 'Obrigado por passar o mouse!'
}

function voltar2(element) {
    element.innerHTML = 'Passar o mouse aqu!'
}

function changeValue(element) {
    console.log(element.value)
}