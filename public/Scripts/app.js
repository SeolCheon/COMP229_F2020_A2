// IIFE -- Immediately Invoked Function Expression
/*File name : app.js
  Author's name : Seol Cheon
  Student ID : 301113120
  Web site name : Seol Cheon
  date : Oct 24, 2020 */
"use strict";
(function(){

    function Start()                                                            //when app starts
    {
        console.log("App Started...");                                          //display this on console.
        
        let deleteButtons = document.querySelectorAll('.btn-danger');            //for all btn-danger, assign it to deleteButtons
        
        for(button of deleteButtons)                                            //for all deleteButtons,
        {
            button.addEventListener('click', (event) =>{                        //whenever you click the deleteButton,
                if(!confirm("Are you sure?"))                                   //if you click no for confirm message
                {
                    event.preventDefault();
                    window.location.assign("/contact-list");                    //return to contact-list
                }
            });
        }

        if(document.title === "Contact")                                        //if you are in contact page,
        {
            let sendButton = document.getElementById("submitButton");           //assign submit button to submitButton
            let resetButton = document.getElementById("resetButton");           //assign reset button to resetButton

            let lastName = document.getElementById("lastName");                 //assign input box for last name to lastName
            let firstName = document.getElementById("firstName");               //assign input box for first name to firtName
            let contactNumber = document.getElementById("contactNumber");       //assign input box for contact number to contactNumber
            let shortMessage = document.getElementById("shortMessage");         //assign input box for short message to shortMessage


            sendButton.addEventListener("click", (event) => {                   //when send button is clicked
                    event.preventDefault();
                    console.log('send button clicked');                         //display this message on console
                    console.log(                                                //display all input values on console
                        `
                         last Name : ${lastName.value}
                         first Name : ${firstName.value}
                         contact number : ${contactNumber.value}
                         short message : ${shortMessage.value}
                         `
                    );
            });
            
        }

        if(document.title === "Home")                                           //when you are in Home page,
        {
            let homeButton = document.getElementById("homeButton");             //assign home button to homeButton
            let aboutButton = document.getElementById("aboutButton");           //assign about button to homeButton
            let projectsButton = document.getElementById("projectsButton");     //assign projects button to homeButton
            let servicesButton = document.getElementById("servicesButton");     //assign services button to homeButton
            let contactButton = document.getElementById("contactButton");       //assign contact button to homeButton

            homeButton.addEventListener("click", (event) => {                   //when homeButton is clicked
                event.preventDefault();
                location.href ="/home";                                         //go to home page
        });

            aboutButton.addEventListener("click", (event) => {                  //when aboutButton is clicked
                event.preventDefault();                                         //go to about page
                location.href ="/about";
        });

            projectsButton.addEventListener("click", (event) => {               //when projectsButton is clicked
                event.preventDefault();                                         
                location.href ="/projects";                                     //go to projects page
        });

            servicesButton.addEventListener("click", (event) => {               //when servicesButton is clicked
                event.preventDefault();
                location.href ="/services";                                     //go to services page
        });

            contactButton.addEventListener("click", (event) => {                //when contactButton is clicked
                event.preventDefault();
                location.href ="/contact";                                //go to contact page
        });
    }
}

    window.addEventListener("load", Start);

})();