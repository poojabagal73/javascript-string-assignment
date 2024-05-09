function capitalize (event){
    var str =  document.getElementById("capitalize").value;
    var str1 =str.toLowerCase();

    let asciiRef = str1.charCodeAt(0);
    let newAsciiRef = asciiRef - 32;
    let newChar = String.fromCharCode(newAsciiRef);
    var result=  newChar + str1.substr(1);
    document.getElementById("strResult").innerHTML = result;
}


//capitalizeAll that capitalizes each word in a given sentence.

function capitalizeAll (event){

    var capitalizeAll = document.getElementById("capitalizeAll").value;
 
    let result = "";
    for (let i = 0; i < capitalizeAll.length; i++) {
      let char = capitalizeAll[i];     
      if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        result += String.fromCharCode(char.charCodeAt(0) - 32);
      } else {
       
        result += char;
      }
    }
      document.getElementById("capitalizeAllResult").innerHTML =result;
  }


  //function isExist that checks if a given word is part of a given string.

  function isExist(event){
    var word = document.getElementById("isExist").value;

   var str1 = "riting into an HTML element, using innerHTML Writing into an HTML using document.write()writing into an alert message using windows.alert"
    str1 =str1.toLowerCase();
   var result = str1.includes(word);
     if(result){
   document.getElementById("resultIsExist").innerHTML = "word is present id String"
     }
     else{
         document.getElementById("resultIsExist").innerHTML =  "word is not present in the String"
     }
 }
  


 // function getOccurrenceCount that finds the number of occurrences of a word/phrase in a given string.

 function getOccurrenceCount(event){
  let stringGetOccurrenceCount = document.getElementById("stringOccuranceCount").value;
  let wordGetOccurrencecount =  document.getElementById("getOccurrenceCountWord").value;
  let count = 0;
  let word = stringGetOccurrenceCount.indexOf(wordGetOccurrencecount);
  while (word != -1){
    count++;
    word = stringGetOccurrenceCount.indexOf(wordGetOccurrencecount, word+1);

  }
  document.getElementById("resultgetOccurrenceCount").innerHTML = ("Word Occurance count is:",count);
}
    

  //function wordDensity that calculates the word density of a given string. 
  //Word density is defined as (occurrenceCount / totalWords) * 100.
  function wordDensity(event){
  let stringGetOccurrenceCount = document.getElementById("stringOccuranceCount").value;
  let wordGetOccurrencecount =  document.getElementById("getOccurrenceCountWord").value;
  let count = 0;
  let wordCount=0;
  let i=0;
  let stringLength = stringGetOccurrenceCount.length-1;
  for( i= 0; i<= stringLength; i++){
    if(stringGetOccurrenceCount[i] == " "){
      count++;
    }
  }
  let word = stringGetOccurrenceCount.indexOf(wordGetOccurrencecount)
  while (word != -1){
    wordCount++;
    word = stringGetOccurrenceCount.indexOf(wordGetOccurrencecount, word+1);
  }
  var density= (wordCount / count) * 100;

   printDensity = "word Density is: ";
  console.log(printDensity);
 document.getElementById("wordDensity").innerHTML = printDensity+ density;

}




  //function getExt that extracts the file extension from a given string representing a file name. If no extension is present, return null.
  function getSelectedFile(event) {
   
    const fileInput = document.getElementById("fileInput").value;
    console.log(fileInput);
  
    const fileExtentionIS = fileInput.slice(fileInput.lastIndexOf(".")); 
    document.getElementById("fileExtension").innerHTML = fileExtentionIS;
  }
 
  //Removing Whitespace

  function removewhiteSpaces(event){
    const str = document.getElementById("removewhiteSpaces").value;
   const result= str.replace(/\s/g, "");
   document.getElementById("whiteSpacesRemoved").innerHTML = result;
  }

  //function reverseWords

  function reverseWords(event){
    const word = document.getElementById("reverseWords").value;
    let length = word.length;
    var reverceWordResult ="";
  
    for(var i = length; length>= -1; i--){
      reverceWordResult = reverceWordResult+ word[i];
  
    }
  
    document.getElementById("result").innerHTML = reverceWordResult;
  }
  
  //function countVowels

  function countVowels(event){
    var str = document.getElementById("countVowels").value;
   var length =str.length;
   var count =0;
 
   for(i=0; i<=length; i++){
     if(str[i]=="a" || str[i] == "A" || str[i]=="e" || str[i]=="E" || str[i] == "i" || str[i]=="I" || str[i]=="o" || str[i]=="O" || str[i]== "v" || str[i]=="V"){
       count++;
     }
 
   }
 
   document.getElementById("countVowelsResult").innerHTML = count;
 


  }


  //function isPalindrome

  function isPalindrome(event){
    
    const str = document.getElementById("isPalindrome").value;
    let length = str.length;
    var reverceWordResult ="";
  
    for(var i = length; length>= -1; i--){
      reverceWordResult = reverceWordResult+ str[i];
    }
  
    if(str == reverceWordResult){
      document.getElementById("isPalindromeResult").innerHTML = "String is palindrome";
    }
    else
    {
      document.getElementById("isPalindromeResult").innerHTML = "String is not Palindrome";
    }
  
  }

  // function truncateString that truncates a given string to a specified length and appends an ellipsis ("...").

  function truncateString(){
    const string1 = document.getElementById("truncateString").value;
  let truncateNumber = document.getElementById("truncateNumber").value;
   let resultString ="";
  if(Number(truncateNumber) !== NaN){
      for(let i =0; i<=truncateNumber-1; i++){
          resultString= resultString+string1[i];
      }
      resultString=resultString+"...";
  }
  else{
      console.log("enter number");
  }
  console.log(truncateNumber);
  document.getElementById("truncateStringResult").innerHTML =resultString;
  }

//validateEmail
  function validateEmail(){
    let email = document.getElementById("validateEmail").value;
    var re = /\S+@\S+\.\S+/;
    if(re.test(email)){
      document.getElementById("validateEmailResult").innerHTML ="email id valid";

    }
    else{
      document.getElementById("validateEmailResult").innerHTML = "Email is not valid";
    }
  }


//maskString
function maskString(){
 let str = document.getElementById("maskString").value;

 console.log(str);

let result = "";

for (let i=0; i<= str.length-4; i++){
    result = result+"*";

    

}

for(let j=str.length-4; j<=str.length-1;j++){
    result=result+str[j]
    
}


document.getElementById("maskStringResult").innerHTML =result;


}
    
