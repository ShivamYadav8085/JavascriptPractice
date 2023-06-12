function outer(){
    a=0;
    b=[];
    function inner(value){
        if(typeof value === 'number'){
            a+=value;
            console.log(a);
        }else{
            b.push(value)
            console.log(b);
        }
    }
    return inner;
}

const X = outer();

X(5)
X(15)
X("First")
X("Second")
X({a:2})
X([2,4])