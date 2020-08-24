const host = 'http://localhost:5000';
if(window.location.href == host + '/'){
    //Load Profile Links if Authenticated
    if (sessionStorage.getItem('status') != null){
        console.log("Is Login : True");
        $("span.navbar-text").append("<a href='/profile' class='nav-auth'>Profile</a> &nbsp;\
        <a href='javascript:LogoutUser();' class='nav-auth'>Logout</a>");
    }
    else{
        console.log("Is Login : False");
        $("span.navbar-text").append("<a href='/login' class='nav-auth'>Login</a> &nbsp;\
            <a href='/register' class='nav-auth'>Register</a>");
    }
}
else if (window.location.href == host + '/login'){
    if (sessionStorage.getItem('status') != null){
        //redirect to page
        console.log("Is Login : True");
        window.location.replace('/profile');
    }
    else{
        //do not redirect
        console.log("Is Login : False");
    }
}
else if (window.location.href == host + '/register'){
    if (sessionStorage.getItem('status') != null){
        //redirect to page
        console.log("Is Login : True");
        window.location.replace('/profile');
    }
    else{
        //do not redirect
        console.log("Is Login : False");
    }
}
else if (window.location.href == host + '/profile'){
    if (sessionStorage.getItem('status') != null){
        //do not redirect
        console.log("Is Login : True");
        }
    else{
        //redirect to page
        console.log("Is Login : False");
        window.location.replace('/login');
    }
}