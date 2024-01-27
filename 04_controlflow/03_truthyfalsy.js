const userLoggedIn = "Kuch bhi value except empty string"

if(userLoggedIn){
    console.log(`User has logged in`);
}else{
    console.log(`User has not logged in`);
}

//FALSY VALUES
//false,0,-0, BigInt 0n, "",null,undefined,NaN

//SOME SURPRISING TRUTHY VALUES
//"0",'false',"",[],{},function(){}
