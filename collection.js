// var word = "test one";
// var newWord ="";
// var arr = [];

// //arr[0] = "Hello";
// //arr[1] = "World";
// word.split("");
// //console.log(arr.reverse());

// for (var i = 0; i < word.length; i++) {
  
//   arr[i] = word[i];
// }

// arr.reverse();


// newWord = arr.toString();
// newWord = newWord.split(",");
// for (var i = 0; i < word.length; i++) {
//   console.log(newWord);
// }


// function reverseString(str) {
//   var word = str;
//   var newWord ="";
//   var arr = [];
//   var i =0;

//   word.split("");

//   for (i = 0; i < word.length; i++) {
//   arr[i] = word[i];
//   }

//   arr.reverse();
//   newWord = arr.toString();
//   newWord = newWord.replace(/,/g, "");

//   //newWord = newWord.split(",");
//   document.getElementById("demo").innerHTML = newWord;
//   //return newWord;
  
// }

//reverseString("hello");




// function factorialize(num) {

// var i = num;
// var result = 0;

// for (i; i > 0; i--) {
//   if(i===1){
//     num *= i;
//   }else num *= i-1 ;
  
// }


// document.getElementById("demo").innerHTML = num;

//   return num;
// }



// function palindrome(str) {
//   // Good luck!
// var newWord = "";
// var firstStr = "";
// var secondSrt = "";
// var arr = [];

// newWord = str.replace(/[^a-zA-Z0-9]/g, "");
// firstStr = newWord.toLowerCase();

// newWord = firstStr;
// newWord.split("");
// for (var i = 0; i < newWord.length; i++) {
  
//   arr[i] = newWord[i];
// }

// arr.reverse();
// secondStr = arr.toString();
// secondSrt = secondStr.replace(/,/g, "");

// document.getElementById("demo").innerHTML = firstStr;
// document.getElementById("demo1").innerHTML = secondSrt;

// if(firstStr === secondSrt ){
// document.getElementById("demo2").innerHTML = "true";
// return true;
// } else {
// document.getElementById("demo3").innerHTML = "false";
// return false;
// }

  
  //return true;
//}

// function findLongestWord(str) {

//   var word ="";
//   var i =0;
//   var arr =[];

//   word = str.split(" ");

//   for (i; i < word.length; i++) {
//     arr[i] = word[i].length;
//   }

//   var num = Math.max.apply(null, arr);

// document.getElementById("demo").innerHTML = "num";
//   //return str.length;
// }


// function titleCase(str) {

//   var arr =[];
//   var word ="";
//   var newWord ="";
//   word = str.toLowerCase();
//   word = word.split(" ");

//   for (var i =0; i < word.length; i++){
//     var cWord = word[i].charAt(0).toUpperCase();

//     for (var j = 0; j < word[i].length; j++) {
//       cWord += word[i].charAt(j+1);
//     }

    
//     arr[i] = cWord;

//     newWord = arr.toString();
//     newWord = newWord.replace(/,/g, " ");
//   }

//   document.getElementById("demo").innerHTML = newWord;
//   //return str;
// }



// function largestOfFour(arr) {
//   // You can do this!
//   var arr1 =[];
//   var num =0;
  
//   for (var i = 0; i < arr.length; i++) {
//     arr1[i] = Math.max.apply(null,arr[i]);
//   }
  

//   document.getElementById("demo").innerHTML = arr1;
//   //return arr;
// }


// function confirmEnding(str, target) {
//   // "Never give up and good luck will find you."
//   // -- Falcor
//   var letra = str;
//   var num= str.length-1;
//   var firstSrt = "";
//   var word = "";
//   var secondSrt = "";
//   var newWord = "";
//   letra = str.substr(num);
//   //if(letra === target) return true;
//   //else return false;  

//   firstSrt = str.split("");
//   firstSrt.reverse();
//   word = firstSrt.toString();
//   word = word.replace(/,/g, "");
//   secondSrt = target.split("");
//   secondSrt.reverse();
//   newWord = secondSrt.toString();
//   newWord = newWord.replace(/,/g, "");


//   for (var i = 0; i < newWord.length; i++) {
//     if(word.substring(i, i+1)!== newWord.substring(i, i+1)){
//       return false;
//     }
//   }
//   return true;
//   document.getElementById("demo").innerHTML = letra;
//   //return str;
// }

