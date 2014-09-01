chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({
        "currentWindow": true,
        "active": true
    }, function(tab) {
        chrome.tabs.create({
            "url": "https://developers.google.com/speed/pagespeed/insights/?url=" + encodeURIComponent(tab[0].url)
        });
    });
});
