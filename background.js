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
    /*
    for (key in changes) {
        var storageChange = changes[key];
        console.log('Storage key "%s" in namespace "%s" changed. ' +
                    'Old value was "%s", new value is "%s".',
                    key,
                    namespace,
                    storageChange.oldValue,
                    storageChange.newValue);
    }
    
    chrome.tabs.executeScript({
        code: "document.body.style.filter = 'blur(0px) saturate(0%) brightness(100%) grayscale(" + changes["grayscale"] + "%) contrast(" + changes["contrast"] + "%) sepia(" + changes["sepia"] + "%)'"
    });

    */
});