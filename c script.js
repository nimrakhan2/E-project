function compareProducts() {

    let checked = document.querySelectorAll("input[type='checkbox']:checked");

    if (checked.length != 2) {
        alert("Please Select 2 Products");
        return;
    }

    let row1 = checked[0].closest("tr");
    let row2 = checked[1].closest("tr");

    let table = "";

    table += "<tr><th>Feature</th><th>Product 1</th><th>Product 2</th></tr>";

    table += "<tr><td>Brand</td><td>" + row1.cells[2].innerText + "</td><td>" + row2.cells[2].innerText + "</td></tr>";

    table += "<tr><td>Category</td><td>" + row1.cells[3].innerText + "</td><td>" + row2.cells[3].innerText + "</td></tr>";

    table += "<tr><td>Price</td><td>" + row1.cells[4].innerText + "</td><td>" + row2.cells[4].innerText + "</td></tr>";

    table += "<tr><td>Material</td><td>" + row1.cells[5].innerText + "</td><td>" + row2.cells[5].innerText + "</td></tr>";

    table += "<tr><td>Size</td><td>" + row1.cells[6].innerText + "</td><td>" + row2.cells[6].innerText + "</td></tr>";

    table += "<tr><td>Features</td><td>" + row1.cells[7].innerText + "</td><td>" + row2.cells[7].innerText + "</td></tr>";

    document.getElementById("resultTable").innerHTML = table;

    document.getElementById("resultBox").style.display = "block";

    document.getElementById("resultBox").scrollIntoView();
}