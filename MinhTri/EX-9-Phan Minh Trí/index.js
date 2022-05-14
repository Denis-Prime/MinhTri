function checkAge(age) {
    return age > 18 ? true : confirm("Did parents allow you? ")
}
function min(a, b) {
    return a > b ? b : a;
}


function ask(question, yes, no) {
    return confirm(question) ? yes() : no()
}
ask(
    "Do you agree",
    function(){alert("You agree")},
    function(){alert("You canceled the execution")}
)
function Login() {
    let user = prompt("Enter User Name")
    console.log(user)
    if (user == "Admin") {
        let pass = prompt("Enter pass")
        if (pass == "mindX") alert("Chào mừng")
        else if (pass == "" || pass == null) alert("Đã hủy")
        else alert("Mật khẩu sai rồi bé ơi")
    }
    else if (user == "" || user == null) alert("Canceled")
    else alert("Tôi không biết bạn")
}