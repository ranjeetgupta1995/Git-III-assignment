// to get prime

let num=31;
if(num<2){
return true;
}
for(let i=2; i<=Math.sqrt(num); i++){
if(num%i==0){
return false;
}
}
return true;