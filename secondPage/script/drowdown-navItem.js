const btnDebitCard = document.querySelector(".menu-card");
let intervalId;
btnDebitCard.addEventListener("click", (e)=>{handlerCard(e)});
function handlerCard(e){
    e.preventDefault();
    if(!document.querySelector('.menu-item-card').classList.contains("open")){
        document.querySelector(".menu-item-card").classList.add("menu-item-card-active");
        intervalId = setTimeout(()=>{
            document.querySelector(".menu-item-card").classList.add("open");
        },0)

    }
    if(document.querySelector('.menu-item-card').classList.contains("open")){
        clearInterval(intervalId);
        document.querySelector(".menu-item-card").classList.remove("menu-item-card-active");
        setTimeout(()=>{
            document.querySelector(".menu-item-card").classList.remove("open");
        },0)
    }

}