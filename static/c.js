(function() {
  var key = 'COUNTER_KEY',
    count = document.getElementById('countText'),
    moreButton = document.getElementById('moreButton'),
    lessButton = document.getElementById('lessButton'),
    resetButton = document.getElementById('resetButton'),
    secretButton = document.getElementById('secretButton'),
    secretText = document.getElementById('secretText');

  var lfConfig = {
    driver: [
      localforage.INDEXEDDB,
      localforage.WEBSQL,
      localforage.LOCALSTORAGE
    ],
    name: 'localforage',
    version: '2',
    storeName: 'cv2',
  };

  // Initialize Localforage
  localforage.config(lfConfig);

  // Check if the Key exists
  localforage.getItem(key).then(function(readValue) {
    if (readValue == null) {
      // if not, load it for first run
      localforage.setItem(key, 0).then(function() {
        console.log('DB new, set ' + key + ' as ' + 0);
        count.innerHTML = 0;
      });
    } else {
      // load old value into element
      count.innerHTML = readValue; 
      console.log('Read: ', readValue);
    }
  }).catch(function(err) {
    console.log("Error:");
    console.log(err);
  });

  moreButton.addEventListener('click', function(event) {
    localforage.getItem(key).then(function(readValue) {
      var value = readValue + 1;
      count.innerHTML = value; 
      return localforage.setItem(key,value);
    }).then(function() {
      console.log('Incremented value');
    }).catch(function(err) {
      console.log('Error: ', err);
    });
  });

  lessButton.addEventListener('click', function(event) {
    localforage.getItem(key).then(function(readValue) {
      var value = readValue - 1;
      if (value < 0) value = 0;
      count.innerHTML = value; 
      return localforage.setItem(key,value);
    }).then(function() {
      console.log('Decremented value');
    }).catch(function(err) {
      console.log('Error: ', err);
    });
  });

  resetButton.addEventListener('click', function(event) {
    localforage.setItem(key,0).then(function(readValue) {
      count.innerHTML = 0; 
      console.log('Reset value');
    }).catch(function(err) {
      console.log('Error: ', err);
    });
  });

  secretButton.addEventListener('click', function(event) {
    secretText.innerHTML = "driver: \"" + localforage.driver() + "\", name: \"" + lfConfig.storeName + "\", key: \"" + key + "\"";
  });
})();

