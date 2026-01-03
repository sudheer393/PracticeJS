//Addition

function add(a,b) {
    const x = a+b;
    console.log('add :'+ x);
}
add(10,10)

//Substraction 

function sub(c,d){
    const y = c-d;
    console.log("sub :"+ y);
}

sub(20,10)

//Multiplication

function mul (e,f){
    const z = (e*f);
    console.log("mul :"+ z)
}

mul(3,5)

//Division

function div (l,m){
    const n = (l/m);
    console.log("div:"+n);
}
div (10,2)

//Area of circle

function AOC (r){
    const A =(3.14*r*r);
    console.log("Area of Circle :"+ A);
}
AOC(2)

//Area of Rectangle

function AOR (w,l){
const A = (w*l);
console.log("Area of Rectangle : "+A);
}
AOR (2,3)

//Area of cylinder A=2πrh+2πr2
function AOCY(r,h){
    const A= (2*3.14*r*h)+(2*3.14*r*r)
    console.log("Area of Cylinder :"+ A);
}
AOCY(3,5)


//Arrow functions
//addition
const addition = (a, b) => console.log('add :' + (a + b));

addition(10, 20);
//substraction
const substraction = (a,b) => console.log('sub :'+ (a-b));

substraction(20,10);

//multiplication

const multiplication = (a,b) => console.log("multiplication :"+ (a*b));
multiplication (2,3);

//division

const division = (a,b) => console.log("division :"+ (a/b));
division (10,5)

//Area of circle
const AreaC = (r) => console.log("AOC:"+3.14*r*r);
AreaC(5)

//Area of Rectangle
const AreaR = (w,l) => console.log("AOR :"+(w*l));
AreaR(2,5)

//Area of cylinder A=2πrh+2πr2
const AreaCy = (r,h) => console.log("AOCY :" + (2*3.14*r*h)+(2*3.14*r*r));
AreaCy (3,2)








