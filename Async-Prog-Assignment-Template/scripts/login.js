           
     import navbar from  "../component/navbar.js"

     let nav_div= document.getElementById("navbar");
     console.log(nav_div);
     nav_div.innerHTML= navbar();

           let regdUsers= JSON.parse(localStorage.getItem("signup"));

           document.querySelector("#form").addEventListener("submit",submitform);
           let form= document.querySelector("#form");

           function submitform(event){
               event.preventDefault();

               let email= form.email.value;
               let pass= form.pass.value;

               let flag= false;
               for(let i=0; i<regdUsers.length; i++)
               {
                   if(regdUsers[i].email===email&& regdUsers[i].pass===pass)
                   {
                       flag=true;
                   }
               }
               if(flag===true){
                   window.location.href="index.html";
               }
               else{
                   alert("WRONG CREDENTIALS");
               }

           }