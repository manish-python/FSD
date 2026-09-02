// const num = [11, 22, 44, 24, 44, 5, 6, 7];
// const even = num.filter((i) => (i % 2 == 0));
// const square = even.map((i) => (i * i));
// const sum = square.reduce((i,s)=>(i+s));
// console.log("num== ", num);
// console.log("even no= ", even);
// console.log("Sqaure = ", square);
// console.log("SUm = ", sum);

function sum(a,b){
    return a+b;
}

function sumwith(clbk,msg){
    const result = clbk(20,30);
    const fresult = "Hiiii " + msg + "Your score is "+result;
    console.log(fresult);
}

sumwith(sum,"Mr. Mohan");