function test1(cb){
    setTimeout(()=>{
        console.log("Test1")
    },1000);
}
function test2(cb){
    setTimeout(()=>{
        console.log("Test2")
    },200);
}
function test3(cb){
    setTimeout(()=>{
        console.log("Test3")
        cb();
    },200);
}
function test4(cb){
    setTimeout(()=>{
        console.log("Test4")
        cb();
    },100);
}
test1(()=>{
    test2(()=>{
        test3(()=>{
            test4();
        });
    });
});

// test1();
// test2();
// test3();
// test4();


