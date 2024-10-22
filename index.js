let vitorias = 200
let derrotas = 53
let nivel = undefined
let resultadoRanqueada = quantias(vitorias, derrotas)

if(resultadoRanqueada <= 10){
    nivel = "ferro"
}
else if(resultadoRanqueada === 11 || resultadoRanqueada < 21){
    nivel = "bronze"
}
else if(resultadoRanqueada === 21 || resultadoRanqueada < 51){
    nivel = "prata"
}
else if(resultadoRanqueada === 51 || resultadoRanqueada < 81){
    nivel = "ouro"
}
else if(resultadoRanqueada === 81 || resultadoRanqueada < 91){
    nivel = "diamante"
}
else if(resultadoRanqueada === 91 || resultadoRanqueada < 101){
    nivel = "lendário"
}
else if(resultadoRanqueada >= 101){
    nivel = "imortal"
}

function quantias(vitorias, derrotas){
    let saldoRanqueada = vitorias - derrotas
    return saldoRanqueada
}

console.log("O Herói tem um saldo de " + resultadoRanqueada + " vitórias e está no nível de " + nivel)
