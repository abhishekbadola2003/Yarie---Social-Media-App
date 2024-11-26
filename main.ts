type person = {
    num1:number,
    num2:number,

}

const first:person={
    num1:5,
    num2:4,
}


const mul=(first:person)=>{
    return first.num1*first.num2;
     
}
console.log(mul(first));
