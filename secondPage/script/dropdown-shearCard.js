var ShearCardOver = document.querySelectorAll(".shares-card-holder").forEach(e=>{
    e.addEventListener("mouseover",e=>{
        var CardHolderTarget = e.currentTarget.dataset.path;
        document.querySelectorAll(".card-btn").forEach(e=>{
            if (!document.querySelector(`[data-target=${CardHolderTarget}]`).classList.contains("open")) {
                document.querySelector(`[data-target=${CardHolderTarget}]`).classList.add("card-btn-hover");
                document.querySelector(`[data-target=${CardHolderTarget}]`).classList.add("open");
    
            }
        })
    })
})
var ShearCardOut = document.querySelectorAll(".shares-card-holder").forEach(e=>{
    e.addEventListener("mouseout",e=>{
        var CardHolderTarget = e.currentTarget.dataset.path;
        document.querySelectorAll(".card-btn").forEach(e=>{
            if (document.querySelector(`[data-target=${CardHolderTarget}]`).classList.contains("open")) {
                document.querySelector(`[data-target=${CardHolderTarget}]`).classList.remove("card-btn-hover");
                document.querySelector(`[data-target=${CardHolderTarget}]`).classList.remove("open");
    
            }
        })
    })
})

