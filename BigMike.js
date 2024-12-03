for(let x=0;x<=100;x+=1){
    if(x%5===0&&x%3===0){
        console.log("BigMike");
    }
    else if(x%5===0){
        console.log("Mike");
    }
    else if(x%3===0){
        console.log("Big");
    }
    else{
        console.log(x);
    }
}