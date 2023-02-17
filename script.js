const form = document.querySelector('form');
const info = document.getElementById('bt_info');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    openAllTabs();
});


info.addEventListener('click',  (e) => {
    e.preventDefault();
    executeFunc();
});

function setText(resultado){
    //console.log(resultado);
    document.getElementById("story").value += resultado[0].result.productName + "\n\n";
    document.getElementById("story").value += resultado[0].result.dadosNfe + "\n\n";
    document.getElementById("story").value += resultado[0].result.price + "\n\n";
    document.getElementById("story").value += "-----------------------\n\n";
}

function getText(){
    
        var teste = document.getElementsByClassName("sc-account-rows__row__subTotal")[0];
            setText(teste.innerText + " asasasasa");

}

function openAllTabs() {

    chrome.tabs.query({
        active: true,
        currentWindow: true
      }, ([currentTab]) => {
        chrome.scripting.executeScript({
            target: {tabId: currentTab.id},
            files : [ "openlinks.js" ],
           }).then(() => console.log("injected script file"));
      });

}


function executeFunc(){

    chrome.tabs.query({currentWindow: true}, function(tabs) {
        tabs.forEach(function(tab) {
            console.log('Tab ID: ', tab.url);
            var re = /https:\/\/www\.mercadolivre\.com\.br\/vendas\/\d+\/detalhe.+/g;
            if(re.test(tab.url)){
                getAllTabs(tab,tab.id);
            }
        });
    
    });
    
    }
    
    
    async function getAllTabs(tabChromeTab,chromeTabId) {

          const price = await chrome.scripting.executeScript({
            target: {tabId: chromeTabId},
            files : [ "getinfo.js" ],
           }).then(setText, null);


    }
    