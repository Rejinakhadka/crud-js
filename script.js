var selectedRow = null;

function onFormSubmit(e){

    event.preventDefault();
    var formData = readFormData();

    if(selectedRow === null)
    {
        insertNewRecord(formData);
       
    }
    else
    {
        updateRecord(formData);
        
    }
    resetForm();
}






//read operation

function readFormData(){

    var formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["address"] = document.getElementById("address").value;
    formData["email"] = document.getElementById("email").value;
    formData["phnum"] = document.getElementById("phnum").value;

    return formData;


}


//create new operation

function insertNewRecord(data)
{
    var table = document.getElementById("storedlist").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fullname;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.address;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.email;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.phnum;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
        <a href="#" onClick='onDelete(this)'>Delete</a>`              
}

function onEdit(td){

    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("address").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("phnum").value = selectedRow.cells[3].innerHTML;
}



function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.address;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.phnum;
}

function resetForm(){
    document.getElementById("fullname").value = " ";
    document.getElementById("address").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("phnum").value = " ";

    selectedRow = null;
}

function onDelete(td){
    if(confirm("are you sure you want to delete this data?")){

        row = td.parentElement.parentElement;

        document.getElementById("storedlist").deleteRow(row.rowIndex);
        resetForm();

    }
}