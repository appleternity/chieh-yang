$(document).ready(function() {
    console.log("Hello");

    $(document).on("click", "paper", function(evt) {
        window.open($(evt.target).attr("href"), '_blank');
    });

    
    $(document).on("click", "publisher", function(evt) {
        window.open($(evt.target).attr("href"), '_blank');
    });

});
