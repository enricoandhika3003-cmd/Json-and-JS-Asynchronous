var Obj = { name: "Enrico", age: 14, grade: 9 };
var JSON = JSON.stringify(Obj);
var newObj = JSON.parse(myJSON);
document.getElementById("result").InnerHtml = newObj.name;

async function add(a,b) {
    let response = await a + b;
    display(response);
}

function display(some) {
    document.getElementById("result").InnerHtml = some;
}
add(13,21)