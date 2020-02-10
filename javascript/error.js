
// try, catch and finally

// try{
//     // let x = 0;
//     console.log(5/x);
// }catch(error){
//     console.log(error.name,":", error.message);
    
// }finally{
//     console.log('NO ERROR');
// }

// global error handling
process.on('uncaughtException', error => {
    console.log(error.name, error.message);
    
});
