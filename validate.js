let password = document.querySelector("#password");
let confirm_password = document.querySelector("#confirm_password");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords do not match");
        confirm_password.style.border = "solid 1px red"
        password.style.border = "solid 1px red"
    }
    else {
        confirm_password.setCustomValidity("")
    }
}

let create_account_button = document.querySelector("#create-account");
create_account_button.addEventListener("click", function(e) {
    validatePassword();
})