// function repeatStringNumTimes(str, num) {
//   // repeat after me
//   var word = "";
//   if(num>0){
//   for(var i =0; i < num; i++){
//     word += str;
//   }
//   } else return word;   
//   return word;
//   document.getElementById("demo").innerHTML = word;
//   //return word;
// }

// function truncateString(str, num) {
//   // Clear out that junk in your trunk

// var word ="";

// if(num <=3){
//   word = str.substring(0, num);
//   word += "...";
// }else if(str.length > num){
//   word = str.substring(0, num - 3);
//   word += "...";
// } else word =str;


// document.getElementById("demo").innerHTML = word;
//  // return str;
// }

// function chunkArrayInGroups(arr, size) {
//   var size = size;
//   var arr = arr;
//   var finalArr = [];

//   for (var i = 0; i <= arr.length; i++) {
//     var arr1= [];
//     if(arr.length < size){
//       size = arr.length;
//     }
//     for (var j = 0; j < size; j++) {
      
      
//       arr1.push(arr.shift());
      
//     }
//     finalArr.push(arr1);
//     i = 0;
//   }

//   document.getElementById("demo").innerHTML = finalArr;
//   //return arr;
// }

// function mutation(arr) {
//   var arr1=[];
//   var word ="";
//   var result ="";

//   word = arr[1].toString();
//   word= word.toLowerCase();
//   arr1 = word.split("");

//   word = arr[0].toString();
//   word= word.toLowerCase();
  


//   for (var i = 0; i < arr1.length; i++) {
//     var n = word.indexOf(arr1[i]);
//     if(n === -1){
//       result = false;
//     }else result = true;
//   }

//   document.getElementById("demo").innerHTML = result;
//   //return arr;
// }

// function bouncer(arr) {
//   // Don't show a false ID to this bouncer.

//   var bouncer = arr;
//   bouncer = bouncer.filter(Boolean);

//   document.getElementById("demo").innerHTML = bouncer;
//   //return arr;
// }


// function destroyer(arr, par1, par2) {
//   // Remove all the values
//   var o = {
//     par1 : par1,
//     par2 : par2,
//     par3 : par3
//   };

//   var destroyer = arr;
//   destroyer = destroyer.filter(destroy, o);

//   document.getElementById("demo").innerHTML = destroyer;
//   //return arr;
// }

// function destroy(element){
// return element !== this.par1 && element !== this.par2;
// }

//destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.
//   var index = 0;
//   arr.push(num);
//   arr.sort(function(a, b){return a-b;});

//   index = arr.indexOf(num);
//   document.getElementById("demo").innerHTML = index;
//   //return index;
// }

//getIndexToIns([40, 60], 50);

//function rot13(str) { // LBH QVQ VG!
//  
//  var arr = [];
//  var arr1 = [];
//  arr = str.split("");
//
//for (var i = 0; i < str.length; i++) {
//  arr1[i] = str.charCodeAt(i);
//}
//for (var j = 0; j < arr1.length; j++) {
//  if(arr1[j]+13 > 90){
//    var placement = ((((90 - arr1[j])-13)*(-1))+64);
//    arr[j] = String.fromCharCode(placement);
//  }else if(arr1[j] < 65){
//    arr[j] = String.fromCharCode(arr1[j]);
//  } else arr[j] = String.fromCharCode(arr1[j]+13);
//  
//}
//
//
//  str = arr.toString();
//  str = str.replace(/,/g, "");
//  document.getElementById("demo").innerHTML = str;
//  //return str;
//}

// Change the inputs below to test
// rot13("SERR PBQR PNZC");

//            var n = 0;
//            
//            var result = 0;
//            var numArray = [10, 5];
//            var first = Math.min(...numArray);
//            var next = 0;
//            
//            
//                n = Math.max(...numArray);
//            next = first +1;
//            for (var i = Math.min(...numArray); i < n; i++) {
//                result = first + next;
//                first = result;
//                next++;
//            }
//            $(document).ready(function (){
//              $('p').html(first);  
//            });
//            var arr1 = [];
//            var arr2 = ["snuffleupagus", "cookie monster", "elmo"];
//            var arr3 = [];
//            var newArr = [];
//            
//            var first = '';
//            var i;
//
//            if (arr1.length === 0) {
//                newArr.push(arr2);
//                
//                        $('p').html(newArr);
//            } else if (arr2.length === 0) {
//                newArr.push(arr1);
//                $('p').html(newArr);
//            } else {
//                arr3 = arr1.concat(arr2);
//
//                for (i = 0; i < arr3.length; i++) {
//                    if (arr1.indexOf(arr3[i])=== -1) {
//                        newArr.push(arr3[i]);
//                    }
//                }
//                for (i = 0; i < arr3.length; i++) {
//                    if (arr2.indexOf(arr3[i])=== -1) {
//                        newArr.push(arr3[i]);
//                    }
//                }
//
//                $(document).ready(function () {
//                    for (i = 0; i < newArr.length; i++){
//                        first += " "+newArr[i];
//                        $('p').html(first);
//                    }
//                    
//                });
//
//            }


