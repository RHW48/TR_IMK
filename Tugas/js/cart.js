document.addEventListener("DOMContentLoaded", function(event) {


    const cartButtons = document.querySelectorAll('.cart-button');
    
    cartButtons.forEach(button => {
    
    button.addEventListener('click',cartClick);
    
    });
    
    function cartClick(){
    let button =this;
    button.classList.add('clicked');
    }
    
    
    
    });
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}