document.getElementById('togglerBtn').addEventListener('click', function () {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
});
function mouseover() {
    document.getElementById("get").style.color = "white";
    document.getElementById("get").style.backgroundColor = "rgb(30, 30, 30)";
    
}

function mouseout() {
    document.getElementById("get").style.color = "white";
    document.getElementById("get").style.backgroundColor = "black";
}