//            function diffArray(arr1, arr2) {
//
//                var arr3 = [];
//                var newArr = [];
//                var i;
//
//                if (arr1.length === 0) {
//                    for (i = 0; i < arr2.length; i++){
//                        newArr.push(arr2[i]);
//                    }
//                    
//                    return newArr;
//                } else if (arr2.length === 0) {
//                    for (i = 0; i < arr1.length; i++){
//                        newArr.push(arr1[i]);
//                    }
//                    
//                    return newArr;
//                } else {
//                    arr3 = arr1.concat(arr2);
//
//                    for (i = 0; i < arr3.length; i++) {
//                        if (arr1.indexOf(arr3[i]) === -1) {
//                            newArr.push(arr3[i]);
//                        }
//                    }
//                    for (i = 0; i < arr3.length; i++) {
//                        if (arr2.indexOf(arr3[i]) === -1) {
//                            newArr.push(arr3[i]);
//                        }
//                    }
//
//                    return newArr;
//                }
//
//            }

//             var result = diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);

//            function convertToRoman(num) {
//                var I = 1;
//                var V = 5;
//                var X = 10;
//                var L = 50;
//                var C = 100;
//                var D = 500;
//                var M = 1000;
//                var arr1 = [];
//                var digits = [];
//                while (num > 0) {
//                    digits[digits.length] = num % 10;
//                    num = parseInt(num / 10);
//                }
//                if (digits[1] !== 0) {
//                    digits[1] = digits[1] * 10;
//                } if (digits[2] !== 0) {
//                    digits[2] = digits[2] * 100;
//                } if (digits[3] !== 0) {
//                    digits[3] = digits[3] * 1000;
//                }
//
//                for (var i = 0; i < digits.length; i++) {
//                    switch (digits[i]) {
//                        case 1:
//                            arr1[i] = "I";
//                            break;
//                        case 2:
//                            arr1[i] = "II";
//                            break;
//                        case 3:
//                            arr1[i] = "III";
//                            break;
//                        case 4:
//                            arr1[i] = "IV";
//                            break;
//                        case 5:
//                            arr1[i] = "V";
//                            break;
//                        case 6:
//                            arr1[i] = "VI";
//                            break;
//                        case 7:
//                            arr1[i] = "VII";
//                            break;
//                        case 8:
//                            arr1[i] = "VIII";
//                            break;
//                        case 9:
//                            arr1[i] = "IX";
//                            break;
//                        case 10:
//                            arr1[i] = "X";
//                            break;
//                        case 20:
//                            arr1[i] = "XX";
//                            break;
//                        case 30:
//                            arr1[i] = "XXX";
//                            break;
//                        case 40:
//                            arr1[i] = "XL";
//                            break;
//                        case 50:
//                            arr1[i] = "L";
//                            break;
//                        case 60:
//                            arr1[i] = "LX";
//                            break;
//                        case 70:
//                            arr1[i] = "LXX";
//                            break;
//                        case 80:
//                            arr1[i] = "LXXX";
//                            break;
//                        case 90:
//                            arr1[i] = "XC";
//                            break;
//                        case 100:
//                            arr1[i] = "C";
//                            break;
//                        case 200:
//                            arr1[i] = "CC";
//                            break;
//                        case 300:
//                            arr1[i] = "CCC";
//                            break;
//                        case 400:
//                            arr1[i] = "CD";
//                            break;
//                        case 500:
//                            arr1[i] = "D";
//                            break;
//                        case 600:
//                            arr1[i] = "DC";
//                            break;
//                        case 700:
//                            arr1[i] = "DCC";
//                            break;
//                        case 800:
//                            arr1[i] = "DCCC";
//                            break;
//                        case 900:
//                            arr1[i] = "CM";
//                            break;
//                        case 1000:
//                            arr1[i] = "M";
//                            break;
//                        case 2000:
//                            arr1[i] = "MM";
//                            break;
//                        case 3000:
//                            arr1[i] = "MMM";
//                            break;
//                    }
//                }
//
//
//
//
//
//                arr1.reverse();
//                var word = arr1.join('');
//
//
//                digits.reverse();
//
//
//
//
//
//
//                return word;
//            }
//
//            var result = convertToRoman(2014);


