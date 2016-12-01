function onGrayscaleChange(event) {
  var _value = event.target.value;
  
  chrome.storage.sync.set({'grayscale': _value}, function() {
    console.log("'Grayscale saved: %s", _value);
  });
}

function onSepiaChange(event) {
  var _value = event.target.value;
  
  chrome.storage.sync.set({'grayscale': _value}, function() {
    console.log("'Sepia saved: %s", _value);
  });
}

  function onContrastChange(event) {
  var _value = event.target.value;
  
  chrome.storage.sync.set({'grayscale': _value}, function() {
    console.log("'Contrast saved: %s", _value);
  });
}

document.getElementById("grayscale").addEventListener('change', onGrayscaleChange);
document.getElementById("sepia").addEventListener('change', onSepiaChange);
document.getElementById("contrast").addEventListener('change', onContrastChange);

