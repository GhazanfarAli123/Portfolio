 const script = () => 
{
   

    var myElement = document.getElementById("mob-menu");
    var myElement1 = document.getElementById("nav-icon4");

    // Define the toggle function
    myElement.style.display = "none"
    function toggleDisplay() {
        if (myElement.style.display === "none") {
            myElement.style.display = "block";
        } else {
            myElement.style.display = "none";
        }
    }

    // Add a click event listener to the element
    myElement1.addEventListener("click", toggleDisplay);

}
export default script;