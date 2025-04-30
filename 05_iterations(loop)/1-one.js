
for (let i = 0; i < 10; i++) {
    // const element = i;
    if(i == 7){
        console.log(`7 is a good number.`);
    }
    console.log(i);
}

//TABLE FOR 6
for(let i = 1; i <= 10; i++){
     console.log(i * 6);
}



//BREAK AND CONTINUE

for(let k = 1; k <= 20;k++){
    if(k == 5){
        console.log(`5 detected`);
        continue;// skips and jumps to next iteration
    }else if (k == 15) {
        console.log(`15 detected`);// terminates the entire loop
        break;
    }
    console.log(k);
}
