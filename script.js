var Obj = { name: "Enrico", age: 14, grade: 9 };
var JSON = JSON.stringify(Obj);
var newObj = JSON.parse(JSON);
document.getElementById("result").innerHTML = newObj.name;

async function add(a,b) {
    let response = await a * b;
    display(response);
}

function display(some) {
    document.getElementById("result").innerHTML = some;
}
add(7,5)