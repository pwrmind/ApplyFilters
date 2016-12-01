function applyFilters(tab) {
    console.log("Filters were applied...");
    chrome.tabs.executeScript({
        code: 'document.body.style.filter ="blur(0px) saturate(0%) brightness(100%) grayscale(100%) contrast(100%) sepia(30%)"'
    });
}

chrome.tabs.onActivated.addListener(applyFilters);
chrome.tabs.onCreated.addListener(applyFilters);
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, currentTab) {
    if (changeInfo.status == "complete") {
        applyFilters(currentTab);
    }
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
    var grayscale = (changes["grayscale"] || {}).newValue || 100;
    var contrast = (changes["contrast"] || {}).newValue || 100;
    var sepia = (changes["sepia"] || {}).newValue || 30;

    chrome.tabs.executeScript({
        code: "document.body.style.filter = 'blur(0px) saturate(0%) brightness(100%) grayscale(" + grayscale + "%) contrast(" + contrast + "%) sepia(" + sepia + "%)'"
    });

    console.log("Filters were applied...");
});