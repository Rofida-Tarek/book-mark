var siteNameInput=document.getElementById("name");
var siteUrlInput=document.getElementById("url");
var detailscontainer=[];
checklocalstorge()
function adddeteles(){
    if(validate()==true){
        var details= {
            name:siteNameInput.value,
            url:siteUrlInput.value,
        }
     detailscontainer.push(details);
    localStorage.setItem( "data",JSON.stringify(detailscontainer));
    displaydetails();
    clearform()
    }
    else{
        alert("invalid")
    }
   
}
function displaydetails(){
    var box=' ';
    for(var i=0; i<detailscontainer.length;i++){
        box+=`   <tr>
        <td>${i+1}</td>
        <td>${detailscontainer[i].name}</td>
        <td>
          <button onclick="visitWebSite(${i})" class="btn btn-warning" id="visit">
            <i class="fa-solid fa-eye"></i>Visit
            <a href="${detailscontainer[i].url}"></a>
          </button>
        </td>
        <td>
          <button onclick="delet(${i});" class="btn btn-danger" id="delet">
            <i class="fa-solid fa-trash-can"></i>Delet
          </button>
        </td>
      </tr>`
    }
    document.getElementById("tablebody").innerHTML=box;
}
function clearform(){
    siteNameInput.value=" ";
siteUrlInput.value=' ';
}
function delet(index){
    detailscontainer.splice(index,1)
    displaydetails();
}

function checklocalstorge(){
    if(localStorage.getItem("data")!=null){
detailscontainer=JSON.parse(localStorage.getItem("data"))
displaydetails()
    }
}
function validate(){
    var regex= /(^https)?:\/\/.(www\.)?[a-zA-Z0-9@:_]{1,}\.(com)/;
    if(regex.test(siteUrlInput.value)==true){
        return true;
    }
    else{
        return false;
    }
}
function visitWebSite(index){
    window.open(detailscontainer[index].url)
}
// function valid(){
//     var regex=/[^a-zA-Z]{3,8}/
//     if(regex.test( siteNameInput.value)==true){
//         return true;
//     }
//     else{
//         return false;
//         // alert("Please enter more than 3 letters")
//     }
// }