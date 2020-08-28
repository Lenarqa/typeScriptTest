function strip(x: number | string){
    if(typeof x === 'number'){
        return x.toFixed(2);
    }else{
        return x.trim();
    }
}

class MyResponce {
    header = 'responce header';
    result = 'responce result';
}

class MyError {
    header = 'error header';
    massage = 'error massage';
}

function handle(res: MyResponce | MyError){
    if(res instanceof MyResponce){
        return {
            info: res.header + res.result
        };
    }else{
        return {
            info: res.header + res.massage
        };
    }
}

type AlertType  = 'sucsess' | 'danger' | 'warning';

function setAlertType(type: AlertType) {
    //...
}

setAlertType('sucsess');
setAlertType('danger');
setAlertType('warning');
// setAlertType('Lee'); // error