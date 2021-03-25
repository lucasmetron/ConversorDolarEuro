let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"
let realToDolar = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"
let realToEuro = "https://api.exchangeratesapi.io/latest?base=EUR&symbols=BRL"
let cotacaoDolar;
let cotacaoEuro;
let resultado;

function converter (){
    
    let = moedaSemi = document.getElementsByName("moeda")
    let moeda;
    let valor = document.getElementById("valor").value

    for(var i=0; i< moedaSemi.length; i++){
        if(moedaSemi[i].checked){
            moeda = moedaSemi[i].value;
        }
    }

    if (moeda == "dolar"){
        fetch(realToDolar)
        .then((res)=>{
          return res.json()
        }).then((data)=>{
            cotacaoDolar = data.rates.BRL;
            resultado = valor / cotacaoDolar
            document.getElementById("resultado").innerHTML = "<p>Valor do dólar hoje: $" +"<strong>"+cotacaoDolar.toFixed(2) + "</strong>"+ "</p> <p> R$" +"<strong>"+ valor+"</strong>"+" reais equivale a: $" + resultado.toFixed(2) +" dólares</p>"
            console.log(data)
        })
    } else {
        fetch(realToEuro)
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            cotacaoEuro = data.rates.BRL;
            resultado = valor / cotacaoEuro
            document.getElementById("resultado").innerHTML = "<p>Valor do euro hoje: <strong> €"+cotacaoEuro + "</strong></h2> <p><strong> R$"+ valor+"</strong> reais equivale a: <strong>€" + resultado.toFixed(2) +"</strong> euros</p>"
        })
    }

   
    
    
}
