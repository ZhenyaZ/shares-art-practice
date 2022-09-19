let intervalId;
document.querySelectorAll(".answer-dropdown-btn").forEach(e=>{
    e.addEventListener("click",e=>{
        const btnMenu = e.currentTarget.dataset.path;   //path to button
        document.querySelectorAll(".answer-dropdown-menu").forEach(e=>{
            if(!document.querySelector(`[data-target=${btnMenu}]`).classList.contains('open')){ //check equal targetMenu to targetBtn and contains this class 'open'
                document.querySelector(`[data-target=${btnMenu}]`).classList.add('answer-dropdown-menu-active')
                intervalId = setTimeout(()=>{
                    document.querySelector(`[data-target=${btnMenu}]`).classList.add('open')
                },0)
                
            } 
            if(document.querySelector(`[data-target=${btnMenu}]`).classList.contains('open')){  //inversion
                clearTimeout(intervalId)
                document.querySelector(`[data-target=${btnMenu}]`).classList.remove('answer-dropdown-menu-active')
                // document.querySelector(`[data-target=${btnMenu}]`).classList.remove('open')
                intervalId = setTimeout(()=>{
                    document.querySelector(`[data-target=${btnMenu}]`).classList.remove('open')
                },0)
            }
        })
    })
});