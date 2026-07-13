const products = {

"Small pouch with strap and gucci plaque":{
brand:"Gucci",
price:"$980",
material:"leather",
size:"11cm x 18cm",
features:"Luxury",
image:"images/gucci-ps1-front.jpg"
},

"Horsebit Web card case wallet":{
brand:"Gucci",
price:"$550",
material:"Leather",
size:"6cm",
features:"Luxury",
image:"images/gucci-wl2-front.jpg"
},

"Multipass purse":{
brand:"Louis Vuitton",
price:"$1600",
material:"Cowhide leather",
size:"30cm x 19cm",
features:"Premium",
image:"images/louis vuitton-ps1-front.jpg"
},

"Locked passport cover":{
brand:"Louis Vuitton",
price:"$890",
material:"leather",
size:"10cm x 14 cm",
features:"Genuine",
image:"images/louis vuitton-wl1-front.jpg"
},

"Bonnie small linen and leather bag":{
brand:"Prada",
price:"$1900",
material:"leather",
size:"22cm x15cm",
features:"Luxury",
image:"images/prada-ps1-front.jpg"
},

"Satin mini wallet":{
brand:"Prada",
price:"$750",
material:"Leather",
size:"18cm x10cm",
features:"Luxury",
image:"images/prada-wl3-front.jpg"
},

"Chanel Boy bag":{
brand:"Chanel",
price:"$1700",
material:"Linen",
size:"25cm x15cm",
features:"Refined",
image:"images/chanel-ps3-front.jpg"
},

"Classic Zipped coin":{
brand:"Chanel",
price:"$1600",
material:"Linen & leather",
size:"35cm x19cm",
features:"Luxury",
image:"images/chanel-wl2-front.jpg"
},

"Fendi Baguette":{
brand:"Fendi",
price:"$1600",
material:"Linen & Leather",
size:"27cm x15cm",
features:"Elegant",
image:"images/fendi-ps2-front.jpg"
},

"Baguette Micro Trifold":{
brand:"Fendi",
price:"$800",
material:"Linen & Leather",
size:"9.5cm x7.5cm",
features:"Compact",
image:"images/fendi-wl1-front.jpg"
},

"Plume mini bag":{
brand:"Hermes",
price:"$3000",
material:"Fabric & Leather",
size:"21cm x 15cm",
features:"Luxury",
image:"images/hermes-ps5-front.jpg"
},

"Constance slim wallet":{
brand:"Hermes",
price:"$1100",
material:"Linen & Leather",
size:"12.4cm x 10.2cm",
features:"Elegant",
image:"images/hermes-wl1-front.jpg"
}

};

function showProducts(){

let p1=document.getElementById("product1").value;
let p2=document.getElementById("product2").value;

if(p1=="" || p2==""){
document.getElementById("compareTable").style.display="none";
document.getElementById("download").style.display="none";
return;
}

let a=products[p1];
let b=products[p2];

document.getElementById("compareTable").style.display="table";
document.getElementById("download").style.display="block";

document.getElementById("name1").innerHTML=p1;
document.getElementById("name2").innerHTML=p2;

document.getElementById("img1").src=a.image;
document.getElementById("img2").src=b.image;

document.getElementById("brand1").innerHTML=a.brand;
document.getElementById("brand2").innerHTML=b.brand;

document.getElementById("price1").innerHTML=a.price;
document.getElementById("price2").innerHTML=b.price;

document.getElementById("material1").innerHTML=a.material;
document.getElementById("material2").innerHTML=b.material;

document.getElementById("size1").innerHTML=a.size;
document.getElementById("size2").innerHTML=b.size;

document.getElementById("feature1").innerHTML=a.features;
document.getElementById("feature2").innerHTML=b.features;

}

function downloadDoc(){

let table=document.getElementById("compareTable").outerHTML;

let html="<html><body><h2>Product Comparison Report</h2>"+table+"</body></html>";

let blob=new Blob([html],{type:"application/msword"});

let link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="Comparison_Report.doc";

link.click();

}