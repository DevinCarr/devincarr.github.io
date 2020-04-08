(function() {
  'use strict';
  const key = 'COUNTER_KEY',
    count = document.getElementById('countText'),
    moreButton = document.getElementById('moreButton'),
    lessButton = document.getElementById('lessButton'),
    resetButton = document.getElementById('resetButton'),
    secretButton = document.getElementById('secretButton'),
    secretText = document.getElementById('secretText');

  const lfConfig = {
    driver: [
      localforage.INDEXEDDB,
      localforage.WEBSQL,
      localforage.LOCALSTORAGE
    ],
    name: 'localforage',
    version: '2',
    storeName: 'cv2',
  };

  let debugToggle = false;

  // Initialize Localforage
  localforage.config(lfConfig);

  // Check if the Key exists
  localforage.getItem(key).then(readValue => {
    if (readValue == null) {
      // if not, load it for first run
      localforage.setItem(key, 0).then(() => {
        // console.log('DB new, set ' + key + ' as ' + 0);
        count.innerHTML = 0;
      });
    } else {
      // load old value into element
      count.innerHTML = readValue; 
    }
  }).catch(err => {
    console.log("Error:");
    console.log(err);
  });

  moreButton.addEventListener('click', event => {
    localforage.getItem(key).then(readValue => {
      var value = readValue + 1;
      count.innerHTML = value; 
      return localforage.setItem(key,value);
    }).then(() => {
      // console.log('Incremented value');
    }).catch(err => {
      console.log('Error: ', err);
    });
  });

  lessButton.addEventListener('click', event => {
    localforage.getItem(key).then(readValue => {
      var value = readValue - 1;
      if (value < 0) value = 0;
      count.innerHTML = value; 
      return localforage.setItem(key,value);
    }).then(() => {
      // console.log('Decremented value');
    }).catch(err => {
      console.log('Error: ', err);
    });
  });

  resetButton.addEventListener('click', event => {
    localforage.setItem(key,0).then(readValue => {
      count.innerHTML = 0; 
      // console.log('Reset value');
    }).catch(err => {
      console.log('Error: ', err);
    });
  });

  secretButton.addEventListener('click', event => {
    if (debugToggle == false) {
      secretText.innerHTML = "driver: \"" + localforage.driver() + "\", name: \"" + lfConfig.storeName + "\", key: \"" + key + "\"";
      debugToggle = true;
    } else {
      secretText.innerHTML = "";
      debugToggle = false;
    }
  });

// Setup Service Worker for PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/c/sw.js').then(registration => {
        // Registration was successful
      }, err => {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
})();

