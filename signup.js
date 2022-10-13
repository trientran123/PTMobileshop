function formValidate(){
    var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    var email = document.getElementById("email").value;
    if (regExp.test(email));
    else
        alert('email không hợp lệ!');
    return re.test(String(email).toLowerCase());
}

function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var psw = document.getElementById("password");
    if (psw.value.length == 0) {
        strength.innerHTML = '';
    } else if (false == enoughRegex.test(psw.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(psw.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(psw.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}