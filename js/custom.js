$( "#header" ).load( "../partials/header.html", function(loaded_html) {
    document.getElementById('header').innerHTML = loaded_html;
});