document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM has loaded");
    const p = document.querySelector('#text')
    console.log(p)
    document.getElementById("text").innerHTML = "This is really cool!";
    console.log(p)
})



