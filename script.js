function pagination(){
    let size = (contact.length)/5;
        let page = document.getElementById("pagination");

    // Previous button
    let prev = document.createElement("div");
    prev.innerHTML = `<button class="button" id="previous" onclick="prev()">Previous</button>`;
    page.appendChild(prev);

    // Number buttons
    for(let i=1;i<=size;i++){
        let div = document.createElement("div");
        div.innerHTML = `<button class="button" id="${i}" onclick="data(id)">${i}</button>`;
        page.appendChild(div);
    }

    // Next button
    let next = document.createElement("div");
    next.innerHTML = `<button class="button" id="next" onclick="next()">Next</button>`;
    page.appendChild(next);
} 

function data(pageNo){
    localStorage.setItem("page",pageNo);
    let j = (pageNo-1)*5;
    let tBody = document.getElementById("tBody");
    tBody.innerHTML = "";
    for(let i=1;i<=5;i++){
        let tr = document.createElement("tr"); 
        let th = document.createElement("th"); 

        th.setAttribute("scope","col")   
        th.innerText = contact[j].id;  

        let td1 = document.createElement("td"); 
        td1.innerText = contact[j].name;
        let td2 = document.createElement("td"); 
        td2.innerText = contact[j].email;

        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tBody.appendChild(tr);
        j+=1;
    }
} 
// calling previous button
 function prev(){
    currentPage = localStorage.getItem("page");
    if(currentPage>1){
        data(currentPage-1);
    }else{
        document.getElementById("previous").disabled = true
    }
    
}

// calling Next button
function next(){
    currentPage = localStorage.getItem("page");
    if(currentPage==(contact.length/5)){
        document.getElementById("next").disabled = true
    }
    else{
        data(++currentPage);
    }
    
} 