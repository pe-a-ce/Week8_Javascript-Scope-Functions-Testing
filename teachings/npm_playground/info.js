// to use code from a package we need to add it to our own using the 'require' keyword.
// si is a variable name we chose
const si = require('systeminformation');

//to print our battery status we can add the following line:
si.battery().then(data => console.log(data));

//since we aren't concerned with how the battery() method is getting hold of this info,
//that's why we used a package to add it. By adding packages to our code in this way we
// can add a huge amount of extra functionality such as this without duplicating the work of others.