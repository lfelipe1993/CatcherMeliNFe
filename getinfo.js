var dadosNfe = "";
var price = 0;
var productName = "";

function enviarDados(){
    var dadosNfeHtml = document.getElementsByClassName("sc-title-subtitle-action sc-title-subtitle-action--payment")[0];
    var teste = document.getElementsByClassName("sc-account-rows__row__subTotal")[0];
    var divProduto = document.querySelectorAll(".sc-detail-title .sc-detail-title__text")[0];


    if (typeof teste !== "undefined" && typeof dadosNfe !== "undefined") {
        productName = divProduto.innerText
        price = "Preço: "+ teste.innerText;
        dadosNfe = dadosNfeHtml.innerText;
    }

   // console.log(price)
    //console.log("exec")

    //return price;
    return new Promise((resolve, reject) => {
        if(price !== "undefined") {
           const successObject = {
              msg: 'Success',
              productName,
              price,
              dadosNfe
           }
           resolve(successObject); 
        } else {
           const errorObject = {
              msg: 'An error occured',
              error, //...some error we got back
           }
           reject(errorObject);
        }
     });
}

//console.log(enviarDados())
enviarDados();