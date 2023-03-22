function receivesAFunction(myFunction){
    return myFunction();
}

receivesAFunction(function () {return ""});

function returnsANamedFunction(){
    return function name(){return ''}
}

function returnsAnAnonymousFunction(){
    return function (){
        return ''
    }
}
  