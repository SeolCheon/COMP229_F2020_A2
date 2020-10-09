// IIFE -- Immediately Invoked Function Expression
"use strict";
(function(){

    function Start()
    {
        console.log("App Started...");
        
        if(document.title === "Contact")
        {
            let sendButton = document.getElementById("submitButton");
            let resetButton = document.getElementById("resetButton");

            let lastName = document.getElementById("lastName");
            let firstName = document.getElementById("firstName");
            let contactNumber = document.getElementById("contactNumber");
            let shortMessage = document.getElementById("shortMessage");


            sendButton.addEventListener("click", (event) => {
                    event.preventDefault();
                    console.log('send button clicked');
                    console.log(
                        `
                         last Name : ${lastName.value}
                         first Name : ${firstName.value}
                         contact number : ${contactNumber.value}
                         short message : ${shortMessage.value}
                         `
                    );
            });
            resetButton.addEventListener("click", (event) => {
                    event.preventDefault();
                    console.log('reset button clicked');
        });
        }

        if(document.title === "Home")
        {
            let homeButton = document.getElementById("homeButton");
            let aboutButton = document.getElementById("aboutButton");
            let projectsButton = document.getElementById("projectsButton");
            let servicesButton = document.getElementById("servicesButton");
            let contactButton = document.getElementById("contactButton");

            homeButton.addEventListener("click", (event) => {
                event.preventDefault();
                location.href ="/home";
        });

            aboutButton.addEventListener("click", (event) => {
                event.preventDefault();
                location.href ="/about";
        });

            projectsButton.addEventListener("click", (event) => {
                event.preventDefault();
                location.href ="/projects";
        });

            servicesButton.addEventListener("click", (event) => {
                event.preventDefault();
                location.href ="/services";
        });

            contactButton.addEventListener("click", (event) => {
                event.preventDefault();
                location.href ="/contactButton";
        });
    }
}

    window.addEventListener("load", Start);

})();