function palindrome(str) {
    //remove all special signs
    let cleanStr = str.replace(/\W|_/g,"").toLowerCase();
  //create new reversed str of cleanStr
    let revStr = cleanStr.split("").reverse().join("");
  //make condition for palindrome
    if(revStr === cleanStr){
      return true;
    }
    return false;
  }
  
  
  
  
  console.log(palindrome("A man, a plan, a canal. Panama"));