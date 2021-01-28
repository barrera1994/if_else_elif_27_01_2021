let a=50;
let b=100;

console.log("let a="+a);
console.log("let b="+b);

if(a>b){
    console.log("a>b");
}else if(a<b){
    console.log("a<b");
}else if(a==b){
    console.log("a==b");
}else{
    console.log("entro por else");
}

 a=100;
 b=100;

console.log("let a="+a);
console.log("let b="+b);

if(a>b && b>a){
    console.log("a>b && b>a");
}else if(a==b || !(a>=b)){
    console.log("a==b || !(a>=b)");
}else{
    console.log("entro por else");
}