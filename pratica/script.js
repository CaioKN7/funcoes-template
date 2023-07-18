// Acompanhe a Prática 
// Blocos de código que servem para executar uma ação, sem repetição do código.
 
//Resumo

// const ou let => declatação da variável
//function => declaração da função
//nome
//Parametros - como se fosem variáveis e vamos declarar dentro da função, são as partes que irão variar

//Prática 1

//function dizerOla(nome){
    
//    console.log(`Olá ${nome}`)
//}

//dizerOla("Caio")
//dizerOla("Josias")
//dizerOla("De arrascaeta")
//dizerOla("Gabi")

//const dizerOla = function(nome){

//    console.log(`Olá ${nome}`)
//}

//dizerOla("Bruno Henrique")
//dizerOla("Pedro")


//Prática 2

//const qualquerVariavel = "aqui é escopo global"

//function verificaSeParSomarCom10EmultipicarPeloNumero(numero){

//    const resultado = numero%2===0
//    const soma=numero+10
//    const multiplica= numero*numero
    
//    return `o número ${numero} é par? ${resultado}. Somado com 10 é igual a ${soma} e multiplicado por ele mesmo é ${multiplica}`
//}

//const resultadoFuncao81 = verificaSeParSomarCom10EmultipicarPeloNumero(81)
//const resultadoFuncao13 = verificaSeParSomarCom10EmultipicarPeloNumero(13)
//const resultadoFuncao19 = verificaSeParSomarCom10EmultipicarPeloNumero(19)
//const resultadoFuncao22 = verificaSeParSomarCom10EmultipicarPeloNumero(22)

//console.log(resultadoFuncao81)
//console.log(resultadoFuncao13)
//console.log(resultadoFuncao19)
//console.log(resultadoFuncao22)


//Prática 3

//function verificarUsuario(login, senha) {

//    const loginArmazenado = "astrodev"
//    const senhaArmazenada = "bananinha1234"
//    const resultado = login===loginArmazenado && senha===senhaArmazenada

//    return resultado
    
//}


//const resultadoLogin = verificarUsuario("astrodev", "bananinha1234")
//console.log(resultadoLogin)


const verificarUsuario = (login, senha)=>{


    const loginArmazenado = "astrodev"
    const senhaArmazenada = "bananinha1234"
    const resultado = login===loginArmazenado && senha===senhaArmazenada

    return resultado
}

const resultadoLogin = verificarUsuario("astrodev", "bananinha1234")
console.log(resultadoLogin)
    





