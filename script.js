function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === ""){
        alert("Fill all fields");
        return false;
    }

    alert("Form Submitted");
    return true;
}