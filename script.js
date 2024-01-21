function addNewWorkExpField(){
    // console.log("Adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("placeholder","Enter here");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);

} 
function addAcdQual(){
    // console.log("Hello world");
    let secNode=document.createElement("textarea");
    secNode.classList.add("form-control");
    secNode.classList.add("aqField");
    secNode.setAttribute("placeholder","Enter here");
    secNode.classList.add("mt-3");
    secNode.setAttribute("rows",3);

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(secNode,aqAddButtonOb);
}

// generating CV
function generateCV(){
    // console.log("hello");
    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");

    nameT1.innerHTML=nameField;
    // direct procedure

    // name
    document.getElementById("nameT2").innerHTML=nameField;
    // contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    // address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    // links

    // facebook
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    // instagram
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    // linkedIn
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;

    // professional Information


    // objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    // work experience

    let wes=document.getElementsByClassName("weField");

    let str = "";  
    for(let e of wes){
        str=str+ `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    // Acedemic Qualification

    let aqs=document.getElementsByClassName("aqField");

    let str1 = "";  
    for(let e of aqs){
        str1=str1+ `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    // setting Image
    let file=document.getElementById("imgField").files[0];
    console.log(file);

    let reader=new FileReader();

    reader.readAsDataURL(file);

    // set the image to template
    reader.onloadend=function () {
        document.getElementById("imgT").src= reader.result
    }


    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";

}
// printing CV
function printCV(){
    window.print();
}