var dia = 9
var mes = 3
var ano = 2022

var idade = 18
var numP = 99

now = new Date()
var Ndia = now.getDate()
var Nmes =(now.getMonth()+1)
var Nano = now.getFullYear()
console.log(now)

if (ano > Nano){
    console.log("Data é válida")
    if (idade >= 18){
        console.log("Tem mais de 18 anos")
        if (numP < 100){
            console.log("O cadastro foi feito")
        }else{
            console.log("O cadastro não vai ser feito")
        }
    }else{
        console.log("Não tem mais de 18 anos")
    }
}

if (ano == Nano){
    if (mes > Nmes){
        console.log("Data é valida")
        if (idade >= 18){
            console.log("Tem mais de 18 anos")
            if (numP < 100){
                console.log("O cadastro foi feito")
            }else{
                console.log("O cadastro não vai ser feito")
            }
        }else{
            console.log("Não tem mais de 18 anos")
        }
    }
}

if (ano == Nano){
    if (mes == Nmes){
        if (dia > Ndia){
            console.log("Data é valida")
            if (idade >= 18){
                console.log("Tem mais de 18 anos")
                if (numP < 100){
                    console.log("O cadastro foi feito")
                }else{
                    console.log("O cadastro não vai ser feito")
                }
            }else{
                console.log("Não tem mais de 18 anos")
            }
        }else{
            console.log("Data é inválida")
        }
    }
}

if (ano == Nano){
    if (mes < Nmes){
        console.log("Data é invalida")
    }
}
if (ano < Nano){
    console.log("Data é inválida")
}




//dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
//monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")

//console.log("Hoje é " + dayName[now.getDay()] + ", " + now.getDate() + " de " + monName[now.getMonth()] + " de " + now.getFullYear())