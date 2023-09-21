function dataType (name) {
  console.log(typeof (name));
  if (typeof name == 'string' || typeof name == 'number') {
    console.log(name);
  }
  else {
    console.log('Parameter is not suitable for printing');
  }
}
dataType(18)
