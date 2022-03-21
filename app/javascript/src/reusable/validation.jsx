function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateMobile(phone) {
    // let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    let re = /^([0-9]){8,15}$/
    return re.test(phone);
}

function validateUsername(name) {
    let re = /^([a-zA-Z0-9]){3,10}$/
    return re.test(name);
}

function validatePassword(password) {
    let re = /^([a-zA-Z0-9]){8,15}$/
    return re.test(password);
}

function validateAddress(address) {
    let re = /^[a-zA-Z0-9\s,./'-]{5,}$/
    return re.test(address);
}

export { validateEmail, validateUsername, validateMobile, validatePassword, validateAddress };