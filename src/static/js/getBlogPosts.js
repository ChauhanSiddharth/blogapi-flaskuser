fetch('http://127.0.0.1:5000/api/v1/blogposts/')
.then(
    function(response) {
    if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
        return;
    }

    response.json().then(function(data) {
        // console.log(data);
        $.each(data, function() {
            var blog = {
                id : this.id,
                title : this.title,
                content: this.contents
            }
            fetch('http://127.0.0.1:5000/api/v1/users/id/'+ this.owner_id)
            .then(resp => resp.json())
            .then(function(getName) {
                // console.log(getName);
                $(".list-group").append("<li class='list-group-item'><a rel='external' href='Category_News.html?ID=" + 
                    blog.id + "'>" + blog.title + "</a> - " + blog.content + " by " + getName.name + "</li>");
            })
            .catch(function(error) {
                console.log(error);
            });
            
        });
    });
    }
)
.catch(function(err) {
    console.log('Fetch Error :-S', err);
});
