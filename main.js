var a=prompt("Enter the string");
var c=[];
document.write("The given string is: "+a+"<br>")
var b=a.split("");
console.log(b);
for(let i=0;i<b.length;i++){
    if(b[i]=="a"||b[i]=="e"||b[i]=="i"||b[i]=="o"||b[i]=="u"){
        c.push(b[i]);
            }
}
document.write(" vowels in the string = "+c+"<br>");
document.write("Total count of vowels in the string is "+c.length);