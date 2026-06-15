emailjs.init("YOUR_PUBLIC_KEY");

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

e.preventDefault();

const params = {

name:
document.getElementById("name").value,

email:
document.getElementById("email").value,

subject:
document.getElementById("subject").value,

message:
document.getElementById("message").value
};

emailjs.send(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
params
)

.then(function(){

alert("Message Sent Successfully!");

document
.getElementById("contact-form")
.reset();

})

.catch(function(error){

alert("Failed to send message.");

console.log(error);

});

});