function calcular(){
    var primeironumero = document.getElementById("n1").value;
    var segundonumero = document.getElementById("n2").value;
   
   

    document.getElementById("result").value=resultado;
    console.log(resultado);

    
var operacao = document.getElementById("operacoes").value;
if(operacao == "+")
    
    var resultado = (Number(primeironumero) + Number(segundonumero));
    document.getElementById("result").value=resultado;

    var operacao = document.getElementById("operacoes").value;
if(operacao == "-")
    
    var resultado = (Number(primeironumero) - Number(segundonumero));
    document.getElementById("result").value=resultado;

    var operacao = document.getElementById("operacoes").value;
if(operacao == "*")
    
    var resultado = (Number(primeironumero) * Number(segundonumero));
    document.getElementById("result").value=resultado;

    var operacao = document.getElementById("operacoes").value;
if(operacao == "/")
    
    var resultado = (Number(primeironumero) / Number(segundonumero));
    document.getElementById("result").value=resultado;
    








    }

    

function limpCalculadora(){
   
    document.getElementById("result").value="";
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
    document.getElementById("operacoes").value="";
    


}

var operacao = document.getElementById("operacoes");
if(operacao == "+"){ 
    
    var resultado = (Number(primeironumero) + Number(segundonumero));
   
    document.getElementById("operacoes").value=operacao;
    

}

    

   
     

    


    


