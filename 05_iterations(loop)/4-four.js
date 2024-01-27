//FOR EACH LOOP

const myArr = ["Cristiano" , 22, "Messi" , 24 , 7];

let count = 1;
myArr.forEach(function (element) {
    console.log(`${count}.) ${element}`);
    count++;
})

const bigArr = [

    {
        languageName: "Javascript",
        FileName: "JS",
    },
    
    {
        languageName: "python",
        FileName: "py",
    },

    {
        languageName: "Cascading Style Sheets",
        FileName: "CSS",
    }


]

bigArr.forEach((value) => {
    console.log(`It is ${value.languageName} i.e ${value.FileName}`);
});