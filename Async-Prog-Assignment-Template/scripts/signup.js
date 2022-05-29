import navbar from  "../component/navbar.js"

let nav_div= document.getElementById("navbar");
// console.log(nav_div);
nav_div.innerHTML= navbar();


       document.querySelector("#form").addEventListener("submit",formSubmit);

       let arr= JSON.parse(localStorage.getItem("signup"))||[];

       function formSubmit(event)
       {
           event.preventDefault();

           let obj={
                name: document.getElementById("name").value,
                num: document.getElementById("num").value,
                email: document.getElementById("email").value,
                pass:document.getElementById("pass").value,

           }
           arr.push(obj)
           console.log(arr);
           localStorage.setItem("signup",JSON.stringify(arr));

          
       }

       document.querySelector("#sub").addEventListener("click",function(){
        window.location.href="login.html";
    })
