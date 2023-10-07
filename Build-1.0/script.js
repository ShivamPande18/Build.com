document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("dreamProductForm");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        // You can add code here to handle the form submission, e.g., sending data to a server.
        alert("Form submitted!");
    });
});