//            console.log(word);

//function whatIsInAName(collection, source) {
//                
//                // What's in a name?
//
//                 var arr = [];
//
//                // Only change code below this line
//                var o;
//                var indices = [];
//                var elem;
//                var element;
//                var p;
//
//                for ( p in source) {
//                    indices.push(false);
//                }
//
//                element = "";
//                var a = 0;
//                for (var i = 0; i < collection.length; i++) {
//                    o = collection[i];
//
//                    for ( p in o) {
//                        elem = p;
//
//                        for (var q in source) {
//                            
//                                element = q;
//                                if ((elem === element) && (o[elem] === source[element])) {
//
//                                    indices[a] = true;
//                                    a++;
//                                   
//
//                                }
//
//                            
//
//                        }
//                    }
//                    if (indices[indices.length-1] === true) {
//                        arr.push(o);
//                        indices = [];
//                        for ( p in source) {
//                            indices.push(false);
//                        }
//                        a = 0;
//                    } else {
//                        indices = [];
//                        for ( p in source) {
//                            indices.push(false);
//                        }
//                        a = 0;
//                    }
//
//                }
//
//                
//
//                // Only change code above this line
//                console.log(arr);
//                return arr;
//
//            }
//             
//            whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
//    //            whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }); //[{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
//    //            whatIsInAName([{"a": 1, "b": 2}, {"a": 1}, {"a": 1, "b": 2, "c": 2}], {"a": 1, "c": 2}); // [{ "a": 1, "b": 2, "c": 2 }]
//                

//function myReplace(str, before, after) {
//                var afterW = "";
//                afterW = after;
//                var newWord = '';
//
//                var testForCapital = /[A-Z]/.test(before); // .test() is used to test RegEx
//
//                if (testForCapital) {
//
//
//                    newWord = afterW.charAt().toUpperCase();
//                    newWord += after.slice(1);
////            
//                } else
//                    newWord = after;
//                var re = before;
//
//                var newStr = str.replace(re, newWord);
//                console.log(newStr);
//
//                return str;
//            }
//
//            myReplace("His name is Tom", "Tom", "john");

//function translatePigLatin(str) {
//                var holder = [];
//                var word = str.split("");
//                var afterWord = "";
//                var wordBol;
//                var secondWordArray = str.split("");
//
//                for (var i = 0; i < secondWordArray.length; i++) {
//
//                    wordBol = /[aeiouy]/i.test(secondWordArray[i]);
//                    if (wordBol && holder[0] === undefined) {
//                        word.push("way");
//                        afterWord += word.join('');
//                        return afterWord;
//                    }
//                    if (wordBol === false) {
//
//                        holder.push(word[0]);
//                        word.shift();
//                        word.push(holder[i]);
//
//                    } else {
//                        word.push("ay");
//                        afterWord += word.join('');
//                        return afterWord;
//                    }
//                }
//
//
//                console.log(word);
//                return str;
//            }
//
//            translatePigLatin("blade");
//function pairElement(str) {
//                var firstArr = str.split("");
//                var finalArr =[];
//
//                for (var i = 0; i < firstArr.length; i++) {
//                    switch (firstArr[i]) {
//                        case 'A':
//                            var newArr = [];
//                            newArr.push(firstArr[i]);
//                            newArr.push("T");
//                            finalArr.push(newArr);
//                            break;
//                        case 'T':
//                            var newArr = [];
//                            newArr.push(firstArr[i]);
//                            newArr.push("A");
//                            finalArr.push(newArr);
//                            break;
//                        case 'C':
//                            var newArr = [];
//                            newArr.push(firstArr[i]);
//                            newArr.push("G");
//                            finalArr.push(newArr);
//                            break;
//                        case 'G':
//                            var newArr = [];
//                            newArr.push(firstArr[i]);
//                            newArr.push("C");
//                            finalArr.push(newArr);
//                            break;    
//                        
//                    }
//                }
//
//                console.log(finalArr);
//                return finalArr;
//            }
//
//            pairElement("GCG");
//function fearNotLetter(str) {
//                var previousCharNum = str.charCodeAt(0);
//                var charNum = 0;
//                var missingChar;
//
//                for (var i = 0; i < str.length; i++) {
//
//                    charNum = str.charCodeAt(i);
//                    if (charNum !== previousCharNum) {
//                        if (charNum !== (previousCharNum + 1)) {
//                            missingChar = String.fromCharCode((previousCharNum + 1));
//                            return missingChar;
//                        }
//                        previousCharNum = previousCharNum + 1;
//                    }
//
//                }
//                return undefined;
//            }
//
//            fearNotLetter("abce");

