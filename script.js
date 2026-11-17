
// Display current year in footer
document.addEventListener("DOMContentLoaded", function () {

    const year = new Date().getFullYear();

    document.getElementById("year").textContent = year;

});
