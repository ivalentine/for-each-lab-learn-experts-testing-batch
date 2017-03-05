function iterativeLog(array) {
  array.forEach((element) => {
    console.log(`${array.indexOf(element)}: ${element}`);
  })
}

function iterate(callback) {
  var names = ["Steve", "Nancy", "Amanda"]
  names.forEach(callback)
  return names
}

function doToArray(array, callback) {
  array.forEach(callback)
}
