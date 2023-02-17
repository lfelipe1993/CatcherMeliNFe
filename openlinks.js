document.querySelectorAll("div.sc-actions")
.forEach(function (e){ 
        console.log('entrou')
    if (e.querySelector("div.sc-actions > a > span").innerText == "Informar a NF-e" ||
        e.querySelector("div.sc-actions > a > span").innerText == "Adicionar dados fiscais"
    ){

        var linkTest = e.querySelector("div.sc-ui-trigger-content > div.sc-ui-trigger-content__content > ul > li.sc-secondary-action-link > a");
            if (linkTest.innerText == "Ver detalhe"){
             //chrome.tabs.create( {url: linkTest.href});
             window.open(linkTest.href); 
            }
            


     }
    });