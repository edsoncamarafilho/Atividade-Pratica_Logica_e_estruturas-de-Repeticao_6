//06 PRÁTICA Estruturas Condicionais e de repetição 2 31/10/2023 | DESPERTAR.DEV | Carla Silva




// 1. Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

    const driverAge1 = 18

    if (driverAge1 >= 18) {
        document.write(`Pode dirigir <br><br>`)
    } else {
        document.write(`Não pode dirigir<br><br>`)
    }




// 2. Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.


    const driverAge = 18
    let license = confirm ('Tem CNH ou não?')

    if (driverAge >= 18 && license === true) {
        document.write(`Pode dirigir<br><br>`)
    } else {
        document.write(`Não pode dirigir<br><br>`)
    }




// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

    const days1 = Number(prompt(`Digite um número de 1 a 7`))

    if (days1 === 1) {
        document.write(`O dia correspondente é domingo<br><br>`)

    } else if (days1 === 2) {

        document.write(`O dia correspondente é segunda<br><br>`)

    } else if (days1 === 3) {

        document.write(`O dia correspondente é terça<br><br>`)

    } else if (days1 === 4) {

        document.write(`O dia correspondente é quarta<br><br>`)

    } else if (days1 === 5) {

        document.write(`O dia correspondente é quinta<br><br>`)

    } else if (days1 === 6) {

        document.write(`O dia correspondente é sexta<br><br>`)

    } else if (days1 === 7) {

        document.write(`O dia correspondente é sábado<br><br>`)

    } else  {
        document.write(`Dia não reconhecido<br><br>`)
    }






// 4. Reescreva o exercício 3, utilizando apenas o SWITCH.

    const days = Number(prompt(`Digite um número de 1 a 7`))

    switch (days) {
        case 1:
            document.write(`O dia correspondente é domingo<br><br>`)
        break;
        case 2:
            document.write(`O dia correspondente é segunda<br><br>`)
        break;
        case 3:
            document.write(`O dia correspondente é terça<br><br>`)
        break;
        case 4:
            document.write(`O dia correspondente é quarta<br><br>`)
        break;
        case 5:
            document.write(`O dia correspondente é quinta<br><br>`)
        break;
        case 6:
            document.write(`O dia correspondente é sexta<br><br>`)
        break;
        case 7:
            document.write(`O dia correspondente é sábado<br><br>`)
        break;
        default:
            document.write(`Dia não reconhecido`)
            break;
    }





//5. Utilizando FOR, percorra os números de 1 a 10 e imprima no console
// os números pares.

    for (let i = 1; i <= 10 ; i++) {
        if (i %2 == 0) {
            document.write(` ${i}<br><br>`) 
        }
    }







// 6. Insira no html 30 ( trinta ) números ímpares.


let contador = 0

for (let i = 1; i <= 60 ; i++) {
    if (i %2 != 0) {
        document.write(` ${i}<br><br>`)
        contador++ 
    }
} document.write(`<br> Foram impressos ${contador} números impares.`)






// 7. Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.


let counter1 = 10
let sum1 = 0

do {
    sum1 = sum1 + counter1    
    counter1++
} while (counter1 >= 10 && counter1 <= 100)

document.write(`${sum1}<br><br>`)







// 8. Crie uma variável para armazenar o salário do usuário e atribua um
// valor a essa variável. Crie a validação necessária:
// - Caso o salário seja MENOR que R$ 1.903,98, insira no html
// "ISENTO DE IR";
// - caso contrário insira "TRIBUTADO NO IR".

    let salarioUsuario = Number(prompt('Digite o seu salário'))

    if(salarioUsuario < 1903.98) {
        document.write(`Inseto de Imposto de Renda<br><br>`)
    } else {
        document.write(`Tributado no Imposto de Renda<br><br>`)
    }









// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.


    let numero = 257

    if(numero <= 1 ){
        document.write('Não é primo<br><br>')

    } else if(numero > 2 && numero %2 === 0) {
        document.write('Não é primo<br><br>')
    } else {
        let vezesZero = 0

        for (let i = numero; i >= 1; i--) {
            if(numero %i === 0) {
                vezesZero++
                if (vezesZero === 3) {
                    document.write('Não é primo<br><br>')
                    break
                }
            } 
        }

        if (vezesZero === 2 ) {
            document.write('O numero é primo<br><br>')
        }
    }



// 10. Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7

    let altura = Number(prompt(`Digite a sua altura`))

    let genero = Number(prompt('Digite 1 para sexo feminino ou 2 para sexo masculino'))

    if(genero == 1) {
        pesoIdeal = ((altura * 62.1) - 44.7).toFixed(2)
        document.write(`Seu peso ideal é ${pesoIdeal}<br><br>`)
    }

    else if (genero == 2) {
        pesoIdeal = ((altura * 72.7) - 58).toFixed(2)
        document.write(`Seu peso ideal é ${pesoIdeal}<br><br>`)
        
    } else {
        document.write(`Digite um número válido<br><br>`)
    }




// 11. Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.


