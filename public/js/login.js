$("#button").on("click",event=>{
    console.log("button pressed");
    const userCredentials = {
        username: $("username").val().trim(),
        password: $("password").val().trim()
    };
    // if ()
    // $.post("/api/login",userCredentials).then(data=>{
    //     console.log(data);
    // });
});