//function booWho(bool) {
//  // What is the new fad diet for ghost developers? The Boolean.
//  if (typeof(bool) === "boolean"){
//    return true;
//  } else return false;
//  
//}
//
//booWho(null);
//function uniteUnique(arr) {
//                var lastArr = [];
//                for (var arg = 0; arg < arguments.length; ++arg) {
//                    lastArr.push(arguments[arg]);
//
//                }
//                var flattened = lastArr.reduce(function (a, b) {
//                    return  a.concat(b);
//                }, []);
////                flattened = flattened.sort(function (a, b) {
////                    return a - b;
////                });
//                
//                var unique = flattened.filter(function (elem, index, self) {
//                return index === self.indexOf(elem);
//            });
//                
//            }
//            
//
//            uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//function convertHTML(str) {
//                // &colon;&rpar;
//
//                return String(str).replace(/&/g, '&amp;')
//                        .replace(/</g, '&lt;')
//                        .replace(/>/g, '&gt;')
//                        .replace(/"/g, '&quot;')
//                        .replace(/'/g,'&apos;');
//
//
//            }
//
//            convertHTML("Dolce & Gabbana");

//function spinalCase(str) {
//                // "It's such a fine line between stupid, and clever."
//                // --David St. Hubbins
//                
//
////}
//                var newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2')
//                .replace(/\s/ig, '-')
//                .replace(/_/ig, '-');
//                newStr = newStr.toLowerCase();
//                return newStr;
//            }
//
//            spinalCase("AllThe-small Things");

//function sumFibs(num) {
//                
//                
//                var rule = 0;
//                var oddNum = 0;
//                var i = 0;
//                var actual = 0; 
//                var previous = 0;
//                
//                
//                while (rule <= num){
//                    if ((rule % 2) !==0) {
//                        oddNum += rule;
//                    }
//                    if(i === 1){
//                        actual = 1;
//                    }
//                    if(i === 2){
//                        previous = 0;
//                    }
//                    rule = actual + previous;
//                    previous = actual;
//                    actual = rule;
//          
//                i++;
//                
//            }
//                alert(oddNum);
//                return oddNum;
//            }
//            
//            sumFibs(75024);
//function sumPrime(value) {
//                var result = 0;
//                var primes = [];
//                for (var i = 2; i <= value; i++) {
//                    primes[i] = true;
//                }
//                var limit = Math.sqrt(value);
//                for (var i = 2; i <= limit; i++) {
//                    if (primes[i] === true) {
//                        for (var j = i * i; j < value; j += i) {
//                            primes[j] = false;
//                        }
//                    }
//                }
//                for (var i = 2; i <= value; i++) {
//                    if (primes[i] === true) {
//                        result += i;
//                        console.log(i + " " + primes[i]);
//                    }
//                }
//                console.log("Prime sum equals: " + result);
//            }
//
//            sumPrime(977);
//function leastCommonMultiple(arr) {
//                var min;
//                var max;
//                if(arr[0] > arr[1]){
//                    min = arr[1];
//                    max = arr[0];
//                } else {
//                    min = arr[0];
//                    max = arr[1];
//                }
//                
//                function range(min, max) {
//                    var arr = [];
//                    for (var i = min; i <= max; i++) {
//                        arr.push(i);
//                    }
//                    return arr;
//                }
//
//                function gcd(a, b) {
//                    var c = !b ? a : gcd(b, a % b);
//                    return c;
//                }
//
//                function lcm(a, b) {
//                    var d = (a * b) / gcd(a, b);
//                    return d;
//                }
//
//                var multiple = min;
//                range(min, max).forEach(function (n) {
//                    multiple = lcm(multiple, n);
//                });
//                
//                console.log(multiple);
//                return multiple;
//                
//            }
//
//            leastCommonMultiple([23, 18]);

// Conditional (ternary) operator
//function greater(a, b) {
//    var z =  a < b ? a : b; 
//    console.log(z);
//}
//
//greater(10,5);


