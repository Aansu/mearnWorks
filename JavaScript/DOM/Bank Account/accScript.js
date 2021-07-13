//alert("Welcome,Create an Account");
function create() {
    let accno = acc_no.value;
    let name = uname.value;
    let pswd = pswd.value;
    let email = emailid.value;
    let mobileno = mobile.value;
    let account_show = {
        accno, name, mobileno, email, pswd
    }

    if (accno in localStorage) {
        alert("Account already exist");

    } else {
        localStorage.setItem(accno, JSON.stringify(account_show));
        alert("Account Created");
        window.location.href ="./accLogin.html";
    }

}

function login() {
    let user_name = uname.value;
    let password = psw.value;
    let login_account = { user_name, password};
    console.log(login_account);
    let user = JSON.parse(localStorage.getItem(user_name))
    console.log(user);
    if (user_name in localStorage) {
        alert("username & password"+user_name,password);
        if (user.password== password) {
            alert("in pwd checking")
            alert("Login Success");
            sessionStorage.setItem("user", user_name);//Session Storage user==>1002
            location.href = "./accHome.html";
        }
        else {
            error.innerHTML="*please enter a valid password"
        }
    }
    else {
        error.innerHTML="*invalid username"
    }
}


function balanceEnquiry() {
    let user = sessionStorage.getItem("user");//1002
    let account = JSON.parse(localStorage.getItem(user));
    alert(account.balance);

}

var req = sessionStorage.getItem("user");
if (req) {
    litem.innerHTML = `logout ${req}`;

}

function logout() {
    sessionStorage.removeItem("user");
    location.href = "./accLogin.html";
}