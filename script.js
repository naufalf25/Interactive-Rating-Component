function submit() {
    if (document.getElementById('one').checked || document.getElementById('two').checked || document.getElementById('three').checked || document.getElementById('four').checked || document.getElementById('five').checked) {
        function insertCss( code ) {
            var style = document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = code;
            } else {
                style.innerHTML = code;
            }
            document.getElementsByTagName('head')[0].appendChild( style );
        }
        insertCss(
            ".rating-section {display: none;}" +
            ".thankyou-section {display: unset}"
        )
        
        var rate_value;
        if (document.getElementById('one').checked) {
            rate_value = document.getElementById('one').value;
        } else if (document.getElementById('two').checked) {
            rate_value = document.getElementById('two').value;
        } else if (document.getElementById('three').checked) {
            rate_value = document.getElementById('three').value;
        } else if (document.getElementById('four').checked) {
            rate_value = document.getElementById('four').value;
        } else if (document.getElementById('five').checked) {
            rate_value = document.getElementById('five').value;
        }
        document.getElementById("rating-user").innerHTML = rate_value;
    } else {
        document.getElementById('alert').innerHTML = "Please select one rating!";
    }
}