let horarioEstudo = prompt(`Digite o horário que você estuda, M para matutino, V para verspertino, ou N para noturno`)

    switch (horarioEstudo) {
        case 'M':
            alert(`Bom dia!`)

        break;
        case 'V':
            alert(`Boa tarde!`)
        break;

        case 'N':
            alert(`Boa noite!`)
        break;
        default:
            alert(`Digite um horário válido.`)
            break;
    }





// 12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
// programa que armazene a idade de uma pessoa e diga se ela pode
// doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
// (&&).


    let doarSangue = Number(prompt('Digite a sua idade'))

    if(doarSangue >=67 && doarSangue <= 18 ) {
        document.write('Você não pode doar sangue <br><br>')
    } else {
        document.write('Você pode doar sangue <br><br>')
    }








// 13. Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.


let numeroArmazenado = Number(prompt('Digite um número inteiro maior que 1.'))

let contador2 = 0

for (let i = 1; i <= numeroArmazenado ; i++) {
    if (i %2 != 0) {
        document.write(` ${i}`)
        contador2++ 
    }
} document.write(`<br> Foram impressos ${contador2} números impares.`)







// 14. Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor

let numeroSoma = Number(prompt("Digite um número: "));
let soma = 0;
let ultimoValor = numeroSoma;

while (soma < 500) {    
  ultimoValor = ultimoValor * 3;
  soma += ultimoValor;
}

document.write(`O último valor multiplicado por 3 é: ${ultimoValor}<br><br>`);







// 15. Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.

// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.

// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);

// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);

// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);


    let a = Number(prompt('Digite o lado A do triângulo'))

    let b = Number(prompt('Digite o lado B do triângulo'))

    let c = Number(prompt('Digite o lado C do triângulo'))

    if (a <(b + c) && b < (a + c) && c < (a + b)){25
        if(a == b && a == c && b == c) {
            document.write('É um triângulo equilátero.<br><br>')
        }
        else if( a == b || a == c || b == c) {
            document.write('É um triângulo isóceles.<br><br>')
        
        } else if (a != b && a != c && b != c) {
            document.write('É um triângulo escaleno.<br><br>')
        }
    }else{
        document.write('Não é um triângulo<br><br>')
    }





// 16. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).


    const anoAtual = 2023
    const anoDeNascimento = Number(prompt('Digite o ano que você nasceu. Ex: 2008'))

    const calculoVotar = (anoAtual - anoDeNascimento)

    if (calculoVotar >= 16) {
        document.write ('Pode votar!<br><br>')
    } else {
        document.write ('Você não pode votar!<br><br>')
    }






// 17. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

    let votosTotais = Number(prompt(`Digite o total de VOTOS:`))
    let votosBrancos = Number(prompt(`Digite o total de VOTOS BRANCOS:`))
    let votosNulos = Number(prompt(`Digite o total de VOTOS NULOS:`))

    if (votosBrancos >= votosTotais || votosNulos >= votosTotais || (votosNulos + votosBrancos) >= votosTotais) {
        document.write("Quantidade de votos INVÁLIDAS<br><br>")
    } else {
        const percenValidatedVotes = ((votosTotais - votosBrancos - votosNulos) / votosTotais) * 100
        const percenvotosBrancos = (votosBrancos / votosTotais) * 100
        const percenvotosNulos = (votosNulos / votosTotais) * 100  
    }  
    document.write(`A quantidade TOTAL de VOTOS é: ${votosTotais.toFixed(2)} <br />`)
    document.write(`A Porcentagem de Votos VALIDADOS é: ${percenValidatedVotes.toFixed(2)}% <br />`)
    document.write(`A Porcentagem de Votos BRANCOS é: ${percenvotosBrancos.toFixed(2)}% <br />`)
    document.write(`A Porcentagem de Votos NULOS é: ${percenvotosNulos.toFixed(2)}% <br />`)







// 18. Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:

//TABELA DO EXERCICIO

// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

    const precoCompra = Number(prompt("Digite o valor total da compra?"))
    const metodoPagamento = Number(prompt("Selecione (1) para pagamento a vista, (2) para pagamento de 2 a 5 vezes sem juros, (3) para pagamentos de 6 a 10 vezes com 6% de juros e numero (4) para pagamentos de 11 a 15 vezes com 13% de juros"))
    let precoFinal = 0

    let pagAVista = precoCompra - ((2.5 / 100) * precoCompra)
    let pag2a5vz = precoCompra + 0;
    let pag6a10vz = precoCompra + ((6 / 100) * precoCompra)
    let pag11a15 = precoCompra + ((13 / 100) * precoCompra)

    if (metodoPagamento == 1) {
        precoFinal = pagAVista
    } else if (metodoPagamento == 2) {
        precoFinal = pag2a5vz
    } else if (metodoPagamento == 3) {
        precoFinal = pag6a10vz
    } else if (metodoPagamento == 4) {
        precoFinal = pag11a15
    } else {
        document.write(`Pagamento INVÁLIDO <br />`)
    }
    document.write(`O preço final de sua compra ficou: R$${precoFinal}<br><br>`)

    

