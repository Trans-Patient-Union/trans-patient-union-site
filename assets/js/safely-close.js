document.addEventListener('DOMContentLoaded', () => {
    var siteRedirect = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    document.getElementById("safely-close").addEventListener('click', function() {
        document.body.innerHTML = "";
        for(var i = 0; i < 9; i++) {
            // ENSURE TO CHANGE THE SITE.BASEURL MANUALLY IF YOU CHANGE THE SITE STRUCTURE
            history.pushState("random", "", "/trans-patient-union-site/assets/information.html")
        }
        window.open(siteRedirect)
        location.replace(siteRedirect)
        Event.preventDefault()
    });
});