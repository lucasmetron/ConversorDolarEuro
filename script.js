let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"
let realToDolar = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"
let realToEuro = "https://api.exchangeratesapi.io/latest?base=EUR&symbols=BRL"
let cotacaoDolar;
let cotacaoEuro;

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
            document.getElementById("resultado").innerHTML = "<h2>Valor do dólar hoje: $"+cotacaoDolar.toFixed(2) + "</h2> <h2> R$"+ valor+" reais equivale a: $" + valor * cotacaoDolar.toFixed(2) +" dólares</h2>"
            console.log(data)
        })
    } else {
        fetch(realToEuro)
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            cotacaoEuro = data.rates.BRL;
            document.getElementById("resultado").innerHTML = "<h2>Valor do euro hoje: €"+cotacaoEuro + "</h2> <h2> R$"+ valor+" reais equivale a: €" + valor * cotacaoEuro +" euros</h2>"
        })
    }

   
    
    
}
