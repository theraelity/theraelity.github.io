window.addEventListener("DOMContentLoaded",init);

function init(){
    var inputText = document.querySelector("#inputText");
    inputText.addEventListener("input",getVowel);
}

// This method works fine except when backspacing.
/*var vowels = ['a','e','i','o','u'];

var vowelResult = [];

function getVowel(event){
    var vowel = document.querySelector("#vowel");
    var input = event.target.value.toLowerCase();
    var lastChar = input.charAt(input.length-1);
    if(vowels.includes(lastChar)){
        vowelResult.push(lastChar);
    }
    vowel.value = vowelResult;
    console.log(vowel.value);
}*/

// This method works with backspacing too!
function getVowel(event){
    var vowel = document.querySelector("#vowel");
    var input = event.target.value.toLowerCase();
    var lastChar = input.charAt(input.length-1);

    var regexSet = input.match(/[aeiou]/g);
    if(regexSet){
        regexSet.sort();
        var str = regexSet.toString().replace(/,/g,"");
    }
    if(str){
        vowel.value = str;
    }
    else{
        vowel.value = "";
    }
    
}