const modal = document.getElementById("modal");
const clsBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn");
const btns = document.getElementById("modal-choice-btns");



setTimeout(function(){
    modal.style.display = "block";
    
},1500);


clsBtn.addEventListener("click",()=>{
    
    modal.style.display ="none";
    clsBtn.style.color = "red";
    clsBtn.style.obacity = "1.0";
    clsBtn.style.cursor = "pointer";
})

consentForm.addEventListener("submit",function(event){
    
     event.preventDefault();
     
   
     const loginFormData = new FormData(consentForm);
   
     const fullname = loginFormData.get("fullname");
    //  console.log(fullname);



    //  console.log(event);
     modalText.innerHTML = `<div class="modal-inner-loading">
     <img class="loading" src="./images/loading.svg"/>
     <p id="uploadText">uploading your Data to the dark web...</p>
     </div>`
     setTimeout(function(){
       const uploadText = document.getElementById("uploadText");
       uploadText.innerHTML = "making the sale...";
         setTimeout(function(){
           document.getElementById("modal-inner").innerHTML = `<div>
             <h2>Thank you <span class="modal-display-name">${fullname}</span> </h2>
             <p>You just sold the rights to your eternal soul</p>
             <img alt="pirates" src="/images/pirate.gif"/>
           </div>`

          setTimeout(function(){
            clsBtn.disabled = false;
          })
         },1500)
    
      },1500);
     
     
})

declineBtn.addEventListener("mouseenter",function(){
  btns.classList.toggle("btn-reverse")
  console.log("button hovered")
})