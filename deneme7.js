const hesapPlanı = ["100 KASA","102 BANKALAR","102 VERİLEN ÇEKLER", "120 ALICILAR", "121 ALACAK SENETLERİ","153 TİCARİ MALLAR","191 İNDİRİLECEK KDV",
"600 YURT İÇİ SATIŞLAR","391 HESAPLANAN KDV"];

let hesapList = document.querySelector("#hesap");

for(let i=0; i<hesapPlanı.length;i++){
    let option = document.createElement("option")
    option.textContent = hesapPlanı[i]
    hesapList.appendChild(option)
}


let yansıt_btn = document.querySelector("#yansıt")
let borc = document.querySelector("#borc")
let alacak = document.querySelector("#alacak")

yansıt_btn.addEventListener("click",olay=>{
     alert("sabır")
})

function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("borc").value;
    y = document.getElementById("alacak").value;
    z = document.getElementById("hesap").value;

   
    alert(x+y+z)
    
}

