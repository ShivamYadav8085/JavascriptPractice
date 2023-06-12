const httpReq = new XMLHttpRequest();
httpReq.onreadystatechange = function(){
    if(this.readyState===4 && this.status===200){
        const response = JSON.parse(httpReq.responseText);
        createTableWithData(response.data);
    }
}
const url = "https://reqres.in/api/users?page=1"
httpReq.open("GET",url,true);
httpReq.send();

function createTableHeader(table){
    const tr = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    th1.innerText = "ID"
    th2.innerText = "First Name"
    th3.innerText = "Last Name"
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    table.append(tr);
    return table;
}
function createRow(table,data){
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdFN = document.createElement("td");
    const tdLN = document.createElement("td");

    tdId.innerText = data.id;
    tdFN.innerText = data.first_name;
    tdLN.innerText = data.last_name;
    tr.append(tdId)
    tr.append(tdFN)
    tr.append(tdLN)
    table.append(tr);
}

function createTableWithData(data){
    const table = document.createElement("table");
    table.style.border= "thick solid black"
    createTableHeader(table);
    data.forEach(person => {
        createRow(table,person)
    });
    document.body.append(table)
}
