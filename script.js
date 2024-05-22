var fname = document.contact.fullname;
console.log(fname);

fname.addEventListener("keyup", function() {
    if(fname.value.length <= 4) {
        this.nextElementSibling.innerHTML = "Error length";
    } else {
        this.nextElementSibling.innerHTML = "";
    }
});

/**
 * JS variable making keywords
 * - var        (possible Redeclare, Redefine)
 * - let        (not possible Redeclare, possible Redefine)
 * - const      (not possible Redeclare, Redefine)
 * 
 * var n; //declaration
 * n = 10; //value assignment is called definition
 */
let email; //declartion
email = document.contact.email; //definition/assignment

let form = document.contact_form;

form.addEventListener("submit", function(event) {
    if(email.value.length <= 0) {
        email.nextElementSibling.innerText = "Email empty!";
        event.preventDefault();  
    } else {
        email.nextElementSibling.innerText = "";   
    }
});


email.addEventListener("keyup", function(event) {
    if(email.value.indexOf("@") == -1) {
        this.nextElementSibling.innerText = "At least one '@' symbol is required!";
        event.preventDefault();  
    } else if(this.value.indexOf(".") == -1) {
        this.nextElementSibling.innerText = "At least one '.' symbol is required!";
        event.preventDefault();  
    } else {
        this.nextElementSibling.innerText = "";   
    }

});