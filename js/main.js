
let buildBtn = document.getElementById("buildBtn");
let buildForm = document.getElementById("buildForm");

let Total = document.getElementById("total");

let crust = document.getElementById("crust").value;
let sauce = document.getElementById("sauce").value;

let Chedder = document.getElementById("chedder");
let alfredo = document.getElementById("alfredo");
let mozerella = document.getElementById("mozerella");

let pepperoni = document.getElementById("pepperoni");
let sausage = document.getElementById("sausage");
let greenPepper = document.getElementById("greenPepper");
let bellPepper = document.getElementById("bellPepper");
let bacon = document.getElementById("bacon");



buildForm.style.visibility = "hidden";

function build() {
    buildBtn.style.visibility = "hidden";
    buildForm.style.visibility = "visible";
}

function finish() {

    let TotalNum = 0;
    let CheeseTotalNum = 0;
    let TopTotalNum =0;

    let x = document.getElementById("crust").selectedIndex;
    let Crust = document.getElementsByClassName("option")[x].value;

    let y = document.getElementById("sauce").selectedIndex;
    let Sauce = document.getElementsByClassName("optionSauce")[y].value;

    if(x == 1) {
        TotalNum += 5;
    }

    if(x == 2) {
        TotalNum += 7;
    }
    
    if(y == 1) {
        TotalNum += 0;
    }

    if(y == 2) {
        TotalNum += 0.75;
    }

    if(y == 3) {
        TotalNum += 0.50;
    }

    if(y == 4) {
        TotalNum += 0.50;
    }

    if(Chedder.checked == true) {
        chedderInput = "Chedder";
        TotalNum += 0;
    }
    if(Chedder.checked == false) {
        chedderInput = "";
    }

    if(alfredo.checked == true) {
        alfredoInput = "Aflredo";
        TotalNum += 0.30;
        CheeseTotalNum += 0.30;
    }
    if(alfredo.checked == false) {
        alfredoInput = "";
    }

    if(mozerella.checked == true) {
        mozerellaInput = "Mozerella";
        TotalNum += 0.45;
        CheeseTotalNum += 0.45;
    }
    if(mozerella.checked == false) {
        mozerellaInput = "";
    }

    if(pepperoni.checked == true) {
        pepperoniInput = "Pepperoni";
        TotalNum += 0;
    }
    if(pepperoni.checked == false) {
        pepperoniInput = "";
    }

    if(sausage.checked == true) {
        sausageInput = "Sausage";
        TotalNum += 0.50;
        TopTotalNum += 0.50;
    }
    if(sausage.checked == false) {
        sausageInput = "";
    }

    if(greenPepper.checked == true) {
        greenInput = "Green Peppers";
        TotalNum += 0.25;
        TopTotalNum += 0.25;
    }
    if(greenPepper.checked == false) {
        greenInput = "";
    }

    if(bellPepper.checked == true) {
        bellInput = "Bell Peppers";
        TotalNum += 0.25;
        TopTotalNum += 0.25;
    }
    if(bellPepper.checked == false) {
        bellInput = "";
    }

    if(bacon.checked == true) {
        baconInput = "Bacon";
        TotalNum += 0.95;
        TopTotalNum += 0.95;
    }
    if(bacon.checked == false) {
        baconInput = "";
    }

    Total.innerHTML = `Your Pizza: <hr /> <strong>Crust:</strong> ${Crust} <br /> <strong>Sauce:</strong> ${Sauce} <br /> <strong>Cheese:</strong> ${chedderInput} ${alfredoInput} ${mozerellaInput} (+$${CheeseTotalNum})<br /> <strong>Toppings:</strong> ${pepperoniInput} ${sausageInput} ${greenInput} ${bellInput} ${baconInput} (+$${TopTotalNum}) <br /> <br /> <strong>Your estimated total:</strong> $${TotalNum}`

}

