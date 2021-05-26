var firstName= prompt("Enter your first name","Majid");
var lastName=prompt("Enter your last name","Shahid");

var fullName = firstName + " "+lastName;
document.write(fullName + "<br>")


var  mobile=prompt("Enter your favorite mobile phone modle","iphone x " );
 document.write("your favorite phone : " +mobile + " "+"<br>");
 document.write("lenght of string : " + mobile.length)


var a = "pakistani";
document.write("string : " + a + "<br>");
document.write( "index of 'n' : "+a.indexOf("n") +"<br>"+"<br>"+"<br>")



var a = "hello world";
document.write("string : " + a + "<br>");
document.write( "lastIndex of 'l' : "+a.lastIndexOf("l" ) + "<br>"+"<br>"+"<br>")





var a = "pakistani";
document.write("string : " + a + "<br>");
document.write( "character at index  3 : "+a.charAt(3) +"<br>"+"<br>"+"<br>")


var hyder="HYDERABAD";
var replace = hyder.replace("HYDERABAD","Islamabad");
document.write("city : "+ hyder +"<br>");
document.write("After replaceing : "+ replace +"<br>");

var msg = "Ali & Sami are best friends . they play cricket & football together";
var and= msg.replace(/&/g,"and");
document.write(and+ "<br>");



var string = "472";
var number = Number(string);
console.log(number);
document.write("value :" + string +"<br>" + "type :"+ "string" +"<br>"+ "value :" + number +"<br>" + "type :"+ "Number" );



var lowerCase = prompt("peanuts")
var upperCase = lowerCase.toUpperCase();
document.write("user input :"+ lowerCase +"<br>");
document.write("uppercase :"+ upperCase +"<br>")


var input = prompt("ENter value");
var b = input.slice(0,1).toUpperCase()
var c = input.slice(1);
document.write("user input :"+ input + "<br>")
document.write( "title case "+b + c  + "<br>");



var  a = 35.35;
var b = a.toString();
var c = b.replace (".","")
document.write("number :"+ a + "<br>");
document.write("Result :" + c)


var usersearch= prompt("Enter your search item")
var item =["cake","apple pie" ,"cookie","chip","patties"] 
var a = usersearch.toLowerCase();
for (i=0;i<item.length;i++){
if (a==item[i]){
    alert("Avalible")
    break;
}

else{
    alert("sorry your required item is not avalible")
    break;
}
}


var password = prompt("enter your password")

if (password.length >5 && password.slice(0,1) !== 0-9 ){
    alert("ok")

}else{
    alert ("not valid")
}



var university = "University of Karachi";
for (i=0;i<university.length;i++){
    document.write(university[i]+"<br>")
}


var country= "pakistan";
var a1 = country.charAt(country.length-1);
document.write("user input : "+ country +"<br>");
document.write("last character of input : "+ a1 +"<br>" )



var para ="the quick brown fox jumps over the lazy dog";
var count=0 ;
 for (i=0;i<para.length;i++){
     if (para.slice(i,i+3) == "the"){
         count++
     
     }

 }
 document.write("text :the quick brown fox jumps over the lazy dog" + "<br>" + "there are "+ count+ " occurrences of word “the” ")