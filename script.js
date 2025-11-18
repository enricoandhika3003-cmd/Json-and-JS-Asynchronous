var Obj = { name: "Riya", age: 12, grade: 7 };
var JSON = JSON.stringify(Obj);
var newObj = JSON.parse(myJSON);
document.getElementById("result").InnerHtml = newObj.name;

async function add(a,b) {
    let respone = await a + b;
    display(response);
}

function display(some) {
    document.getElementById("result").innerHTML = some;
}
add(13,21)