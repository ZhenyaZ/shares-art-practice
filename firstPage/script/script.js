

// PRE-REGISTER BLOCK START
// REQUEST
const formReg = document.preRegForm;
const urlReg = "http://localhost:3000/pre-register";
formReg.addEventListener("submit",(e)=>requested(e),{"once":true})
function requested(e){ //HANDLER FOR PRE-REG FORMS
    e.preventDefault();
    let obj ={};
    let formData = new FormData(formReg);
    formData.append("id", (Math.random()*1000));
    formData.forEach((value,key)=>{
        obj[key]=value;
    });
    async function preRegisterReq(url,data){ //CREATE REQUEST FUNC
        var req = await fetch(urlReg, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        });
        return await request.json();
    }
    preRegisterReq(urlReg,obj)
    .then(res=>console.log(res))
    .catch(err=>console.error(err));
}
// PRE-REGISTER BLOCK END

