let subArray1 = ["Jagger", "AlDave", "Briano", "Dick", "Balong"];
let subArray2 = [45, 66, 21, 1, 9];


let restructuredArray = [];
for (let i = 0; i < subArray1.length; i++) {
    restructuredArray.push([subArray1[i], subArray2[i]]);
}

restructuredArray.forEach(item => {
    console.log(`name: ${item[0]}, age: ${item[1]}]`);
});