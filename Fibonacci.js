
function fibonacciGenerator (n) {

    var fibList = [];
    if (n===1){
        fibList.push(0);
        return fibList;
    }else if (n===2){
        fibList.push(0,1);
        return fibList;
    }
    else if (n>2){
         var firstCharacter = 0;
         var lastCharacter = 1;
         fibList.push(0,1);
        for (var count=3; count<=n; count++){
            var newCharacter = firstCharacter+lastCharacter;
            firstCharacter = lastCharacter;
            lastCharacter = newCharacter;
            fibList.push(newCharacter);
        }
    }
    return fibList;
}