//            function findElement(arr, func) {
//                var num = undefined;
//                num = arr[arr.findIndex(func)];
//                return num;
//
//
//            }
//            findElement([1, 3, 5, 9], function (num) {
//                return num % 2 === 0;
//            });

//function dropElements(arr, func) {
//                // Drop them elements.
//
//                var i = 0;
//                var a = arr;
//                while (!func(arr[i])) {
//                    arr.shift();
//                    a = arr;
//                }
//                return a;
//            }
//
//            dropElements([1, 2, 3], function(n) {return n > 0;});
//            Recursion programming
//var factorial = function (number) {
//                if (number <= 0) { // terminal case
//                    return 1;
//                } else { // block to execute
//                    return (number * factorial(number - 1));
//                }
//            };
//            console.log(factorial(6));

//using global variables
//var lastArr;
//var origArr;
//function steamrollArray(arr) {
//                // I'm a steamroller, baby
//
//                
//                var max= arr.length;
//                var i;
//                
//                if(lastArr === undefined){
//                    lastArr = [];
//                }
//                if(origArr === undefined){
//                    origArr = arr;
//                }
//                
//                for (i = 0; i < max; i++) {
//                    if (Array.isArray(arr[i])) {
//                        return steamrollArray(arr[i]);
//                    } else {
//                        lastArr.push(arr[i]);
//                        
//                        if(arr.length === 1){
//                            arr.shift();
//                        }else {
//                            if(!Array.isArray(arr[0])){
//                                arr.shift();
//                            }
//                            i = -1;
//                            
//                        }
//                        
//                    }
//                }
//                origArr.shift();
//                for (var j = 0; j < origArr.length; j++) {
//                    if (Array.isArray(origArr[j])) {
//                        return steamrollArray(origArr[j]);
//                    }
//                }
//
//
//                return lastArr;
//            }
//
//            console.log(steamrollArray([1, {}, [3, [[4]]]]));
//using recursion
//function steamrollArray(arr) {
//                // I'm a steamroller, baby
//                var a = arr.reduce(function (a, b) {
//                    return a.concat(b);
//                }, []);
//                for (var i = 0; i < a.length; i++) {
//                    if (Array.isArray(a[i])) {
//                        return steamrollArray(a);
//                    }
//                }
//                return a;
//            }
//
//            console.log(steamrollArray([1, [2], [3, [[4]]]]));
//function binaryAgent(str) {
//  var arr = str.split(" ");
//  var finalWord = "";
//  for (var i = 0; i < arr.length; i++) {
//    var letter = String.fromCharCode(parseInt(arr[i], 2));
//               finalWord += letter;
//               
//           }
//  
//  return finalWord;
//}
//
//binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//function truthCheck(collection, pre) {
//                // Is everyone being true?
//                var arr = arguments[0];
//                
//                var value;
//                var bool = true;
//
//                for (var i = 0; i < arr.length; i++) {
//                    value = arr[i][pre];
//                    if (!value) {
//                        bool = false;
//                    }
//
//                }
//                console.log(bool);
//                return bool;
//            }
//
//            truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
//function addTogether() {
//
//                var x;
//                var result;
//
//                if (arguments.length === 1) {
//                    x = isItNum(arguments[0]);
//                    if (!x)
//                        return undefined;
//                    return function (y) {
//                        y = isItNum(arguments[0]);
//                        result = isItNum(x + y);
//                        return result;
//                    };
//                } else {
//                    x = isItNum(arguments[0]) + isItNum(arguments[1]);
//                    result = isItNum(x);
//                    return result;
//                }
//
//                function isItNum(arg) {
//                    if (!arg) {
//                        return undefined;
//                    } else if (typeof arg === "number") {
//                        return arg;
//                    } else {
//                        return undefined;
//                    }
//
//                }
//
//            }
//
//            addTogether("http://bit.ly/IqT6zt");

//How to round a number (without using .toFixed() or Math.round())
//var round = function(text, pos) {
//    function setCharAt(str,index,chr) {
//       if(index > str.length-1) return str;
//        return str.substr(0,index) + chr + str.substr(index+1);
//    }
//    if (text.length > pos) {
//        for (i=1;i<text.length;i++){
//            if (text[i] === ".") {
//                i = text.length;
//                if (parseFloat(text[pos],10) >= 5) {
//                    text = (setCharAt(text,pos-1,((parseFloat(text[pos-1],10))+1).toString(10))).substr(0,pos);
//                } else {
//                    text = text.substr(0,pos);
//                }
//            } 
//        }
//    }
//    return text;
//};
