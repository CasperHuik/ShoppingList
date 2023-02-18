let boodschappen = [];
let opgeslagenBoodschappen = [];
let wisBoodschappen = [];
    
function toevoegen(item){
    boodschappen = JSON.parse(localStorage.getItem("boodschappen"));
    boodschappen.push(item);
    localStorage.setItem("boodschappen", JSON.stringify(boodschappen));
    console.log(boodschappen);
    console.log(opgeslagenBoodschappen);
}

function laadlijst(){
    sortBoodschappen();
    opgeslagenBoodschappen = JSON.parse(localStorage.getItem("sortedboodschappen"));
    const list = document.getElementById("list1");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    
    for(var i = 0; i<opgeslagenBoodschappen.length; i++){
        const item = i;
        const lijst = document.createElement("li");
        const lijstTekst = document.createTextNode(opgeslagenBoodschappen[i]);
        lijst.setAttribute("id","item"+i);
        lijst.appendChild(lijstTekst);
        const element = document.getElementById("list1");
        element.appendChild(lijst);
        const lijstButton = document.createElement("button");
        lijstButton.innerHTML = "&#10003;";
        lijstButton.onclick = function(){
            completeItemFromList(item);
        }
        const buttonElement = document.getElementById("item"+i); 
        buttonElement.appendChild(lijstButton);
    }
}

function wisLijst(){
    localStorage.setItem("boodschappen", JSON.stringify(wisBoodschappen));
    localStorage.setItem("sortedboodschappen", JSON.stringify(wisBoodschappen));
    boodschappen = [];
    opgeslagenBoodschappen = [];
    const list = document.getElementById("list1");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }    
}

function completeItemFromList(item){
    opgeslagenBoodschappen = JSON.parse(localStorage.getItem("sortedboodschappen"));
    opgeslagenBoodschappen2 = JSON.parse(localStorage.getItem("boodschappen"));
    deleteItem = opgeslagenBoodschappen[item];
    
    deleteyn = true;

    while (deleteyn == true){
        deleteyn = false;
        for(var i = 0; i < opgeslagenBoodschappen2.length; i++){
            if(deleteItem.includes(opgeslagenBoodschappen2[i])){
                opgeslagenBoodschappen2.splice(i,1);
                deleteyn = true;
                break
            }
        }
    }
    
    localStorage.setItem("boodschappen", JSON.stringify(opgeslagenBoodschappen2));
    opgeslagenBoodschappen.splice(item,1);
    localStorage.setItem("sortedboodschappen", JSON.stringify(opgeslagenBoodschappen));
    opgeslagenBoodschappen = JSON.parse(localStorage.getItem("sortedboodschappen"));
    const list = document.getElementById("list1");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    
    for(var i = 0; i<opgeslagenBoodschappen.length; i++){
        const item = i;
        const lijst = document.createElement("li");
        const lijstTekst = document.createTextNode(opgeslagenBoodschappen[i]);
        lijst.setAttribute("id","item"+i);
        lijst.appendChild(lijstTekst);
        const element = document.getElementById("list1");
        element.appendChild(lijst);
        const lijstButton = document.createElement("button");
        lijstButton.innerHTML = "&#10003;";
        lijstButton.onclick = function(){
            completeItemFromList(item);
        }
        const buttonElement = document.getElementById("item"+i); 
        buttonElement.appendChild(lijstButton);
    }
}

function sortBoodschappen(){
    console.log("yes");
    soortboodschappenlijst = JSON.parse(localStorage.getItem("boodschappen"));
    console.log(soortboodschappenlijst);
    boodschappen = [];
    verstuurboodschappen = [];
    for(var i = 0; i < soortboodschappenlijst.length; i++){
        let boodschap = soortboodschappenlijst[i]; 
        if(boodschappen.includes(boodschap) == false){
            let num = 0;
            for(var j = 0; j < soortboodschappenlijst.length; j++){
                if(soortboodschappenlijst[j] == boodschap){
                    num++;
                }
            }
            boodschappen.push(boodschap);
            verstuurboodschappen.push(boodschap + " x" + num);
            console.log("yes");
        }
        
    }
    opgeslagenBoodschappen = verstuurboodschappen; 
    localStorage.setItem("sortedboodschappen", JSON.stringify(opgeslagenBoodschappen));

}

function inputInput(){
    var item = document.getElementById("input2").value;
    boodschappen = JSON.parse(localStorage.getItem("boodschappen"));
    boodschappen.push(item);
    localStorage.setItem("boodschappen", JSON.stringify(boodschappen));
    laadlijst();
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'Enter':
            inputInput();
            break
    }
})


laadlijst();