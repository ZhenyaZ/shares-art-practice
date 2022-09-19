
window.addEventListener("DOMContentLoaded",(e)=>{ //CAll ALL
    (function (){
        req(e);
    }())
    
})
// CREATE CARD&&REQUEST FOR THIS
function req(e){ //CALL FUNCTIONS CREATE CARD AND REQUEST
    e.preventDefault();
    fetchreq("http://localhost:3000/card").then(data=>{
        CreateCard(data);
    }).catch("RERE");
}
async function fetchreq(url){ //REQUEST FUNC
    const response = await fetch(url);
    if(!response.ok ) throw new Error("!!!!");
    else{
        return await response.json();
    }
}
function CreateCard(data){ //CREATE CARD FUNC
    data.forEach(item=>{
        var card = document.createElement("div");
        card.innerHTML = 
         `
         <div class="card-holder">
                    <div class="card-img">
                        <img src="${item.img}" alt="card-photo">
                    </div>
                    <div class="about-card">
                        <div class="card-name-author">
                            <p>Emily Lazar</p>
                        </div>
                        <div class="card-name">
                            <p>Personally</p>
                        </div>
                        <div class="card-raised">
                            <p>Total Raised:</p>
                        </div>
                        <div class="card-price">
                            <p>1.75 ETH</p>
                        </div>
                        <div class="card-token-count">
                            <p class="card-token-count-text">Token Count</p>
                            <p class="card-count-text">5200</p>
                        </div>
                    </div>
                </div>
        `;
        document.querySelector(".drop-card-container").append(card);
    });
}