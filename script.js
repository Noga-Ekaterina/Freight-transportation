//открытие моб. меню
const body =document.querySelector("body");
const menu=document.querySelector("#menu");
const contentMenu=document.querySelector("#content_menu");
menu.onclick= function(){
    contentMenu.style.display="block";
    menu.style.display="none";
    body.classList.add("overf_h")
};
//закрытие моб. меню
const menuLi=contentMenu.querySelectorAll("a");
function closeMenu(){
contentMenu.style.display="";
menu.style.display="";
body.classList.remove("overf_h")
}
menuLi.forEach((li)=>{
    li. addEventListener('click', (event)=>closeMenu() , false)
})
document.querySelector("#close").addEventListener('click', (event)=>closeMenu() , false);

let nam= document.querySelectorAll(".input_nam");


    function checkNamder(el) {
    let va1,
        va2,
        va3,
        va4,
        va5;
    if(el.value.length<=2)
        el.value="+7";
    let namValue=el.value;
    const split7= el.value.split("7");
    if(split7!=1 &&el.value.split("+").length<=1){
        el.value="+7"+namValue;}

    if(el.value.split("+").length<=1){
        el.value="+"+namValue;}
    if(el.value.split("+").length>=1 &&el.value.split("+7").length<=1){
        let newValue= el.value.slice(1);
        el.value="+7"+newValue;}

        if(el.value.length==12 &&el.value.split(" (").length<=1){
            va1=namValue.slice(0, 2);
            va2=namValue.slice(2, 5);
            va3=namValue.slice(5, 8);
            va4=namValue.slice(8, 10);
            va5=namValue.slice(10);
            el.value= va1+ " ("+ va2+ ") "+ va3+ "-"+va4+ "-"+va5;
        }
        if(el.value.length!=18){
            el.value= el.value.replace(/ /g, "");
            el.value= el.value.replace(/-/g, "");
            el.value= el.value.replace("(", "");
            el.value= el.value.replace(")", "");
        }
    }
    nam.forEach((namber)=>{
        namber.addEventListener('input', (event) => checkNamder(namber), false)
    })

function checkFormCalculator(el){
    let km= el.km.value;
    let weight= el.weight.value;
    let volume= el.volume.value;
    let temperature= document.querySelector("#Itemp");
    let dangerous= document.querySelector("#Idang");
    let insurance= document.querySelector("#Iins");
    let expressDelivery= document.querySelector("#IED");
    
    let priceKm= km *47;
    let priceWeight= weight*priceKm;
    let proceVolume= volume*20;
    let priceInsurance;
    let priceExpressDelivery;
    
    if (temperature.checked)
        priceKm= km*55;
    if (dangerous.checked)
        priceKm= km*70;
    if (insurance.checked)
        priceInsurance= priceWeight/100*15;
    else
        priceInsurance=0;
    
    if(expressDelivery.checked)
        priceExpressDelivery= priceKm+priceKm/100*5;
    else priceExpressDelivery=0
    
    let sumPrice= priceExpressDelivery+ priceInsurance+priceKm+ priceWeight+proceVolume;
    document.querySelector("#price").innerHTML="Предварительная стоимость услуги: "+ sumPrice+ " руб";
    
    return false
}

const slyds= [...document.querySelectorAll(".slyd")];
const slydsQuantity= slyds.length;
const quantity= document.querySelector("#quantity");
quantity.innerHTML= "1 / "+ slydsQuantity;

const checkCarusel= (offest)=>{
    const activeSlyd= document.querySelector("[data-active]");
    const curentIndex= slyds.indexOf(activeSlyd);
    let newIndex= curentIndex+ offest;
    let buttPrev= document.querySelector(".butt_arr_prev");
    let butt_Next= document.querySelector(".butt_arr_next");
    let navIndex= newIndex+1;
    
    if(navIndex>=2)
        buttPrev.removeAttribute("disabled");
    else
        buttPrev.setAttribute("disabled", "true");
    
    if(navIndex==slyds.length)
        butt_Next.setAttribute("disabled", "true");
    else
        butt_Next.removeAttribute("disabled");
    
    slyds[newIndex].dataset.active= true;
    delete activeSlyd.dataset.active;
    quantity.innerHTML= navIndex+ " / "+ slydsQuantity
}
const onNext= ()=> checkCarusel(1);
const onPrev= ()=> checkCarusel(-1)