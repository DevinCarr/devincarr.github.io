var key = 'COUNTER_KEY',
    count = document.getElementById('countText'),
    counterButton = document.getElementById('counterButton'),
    resetButton = document.getElementById('resetButton');

localforage.setDriver([
  localforage.INDEXEDDB,
  localforage.WEBSQL,
  localforage.LOCALSTORAGE
  ]).then(function() {
    console.log('Using:' + localforage.driver());
    localforage.getItem(key).then(function(readValue) {
      count.innerHTML = readValue; 
      console.log('Read: ', readValue);
    }).catch(function(err) {
      localforage.setItem(key, 0).then(function() {
        console.log('Set: ' + 0);
	count.innerHTML = 0;
      });
      console.log("Error:");
      console.log(err);
    });
});

counterButton.addEventListener('click', function(event) {
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

resetButton.addEventListener('click', function(event) {
  localforage.setItem(key,0).then(function(readValue) {
    count.innerHTML = 0; 
    console.log('Reset value');
  }).catch(function(err) {
    console.log('Error: ', err);
  });
});

