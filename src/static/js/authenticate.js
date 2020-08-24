// Login Form Post 
function loginFormSubmit(theForm) {
    var Email = $("#email_address").val();
    var Pass = $("#password").val();
    $.ajax({
    type: "POST",
    contentType: 'application/json',
    datatype: 'json',
    url: 'http://127.0.0.1:5000/api/v1/users/login',
    data: JSON.stringify({
        "email":Email,
        "password": Pass
    }),
    success: function(data)
    {
        console.log(data);
        if (data) {
            sessionStorage.setItem('status','loggedIn');
            sessionStorage.setItem('token',data.jwt_token);
            window.location.replace('/profile');
        }
        else {
            alert(data);
        }
    }
    });
    
}

// Register Form Post 
function registerFormSubmit(theForm) {
    var Email = $("#email_address").val();
    var Name = $("#username").val();
    var Pass = $("#password").val();
    $.ajax({
    type: "POST",
    contentType: 'application/json',
    datatype: 'json',
    url: 'http://127.0.0.1:5000/api/v1/users/',
    data: JSON.stringify({
        "email":Email,
        "name":Name,
        "password": Pass
    }),
    success: function(data)
    {
        console.log(data);
        if (data) {
            sessionStorage.setItem('status','loggedIn');
            sessionStorage.setItem('token',data.jwt_token);
            window.location.replace('/profile');
        }
        else {
            alert(data);
        }
    }
    });
    
}

function validateEmail(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

// Logout User
function LogoutUser(){
    sessionStorage.removeItem('status');
    sessionStorage.removeItem('token');
    return window.location.replace('/');
}
