alert("Connected");

function appendvalue(value)
{
    //document.getElementById("display").value += value;
    let current = document.getElementById("display").value;
    let last = current[current.length-1];
    if((last === "+" || last === "-" || last === "*" || last === "/") &&
        (value === "+" || value === "-" || value === "*" || value === "/")){
            return;
        }
        document.getElementById("display").value += value;
}

function calculate()
{
    let expression =
    document.getElementById("display").value;

    let result = eval(expression);

    document.getElementById("display").value =
    result;
}

function cleardisplay(){
    document.getElementById("display").value = " ";
}

function backspace(){
    let current = document.getElementById("display").value;
    let length= current.length;
    let val = current.slice(0,length-1);
     document.getElementById("display").value = val;
}

document.addEventListener("keydown", function(event) {

    let key = event.key;

    if(
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "."
    )
    {
        appendvalue(key);
    }

    else if(key === "Enter")
    {
        calculate();
    }

    else if(key === "Backspace")
    {
        backspace();
    }

});

