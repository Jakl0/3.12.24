let arm;
for(let x=100;x<1000;x+=1){
    arm = (parseInt(x/100)**3)+(parseInt((x%100)/10)**3)+(parseInt(x%10)**3);
    if(arm===x){
        console.log(x);
    }
}
x = 435