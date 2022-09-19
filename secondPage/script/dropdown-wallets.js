const btnWallets = document.querySelector(".menu-wallets");

btnWallets.addEventListener("click", (e)=>{handlerWallet(e)});
function handlerWallet(e){
    let intervalId;
    e.preventDefault();
    if(!document.querySelector('.menu-item-wallets').classList.contains("open")){
        document.querySelector(".menu-item-wallets").classList.add("menu-item-wallets-active");
        intervalId = setTimeout(()=>{
            document.querySelector(".menu-item-wallets").classList.add("open");
        },0)

    }
    if(document.querySelector('.menu-item-wallets').classList.contains("open")){
        clearInterval(intervalId);
        document.querySelector(".menu-item-wallets").classList.remove("menu-item-wallets-active");
        setTimeout(()=>{
            document.querySelector(".menu-item-wallets").classList.remove("open");
        },0)
    }

}