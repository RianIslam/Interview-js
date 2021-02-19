var myVar = true;
if (myVar){
    console.log("i am truthy")
}
else{
    console.log("i am falsy")
}

// "" = falsy
var myVar = "";
if (myVar){
    console.log("i am truthy")
}
else{
    console.log("i am falsy")
}

//  if null,0,false,undefined,NaN = falsy

var myVar = null;
if (myVar){
    console.log("i am truthy")
}
else{
    console.log("i am falsy")
}