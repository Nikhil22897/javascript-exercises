const repeatString = function(word, times) {
    
    if(times == 0){
        return "";
    }
    else if(times > 0){
        return word.repeat(times);
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
