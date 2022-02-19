var xhr = new XMLHttpRequest()
var butonDanger = document.querySelector(".btn-danger")
var butonSucces = document.querySelector(".btn-success")
var tbody = document.getElementById("table2")
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

butonSucces.addEventListener("click",addItemsToTable)
function addItemsToTable()
{
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState = 4)
        {
            if (xhr.status == 200) {
                
                let object = JSON.parse(this.responseText)
                
                
                object.forEach(element => {
                    tbody.innerHTML += `<tr id="table">
                                          <th scope="row">${element.id}</th>
                                          <td>${element.name}</td>
                                          <td>${element.username}</td>
                                          <td>${element.email}</td>
                                        </tr>`
                    itemsArray.push(element)
                    localStorage.setItem('items', JSON.stringify(itemsArray));
                });
                
                
            }
            
            else if( xhr.status == 400)
            {
                console.log("kaynak bulunamadı")
            }
        }
        
    }
    xhr.open("GET","https://jsonplaceholder.typicode.com/users",true)
    xhr.send()
}

data.forEach(element => {
    tbody.innerHTML += `  <tr id="table">
                            <th scope="row">${element.id}</th>
                            <td>${element.name}</td>
                            <td>${element.username}</td>
                            <td>${element.email}</td>
                           </tr>`
});


     


butonDanger.addEventListener("click",removeAllItemFromTable)
function removeAllItemFromTable()
{
    itemsArray = []
    localStorage.setItem('items', JSON.stringify(itemsArray));
    tbody.innerHTML = ""
}