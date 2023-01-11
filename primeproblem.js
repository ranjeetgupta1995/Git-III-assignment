// to get prime

// to get prime

let num=31;
let count = 0;
for(let i = 1;i<=num;i++){
    if(num%i==0){
        count++;
    }
}

if(count >= 2){
    console.log('this is a prime');
}else{
    console.log('this is not a prime');
}