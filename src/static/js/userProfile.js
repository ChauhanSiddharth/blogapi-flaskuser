$.ajax({
    url: "http://127.0.0.1:5000/api/v1/users/me",
    type: "GET",
    headers: {
        "api-token": sessionStorage.getItem('token'),
        "Content-Type": 'application/json'
    },
    success: function(data){
        if(data){
            // console.log(data);
            document.querySelector('.username').textContent = data.name;
            document.querySelector('.numBlogs').textContent = data.blogposts.length;
            $.each(data.blogposts, function(){
                $(".my-blogs").append("<li class='list-group-item'>"+ this.title + "</li>");
            })
            
        }
    }
});
function submitNewBlog(theForm) {
    var title = $("#title").val();
    var content = $("#content").val();
    $.ajax({
    type: "POST",
    datatype: 'json',
    url: 'http://127.0.0.1:5000/api/v1/blogposts/',
    headers: {
        "api-token": sessionStorage.getItem('token'),
        "Content-Type": 'application/json'
    },
    data: JSON.stringify({
        "title":title,
        "contents":content,
    }),
    success: function(data)
    {
        console.log(data);
        if (data) {
            window.location.replace('/profile');
        }
        else {
            alert("something went wrong.");
        }
    }
    });
    
}

var items = document.querySelectorAll(".list-group-item");
        for (const item of items) {
            item.addEventListener("click", function(event){
                var classNames = $(event.target).attr('class');
                if(classNames.includes('active')){
                    //pass
                } else{
                    $(".active").removeClass("active");
                    $(event.target).addClass("active");
                }
            });
        }
        $.each(items, function(){
            this.addEventListener("click", function(){
                if(this.className.includes("active")){
                    if(this.textContent.includes("Blogs")){
                        document.querySelector('.blog-post').style.display = 'none';
                        document.querySelector('.list-blogs').style.display = 'block';
                    }
                    else if(this.textContent.includes("Post")){
                        document.querySelector('.list-blogs').style.display = 'none';
                        document.querySelector('.blog-post').style.display = 'block';
                    }
                    else{
                        //pass
                    }
                }
            })
            if(this.className.includes("active")){
                    if(this.textContent.includes("Blogs")){
                        document.querySelector('.blog-post').style.display = 'none';
                        document.querySelector('.list-blogs').style.display = 'block';
                    }
                    else if(this.textContent.includes("Post")){
                        document.querySelector('.list-blogs').style.display = 'none';
                        document.querySelector('.blog-post').style.display = 'block';
                    }
                    else{
                        //pass
                    }
            }
        })