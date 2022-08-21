
function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction () {
    const fn =()=>{}
    //function fn(){} --class function
    return fn;
}

function returnsAnAnonymousFunction() {
  return function (){}
}