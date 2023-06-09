function afterAsyncProcess(){
    console.log("Call back: After async function");
}

function asyncFunction(callback){
    console.log("Some API Calls....");
    callback();
}

asyncFunction(afterAsyncProcess);