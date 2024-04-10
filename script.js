let navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";

}

function hideMenu(){
    navLinks.style.right = "-200px";
    
}

function sendEmail(){
    Email.send({
        Host : "smtp.gemail.com",
        Username : "jankimodh2003@gmail.com",
        Password : "janki2003",
        To : 'jankimodh2003@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New vaccine Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    }