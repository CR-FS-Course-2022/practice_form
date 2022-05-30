let validPasswords = () => {
    let fp = document.getElementById("password");
    let sp = document.getElementById("c_password");
    let errorMsg = "Passwords does not match!!!";

    if(fp.value !== sp.value) {
//        uncomment to display the error message with an span
//        document.getElementById("passwordsError").innerHTML = errorMsg;
        sp.value = "";
        sp.setAttribute("placeholder", errorMsg)
        return false;
    }

    console.log("end")
    return true;
}
