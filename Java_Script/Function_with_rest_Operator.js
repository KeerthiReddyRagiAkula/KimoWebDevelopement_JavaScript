function addNumbers(...num){
    for(index in num){
        console.log(`index= ${index} and number=${num}`);
    }
}
console.log(addNumbers(1,2,3,4,7));