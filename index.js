console.log("Hi");

function transform(num) {
    return num.map((el)=> {el})
}
const x = transform([11, 2, 3]);
console.log(x);

function transform2(num){
    return num.map((el)=>{
        return {el}
    })
}

const y = transform2([11, 2, 3]);
console.log(y);