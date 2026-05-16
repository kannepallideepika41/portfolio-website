function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === ""){
        alert("Fill all fields");
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
}

let text = "Full Stack Web Development Intern";
let index = 0;

function typeEffect(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect,100);
    }
}

window.onload = typeEffect;
function toggleMode(){

    document.body.classList.toggle("dark");
}