
// var email = document.getElementsByClassName('email');
// var err = document.getElementByClassName('error');
// var btn = document.getElementsByClassName('btn');
// const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    
//     btn.addEventListener('click', (e) =>{
//         e.preventDefault;
//        if(re.test(email))
//         {
//             err.classList.Add("visible");
//         } 
//     })

    document.addEventListener("DOMContentLoaded", () => {

        const emailField = document.getElementById("emailField");
        const btn = document.getElementById("button");
        const response = document.getElementById("error");
    
        btn.addEventListener("click", function () {
        const email = emailField.value;
        if (validateEmail(email)) {
            response.style.visibility = "hidden";
        } else {
            response.innerHTML = "Oops! Please check your email";
            response.style.color = "#FB3E3E";
            response.style.visibility = "visible";
        }
        });
    
        function validateEmail(email)
     {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
        }
    
    });