var button = document.getElementById("button");
button.addEventListener("click", run)

async function run(){
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json()
    console.log(data)

    var table = document.getElementById("table-data")
    for (var i=0; i < data.length; i++){

        var completionClass = "";
        if (String(data[i].completed) == "true"){
            completionClass = "completion-true";
            console.log("true");
        } else if (String(data[i].completed) == "false") {
            completionClass = "completion-false";
            console.log("false");
        }

        var backgroundColorClass = "";
        if (i%2) {
            backgroundColorClass = "even-row";
        } else {
            backgroundColorClass = "odd-row";
        }

        var jointClass = '"' + completionClass + " " + backgroundColorClass + '"';
        console.log(jointClass)
        console.log(typeof jointClass)

        var row = `<tr>
                        <td class=${backgroundColorClass}>${data[i].userId}</td>
                        <td class=${backgroundColorClass}>${data[i].id}</td>
                        <td class=${backgroundColorClass}>${data[i].title}</td>
                        <td class=${jointClass}>${data[i].completed}</td>
                    </tr>`
        table.innerHTML += row;
    }
}

