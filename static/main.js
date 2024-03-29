$(document).ready(function() {
    console.log("Hello");

    var go_href = function(evt) {
        var url = $(evt.target).attr("href");
        if (url == "") {
            return;
        } else {
            window.open(url, '_blank');
        }
    }

    $(document).on("click", "paper", go_href);
    $(document).on("click", "publisher", go_href);
    $(document).on("click", "place", go_href);
    $(document).on("click", "advisor", go_href);
    $(document).on("click", "arXiv", go_href);
    $(document).on("click", "pdf", go_href);
    $(document).on("click", "slides", go_href);
    $(document).on("click", "poster", go_href);
    $(document).on("click", "github", go_href);
    $(document).on("click", "media", go_href);
    $(document).on("click", "presentation", go_href);

});
