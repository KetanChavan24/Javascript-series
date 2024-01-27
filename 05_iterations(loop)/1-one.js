
for (let i = 0; i < 10; i++) {
    // const element = i;
    if(i == 7){
        console.log(`7 is a good number.`);
    }
    console.log(i);
}

//TABLE FOR 6

for (let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
    
}

//BREAK AND CONTINUE

for(let k = 1; k <= 20;k++){
    if(k == 5){
        console.log(`5 detected`);
        continue;
    }else if (k == 15) {
        console.log(`15 detected`);
        break;
    }
    console.log(k);
}