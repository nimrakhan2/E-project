
function filterBrands(){
let value=document.getElementById("brandsearch").value.toLowerCase();
let brands=document.querySelectorAll(".brand-card");

brands.forEach(function(brand){
    if(brand.textContent.toLowerCase().includes(value)){
        brand.style.display="block";
    }else{
        brand.style.display="none";
    }
});
}


fetch("../api/data.json")
.then((res) => res.json())
.then((data) => {
    let brand = "";
    data.forEach(() => {
        brand += `
             <div class="card">
                
                <div class="main-image-container">
                    <img id="main-product-img" src="" alt="Main View Style" width:100%; max-height: 450px;
                        object-fit:contain;">
                    <h3 id="product-detail-title" style="margin-top: 15px; font-size: 1.5rem;">PRODUCT NAME</h3>
                </div>
                <div id="thumbnails-container" class="thumbnails-grid"></div>

            </div>
        `;


        document.getElementsByClassName("card-container")[0].innerHTML = brand;
    })
});





const allProductsData=[

{brand:"GUCCI",category:"HANDBAGS",title:"GUCCI HANDBAGS 1",images:["img/gucci-h1-front.jpg","img/gucci-h1-back.jpg","img/gucci-h1-side.jpg"]},
{brand:"GUCCI",category:"HANDBAGS",title:"GUCCI HANDBAGS 2",images:["img/gucci-h2-front.jpg","img/gucci-h2-back.jpg","img/gucci-h2-side.jpg"]},
{brand:"GUCCI",category:"HANDBAGS",title:"GUCCI HANDBAGS 3",images:["img/gucci-h3-front.jpg","img/gucci-h3-back.jpg","img/gucci-h3-side.jpg"]},
{brand:"GUCCI",category:"HANDBAGS",title:"GUCCI HANDBAGS 4",images:["img/gucci-h4-front.jpg","img/gucci-h4-back.jpg","img/gucci-h4-side.jpg"]},
{brand:"GUCCI",category:"HANDBAGS",title:"GUCCI HANDBAGS 5",images:["img/gucci-h5-front.jpg","img/gucci-h5-back.jpg","img/gucci-h5-side.jpg"]},
{brand:"GUCCI",category:"HANDBAGS",title:"GUCCI HANDBAGS 6",images:["img/gucci-h6-front.jpg","img/gucci-h6-back.jpg","img/gucci-h6-side.jpg"]},

{brand:"GUCCI",category:"WALLETS",title:"GUCCI WALLETS 1",images:["img/gucci-w1-front.jpg","img/gucci-w1-back.jpg","img/gucci-w1-side.jpg"]},
{brand:"GUCCI",category:"WALLETS",title:"GUCCI WALLETS 2",images:["img/gucci-w2-front.jpg","img/gucci-w2-back.jpg","img/gucci-w2-side.jpg"]},
{brand:"GUCCI",category:"WALLETS",title:"GUCCI WALLETS 3",images:["img/gucci-w3-front.jpg","img/gucci-w3-back.jpg","img/gucci-w3-side.jpg"]},
{brand:"GUCCI",category:"WALLETS",title:"GUCCI WALLETS 4",images:["img/gucci-w4-front.jpg","img/gucci-w4-back.jpg","img/gucci-w4-side.jpg"]},
{brand:"GUCCI",category:"WALLETS",title:"GUCCI WALLETS 5",images:["img/gucci-w5-front.jpg","img/gucci-w5-back.jpg","img/gucci-w5-side.jpg"]},
{brand:"GUCCI",category:"WALLETS",title:"GUCCI WALLETS 6",images:["img/gucci-w6-front.jpg","img/gucci-w6-back.jpg","img/gucci-w6-side.jpg"]},

{brand:"GUCCI",category:"PURSES",title:"GUCCI PURSES 1",images:["img/gucci-p1-front.jpg","img/gucci-p1-back.jpg","img/gucci-p1-side.jpg"]},
{brand:"GUCCI",category:"PURSES",title:"GUCCI PURSES 2",images:["img/gucci-p2-front.jpg","img/gucci-p2-back.jpg","img/gucci-p2-side.jpg"]},
{brand:"GUCCI",category:"PURSES",title:"GUCCI PURSES 3",images:["img/gucci-p3-front.jpg","img/gucci-p3-back.jpg","img/gucci-p3-side.jpg"]},
{brand:"GUCCI",category:"PURSES",title:"GUCCI PURSES 4",images:["img/gucci-p4-front.jpg","img/gucci-p4-back.jpg","img/gucci-p4-side.jpg"]},
{brand:"GUCCI",category:"PURSES",title:"GUCCI PURSES 5",images:["img/gucci-p5-front.jpg","img/gucci-p5-back.jpg","img/gucci-p5-side.jpg"]},
{brand:"GUCCI",category:"PURSES",title:"GUCCI PURSES 6",images:["img/gucci-p6-front.jpg","img/gucci-p6-back.jpg","img/gucci-p6-side.jpg"]},


{brand:"LOUIS VUITTON",category:"HANDBAGS",title:"LOUIS VUITTON HANDBAGS 1",images:["img/louis vuitton-h1-front.jpg","img/louis vuitton-h1-back.jpg","img/louis vuitton-h1-side.jpg"]},
{brand:"LOUIS VUITTON",category:"HANDBAGS",title:"LOUIS VUITTON HANDBAGS 2",images:["img/louis vuitton-h2-front.jpg","img/louis vuitton-h2-back.jpg","img/louis vuitton-h2-side.jpg"]},
{brand:"LOUIS VUITTON",category:"HANDBAGS",title:"LOUIS VUITTON HANDBAGS 3",images:["img/louis vuitton-h3-front.jpg","img/louis vuitton-h3-back.jpg","img/louis vuitton-h3-side.jpg"]},
{brand:"LOUIS VUITTON",category:"HANDBAGS",title:"LOUIS VUITTON HANDBAGS 4",images:["img/louis vuitton-h4-front.jpg","img/louis vuitton-h4-back.jpg","img/louis vuitton-h4-side.jpg"]},
{brand:"LOUIS VUITTON",category:"HANDBAGS",title:"LOUIS VUITTON HANDBAGS 5",images:["img/louis vuitton-h5-front.jpg","img/louis vuitton-h5-back.jpg","img/louis vuitton-h5-side.jpg"]},
{brand:"LOUIS VUITTON",category:"HANDBAGS",title:"LOUIS VUITTON HANDBAGS 6",images:["img/louis vuitton-h6-front.jpg","img/louis vuitton-h6-back.jpg","img/louis vuitton-h6-side.jpg"]},

{brand:"LOUIS VUITTON",category:"WALLETS",title:"LOUIS VUITTON WALLETS 1",images:["img/louis vuitton-w1-front.jpg","img/louis vuitton-w1-back.jpg","img/louis vuitton-w1-side.jpg"]},
{brand:"LOUIS VUITTON",category:"WALLETS",title:"LOUIS VUITTON WALLETS 2",images:["img/louis vuitton-w2-front.jpg","img/louis vuitton-w2-back.jpg","img/louis vuitton-w2-side.jpg"]},
{brand:"LOUIS VUITTON",category:"WALLETS",title:"LOUIS VUITTON WALLETS 3",images:["img/louis vuitton-w3-front.jpg","img/louis vuitton-w3-back.jpg","img/louis vuitton-w3-side.jpg"]},
{brand:"LOUIS VUITTON",category:"WALLETS",title:"LOUIS VUITTON WALLETS 4",images:["img/louis vuitton-w4-front.jpg","img/louis vuitton-w4-back.jpg","img/louis vuitton-w4-side.jpg"]},
{brand:"LOUIS VUITTON",category:"WALLETS",title:"LOUIS VUITTON WALLETS 5",images:["img/louis vuitton-w5-front.jpg","img/louis vuitton-w5-back.jpg","img/louis vuitton-w5-side.jpg"]},
{brand:"LOUIS VUITTON",category:"WALLETS",title:"LOUIS VUITTON WALLETS 6",images:["img/louis vuitton-w6-front.jpg","img/louis vuitton-w6-back.jpg","img/louis vuitton-w6-side.jpg"]},


{brand:"LOUIS VUITTON",category:"PURSES",title:"LOUIS VUITTON PURSES 1",images:["img/louis vuitton-p1-front.jpg","img/louis vuitton-p1-back.jpg","img/louis vuitton-p1-side.jpg"]},
{brand:"LOUIS VUITTON",category:"PURSES",title:"LOUIS VUITTON PURSES 2",images:["img/louis vuitton-p2-front.jpg","img/louis vuitton-p2-back.jpg","img/louis vuitton-p2-side.jpg"]},
{brand:"LOUIS VUITTON",category:"PURSES",title:"LOUIS VUITTON PURSES 3",images:["img/louis vuitton-p3-front.jpg","img/louis vuitton-p3-back.jpg","img/louis vuitton-p3-side.jpg"]},
{brand:"LOUIS VUITTON",category:"PURSES",title:"LOUIS VUITTON PURSES 4",images:["img/louis vuitton-p4-front.jpg","img/louis vuitton-p4-back.jpg","img/louis vuitton-p4-side.jpg"]},
{brand:"LOUIS VUITTON",category:"PURSES",title:"LOUIS VUITTON PURSES 5",images:["img/louis vuitton-p5-front.jpg","img/louis vuitton-p5-back.jpg","img/louis vuitton-p5-side.jpg"]},
{brand:"LOUIS VUITTON",category:"PURSES",title:"LOUIS VUITTON PURSES 6",images:["img/louis vuitton-p6-front.jpg","img/louis vuitton-p6-back.jpg","img/louis vuitton-p6-side.jpg"]},



{brand:"PRADA",category:"HANDBAGS",title:"PRADA HANDBAGS 1",images:["img/prada-h1-front.jpg","img/prada-h1-back.jpg","img/prada-h1-side.jpg"]},
{brand:"PRADA",category:"HANDBAGS",title:"PRADA HANDBAGS 2",images:["img/prada-h2-front.jpg","img/prada-h2-back.jpg","img/prada-h2-side.jpg"]},
{brand:"PRADA",category:"HANDBAGS",title:"PRADA HANDBAGS 3",images:["img/prada-h3-front.jpg","img/prada-h3-back.jpg","img/prada-h3-side.jpg"]},
{brand:"PRADA",category:"HANDBAGS",title:"PRADA HANDBAGS 4",images:["img/prada-h4-front.jpg","img/prada-h4-back.jpg","img/prada-h4-side.jpg"]},
{brand:"PRADA",category:"HANDBAGS",title:"PRADA HANDBAGS 5",images:["img/prada-h5-front.jpg","img/prada-h5-back.jpg","img/prada-h5-side.jpg"]},
{brand:"PRADA",category:"HANDBAGS",title:"PRADA HANDBAGS 6",images:["img/prada-h6-front.jpg","img/prada-h6-back.jpg","img/prada-h6-side.jpg"]},

{brand:"PRADA",category:"WALLETS",title:"PRADA WALLETS 1",images:["img/prada-w1-front.jpg","img/prada-w1-back.jpg","img/prada-w1-side.jpg"]},
{brand:"PRADA",category:"WALLETS",title:"PRADA WALLETS 2",images:["img/prada-w2-front.jpg","img/prada-w2-back.jpg","img/prada-w2-side.jpg"]},
{brand:"PRADA",category:"WALLETS",title:"PRADA WALLETS 3",images:["img/prada-w3-front.jpg","img/prada-w3-back.jpg","img/prada-w3-side.jpg"]},
{brand:"PRADA",category:"WALLETS",title:"PRADA WALLETS 4",images:["img/prada-w4-front.jpg","img/prada-w4-back.jpg","img/prada-w4-side.jpg"]},
{brand:"PRADA",category:"WALLETS",title:"PRADA WALLETS 5",images:["img/prada-w5-front.jpg","img/prada-w5-back.jpg","img/prada-w5-side.jpg"]},
{brand:"PRADA",category:"WALLETS",title:"PRADA WALLETS 6",images:["img/prada-w6-front.jpg","img/prada-w6-back.jpg","img/prada-w6-side.jpg"]},

{brand:"PRADA",category:"PURSES",title:"PRADA PURSES 1",images:["img/prada-p1-front.jpg","img/prada-p1-back.jpg","img/prada-p1-side.jpg"]},
{brand:"PRADA",category:"PURSES",title:"PRADA PURSES 2",images:["img/prada-p2-front.jpg","img/prada-p2-back.jpg","img/prada-p2-side.jpg"]},
{brand:"PRADA",category:"PURSES",title:"PRADA PURSES 3",images:["img/prada-p3-front.jpg","img/prada-p3-back.jpg","img/prada-p3-side.jpg"]},
{brand:"PRADA",category:"PURSES",title:"PRADA PURSES 4",images:["img/prada-p4-front.jpg","img/prada-p4-back.jpg","img/prada-p4-side.jpg"]},
{brand:"PRADA",category:"PURSES",title:"PRADA PURSES 5",images:["img/prada-p5-front.jpg","img/prada-p5-back.jpg","img/prada-p5-side.jpg"]},
{brand:"PRADA",category:"PURSES",title:"PRADA PURSES 6",images:["img/prada-p6-front.jpg","img/prada-p6-back.jpg","img/prada-p6-side.jpg"]},



{brand:"CHANEL",category:"HANDBAGS",title:"CHANEL HANDBAGS 1",images:["img/chanel-h1-front.jpg","img/chanel-h1-back.jpg","img/chanel-h1-side.jpg"]},
{brand:"CHANEL",category:"HANDBAGS",title:"CHANEL HANDBAGS 2",images:["img/chanel-h2-front.jpg","img/chanel-h2-back.jpg","img/chanel-h2-side.jpg"]},
{brand:"CHANEL",category:"HANDBAGS",title:"CHANEL HANDBAGS 3",images:["img/chanel-h3-front.jpg","img/chanel-h3-back.jpg","img/chanel-h3-side.jpg"]},
{brand:"CHANEL",category:"HANDBAGS",title:"CHANEL HANDBAGS 4",images:["img/chanel-h4-front.jpg","img/chanel-h4-back.jpg","img/chanel-h4-side.jpg"]},
{brand:"CHANEL",category:"HANDBAGS",title:"CHANEL HANDBAGS 5",images:["img/chanel-h5-front.jpg","img/chanel-h5-back.jpg","img/chanel-h5-side.jpg"]},
{brand:"CHANEL",category:"HANDBAGS",title:"CHANEL HANDBAGS 6",images:["img/chanel-h6-front.jpg","img/chanel-h6-back.jpg","img/chanel-h6-side.jpg"]},

{brand:"CHANEL",category:"WALLETS",title:"CHANEL WALLETS 1",images:["img/chanel-w1-front.jpg","img/chanel-w1-back.jpg","img/chanel-w1-side.jpg"]},
{brand:"CHANEL",category:"WALLETS",title:"CHANEL WALLETS 2",images:["img/chanel-w2-front.jpg","img/chanel-w2-back.jpg","img/chanel-w2-side.jpg"]},
{brand:"CHANEL",category:"WALLETS",title:"CHANEL WALLETS 3",images:["img/chanel-w3-front.jpg","img/chanel-w3-back.jpg","img/chanel-w3-side.jpg"]},
{brand:"CHANEL",category:"WALLETS",title:"CHANEL WALLETS 4",images:["img/chanel-w4-front.jpg","img/chanel-w4-back.jpg","img/chanel-w4-side.jpg"]},
{brand:"CHANEL",category:"WALLETS",title:"CHANEL WALLETS 5",images:["img/chanel-w5-front.jpg","img/chanel-w5-back.jpg","img/chanel-w5-side.jpg"]},
{brand:"CHANEL",category:"WALLETS",title:"CHANEL WALLETS 6",images:["img/chanel-w6-front.jpg","img/chanel-w6-back.jpg","img/chanel-w6-side.jpg"]},

{brand:"CHANEL",category:"PURSES",title:"CHANEL PURSES 1",images:["img/chanel-p1-front.jpg","img/chanel-p1-back.jpg","img/chanel-p1-side.jpg"]},
{brand:"CHANEL",category:"PURSES",title:"CHANEL PURSES 2",images:["img/chanel-p2-front.jpg","img/chanel-p2-back.jpg","img/chanel-p2-side.jpg"]},
{brand:"CHANEL",category:"PURSES",title:"CHANEL PURSES 3",images:["img/chanel-p3-front.jpg","img/chanel-p3-back.jpg","img/chanel-p3-side.jpg"]},
{brand:"CHANEL",category:"PURSES",title:"CHANEL PURSES 4",images:["img/chanel-p4-front.jpg","img/chanel-p4-back.jpg","img/chanel-p4-side.jpg"]},
{brand:"CHANEL",category:"PURSES",title:"CHANEL PURSES 5",images:["img/chanel-p5-front.jpg","img/chanel-p5-back.jpg","img/chanel-p5-side.jpg"]},
{brand:"CHANEL",category:"PURSES",title:"CHANEL PURSES 6",images:["img/chanel-p6-front.jpg","img/chanel-p6-back.jpg","img/chanel-p6-side.jpg"]},



{brand:"HERMES",category:"HANDBAGS",title:"HERMES HANDBAGS 1",images:["img/hermes-h1-front.jpg","img/hermes-h1-back.jpg","img/hermes-h1-side.jpg"]},
{brand:"HERMES",category:"HANDBAGS",title:"HERMES HANDBAGS 2",images:["img/hermes-h2-front.jpg","img/hermes-h2-back.jpg","img/hermes-h2-side.jpg"]},
{brand:"HERMES",category:"HANDBAGS",title:"HERMES HANDBAGS 3",images:["img/hermes-h3-front.jpg","img/hermes-h3-back.jpg","img/hermes-h3-side.jpg"]},
{brand:"HERMES",category:"HANDBAGS",title:"HERMES HANDBAGS 4",images:["img/hermes-h4-front.jpg","img/hermes-h4-back.jpg","img/hermes-h4-side.jpg"]},
{brand:"HERMES",category:"HANDBAGS",title:"HERMES HANDBAGS 5",images:["img/hermes-h5-front.jpg","img/hermes-h5-back.jpg","img/hermes-h5-side.jpg"]},
{brand:"HERMES",category:"HANDBAGS",title:"HERMES HANDBAGS 6",images:["img/hermes-h6-front.jpg","img/hermes-h6-back.jpg","img/hermes-h6-side.jpg"]},

{brand:"HERMES",category:"WALLETS",title:"HERMES WALLETS 1",images:["img/hermes-w1-front.jpg","img/hermes-w1-back.jpg","img/hermes-w1-side.jpg"]},
{brand:"HERMES",category:"WALLETS",title:"HERMES WALLETS 2",images:["img/hermes-w2-front.jpg","img/hermes-w2-back.jpg","img/hermes-w2-side.jpg"]},
{brand:"HERMES",category:"WALLETS",title:"HERMES WALLETS 3",images:["img/hermes-w3-front.jpg","img/hermes-w3-back.jpg","img/hermes-w3-side.jpg"]},
{brand:"HERMES",category:"WALLETS",title:"HERMES WALLETS 4",images:["img/hermes-w4-front.jpg","img/hermes-w4-back.jpg","img/hermes-w4-side.jpg"]},
{brand:"HERMES",category:"WALLETS",title:"HERMES WALLETS 5",images:["img/hermes-w5-front.jpg","img/hermes-w5-back.jpg","img/hermes-w5-side.jpg"]},
{brand:"HERMES",category:"WALLETS",title:"HERMES WALLETS 6",images:["img/hermes-w6-front.jpg","img/hermes-w6-back.jpg","img/hermes-w6-side.jpg"]},

{brand:"HERMES",category:"PURSES",title:"HERMES PURSES 1",images:["img/hermes-p1-front.jpg","img/hermes-p1-back.jpg","img/hermes-p1-side.jpg"]},
{brand:"HERMES",category:"PURSES",title:"HERMES PURSES 2",images:["img/hermes-p2-front.jpg","img/hermes-p2-back.jpg","img/hermes-p2-side.jpg"]},
{brand:"HERMES",category:"PURSES",title:"HERMES PURSES 3",images:["img/hermes-p3-front.jpg","img/hermes-p3-back.jpg","img/hermes-p3-side.jpg"]},
{brand:"HERMES",category:"PURSES",title:"HERMES PURSES 4",images:["img/hermes-p4-front.jpg","img/hermes-p4-back.jpg","img/hermes-p4-side.jpg"]},
{brand:"HERMES",category:"PURSES",title:"HERMES PURSES 5",images:["img/hermes-p5-front.jpg","img/hermes-p5-back.jpg","img/hermes-p5-side.jpg"]},
{brand:"HERMES",category:"PURSES",title:"HERMES PURSES 6",images:["img/hermes-p6-front.jpg","img/hermes-p6-back.jpg","img/hermes-p6-side.jpg"]},


{brand:"FENDI",category:"HANDBAGS",title:"FENDI HANDBAGS 1",images:["img/fendi-h1-front.jpg","img/fendi-h1-back.jpg","img/fendi-h1-side.jpg"]},
{brand:"FENDI",category:"HANDBAGS",title:"FENDI HANDBAGS 2",images:["img/fendi-h2-front.jpg","img/fendi-h2-back.jpg","img/fendi-h2-side.jpg"]},
{brand:"FENDI",category:"HANDBAGS",title:"FENDI HANDBAGS 3",images:["img/fendi-h3-front.jpg","img/fendi-h3-back.jpg","img/fendi-h3-side.jpg"]},
{brand:"FENDI",category:"HANDBAGS",title:"FENDI HANDBAGS 4",images:["img/fendi-h4-front.jpg","img/fendi-h4-back.jpg","img/fendi-h4-side.jpg"]},
{brand:"FENDI",category:"HANDBAGS",title:"FENDI HANDBAGS 5",images:["img/fendi-h5-front.jpg","img/fendi-h5-back.jpg","img/fendi-h5-side.jpg"]},
{brand:"FENDI",category:"HANDBAGS",title:"FENDI HANDBAGS 6",images:["img/fendi-h6-front.jpg","img/fendi-h6-back.jpg","img/fendi-h6-side.jpg"]},

{brand:"FENDI",category:"WALLETS",title:"FENDI WALLETS 1",images:["img/fendi-w1-front.jpg","img/fendi-w1-back.jpg","img/fendi-w1-side.jpg"]},
{brand:"FENDI",category:"WALLETS",title:"FENDI WALLETS 2",images:["img/fendi-w2-front.jpg","img/fendi-w2-back.jpg","img/fendi-w2-side.jpg"]},
{brand:"FENDI",category:"WALLETS",title:"FENDI WALLETS 3",images:["img/fendi-w3-front.jpg","img/fendi-w3-back.jpg","img/fendi-w3-side.jpg"]},
{brand:"FENDI",category:"WALLETS",title:"FENDI WALLETS 4",images:["img/fendi-w4-front.jpg","img/fendi-w4-back.jpg","img/fendi-w4-side.jpg"]},
{brand:"FENDI",category:"WALLETS",title:"FENDI WALLETS 5",images:["img/fendi-w5-front.jpg","img/fendi-w5-back.jpg","img/fendi-w5-side.jpg"]},
{brand:"FENDI",category:"WALLETS",title:"FENDI WALLETS 6",images:["img/fendi-w6-front.jpg","img/fendi-w6-back.jpg","img/fendi-w6-side.jpg"]},

{brand:"FENDI",category:"PURSES",title:"FENDI PURSES 1",images:["img/fendi-p1-front.jpg","img/fendi-p1-back.jpg","img/fendi-p1-side.jpg"]},
{brand:"FENDI",category:"PURSES",title:"FENDI PURSES 2",images:["img/fendi-p2-front.jpg","img/fendi-p2-back.jpg","img/fendi-p2-side.jpg"]},
{brand:"FENDI",category:"PURSES",title:"FENDI PURSES 3",images:["img/fendi-p3-front.jpg","img/fendi-p3-back.jpg","img/fendi-p3-side.jpg"]},
{brand:"FENDI",category:"PURSES",title:"FENDI PURSES 4",images:["img/fendi-p4-front.jpg","img/fendi-p4-back.jpg","img/fendi-p4-side.jpg"]},
{brand:"FENDI",category:"PURSES",title:"FENDI PURSES 5",images:["img/fendi-p5-front.jpg","img/fendi-p5-back.jpg","img/fendi-p5-side.jpg"]},
{brand:"FENDI",category:"PURSES",title:"FENDI PURSES 6",images:["img/fendi-p6-front.jpg","img/fendi-p6-back.jpg","img/fendi-p6-side.jpg"]},


{brand:"DIOR",category:"HANDBAGS",title:"DIOR HANDBAGS 1",images:["img/dior-h1-front.jpg","img/dior-h1-back.jpg","img/dior-h1-side.jpg"]},
{brand:"DIOR",category:"HANDBAGS",title:"DIOR HANDBAGS 2",images:["img/dior-h2-front.jpg","img/dior-h2-back.jpg","img/dior-h2-side.jpg"]},
{brand:"DIOR",category:"HANDBAGS",title:"DIOR HANDBAGS 3",images:["img/dior-h3-front.jpg","img/dior-h3-back.jpg","img/dior-h3-side.jpg"]},
{brand:"DIOR",category:"HANDBAGS",title:"DIOR HANDBAGS 4",images:["img/dior-h4-front.jpg","img/dior-h4-back.jpg","img/dior-h4-side.jpg"]},
{brand:"DIOR",category:"HANDBAGS",title:"DIOR HANDBAGS 5",images:["img/dior-h5-front.jpg","img/dior-h5-back.jpg","img/dior-h5-side.jpg"]},
{brand:"DIOR",category:"HANDBAGS",title:"DIOR HANDBAGS 6",images:["img/dior-h6-front.jpg","img/dior-h6-back.jpg","img/dior-h6-side.jpg"]},

{brand:"DIOR",category:"WALLETS",title:"DIOR WALLETS 1",images:["img/dior-w1-front.jpg","img/dior-w1-back.jpg","img/dior-w1-side.jpg"]},
{brand:"DIOR",category:"WALLETS",title:"DIOR WALLETS 2",images:["img/dior-w2-front.jpg","img/dior-w2-back.jpg","img/dior-w2-side.jpg"]},
{brand:"DIOR",category:"WALLETS",title:"DIOR WALLETS 3",images:["img/dior-w3-front.jpg","img/dior-w3-back.jpg","img/dior-w3-side.jpg"]},
{brand:"DIOR",category:"WALLETS",title:"DIOR WALLETS 4",images:["img/dior-w4-front.jpg","img/dior-w4-back.jpg","img/dior-w4-side.jpg"]},
{brand:"DIOR",category:"WALLETS",title:"DIOR WALLETS 5",images:["img/dior-w5-front.jpg","img/dior-w5-back.jpg","img/dior-w5-side.jpg"]},
{brand:"DIOR",category:"WALLETS",title:"DIOR WALLETS 6",images:["img/dior-w6-front.jpg","img/dior-w6-back.jpg","img/dior-w6-side.jpg"]},

{brand:"DIOR",category:"PURSES",title:"DIOR PURSES 1",images:["img/dior-p1-front.jpg","img/dior-p1-back.jpg","img/dior-p1-side.jpg"]},
{brand:"DIOR",category:"PURSES",title:"DIOR PURSES 2",images:["img/dior-p2-front.jpg","img/dior-p2-back.jpg","img/dior-p2-side.jpg"]},
{brand:"DIOR",category:"PURSES",title:"DIOR PURSES 3",images:["img/dior-p3-front.jpg","img/dior-p3-back.jpg","img/dior-p3-side.jpg"]},
{brand:"DIOR",category:"PURSES",title:"DIOR PURSES 4",images:["img/dior-p4-front.jpg","img/dior-p4-back.jpg","img/dior-p4-side.jpg"]},
{brand:"DIOR",category:"PURSES",title:"DIOR PURSES 5",images:["img/dior-p5-front.jpg","img/dior-p5-back.jpg","img/dior-p5-side.jpg"]},
{brand:"DIOR",category:"PURSES",title:"DIOR PURSES 6",images:["img/dior-p6-front.jpg","img/dior-p6-back.jpg","img/dior-p6-side.jpg"]},
];

let currentSelectedBrand="";

function selectBrand(brandname){
    currentSelectedBrand=brandname;

    document.getElementById('selected-brand-title').innerText=brandname;
    document.getElementById('BRANDSGRID').classList.add('hidden');
    document.getElementById('products-section').classList.remove('hidden');

    let buttons=document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if(buttons[0]) buttons[0].classList.add('active');

    displayProducts('all');
}

function displayProducts(category){
    let gridContainer=document.getElementById('products-grid-container');
    if(!gridContainer)return;
    gridContainer.innerHTML=""

    let filteredProducts=allProductsData.filter(product =>{
        return product.brand.toUpperCase()===currentSelectedBrand.toUpperCase()&&(category==='all'|| product.category.toLowerCase()===category.toLowerCase());
    });

    filteredProducts.forEach(product => {
        let productHTML = `
            <div class="product-item" onclick="openProductDetail('${product.title}','${encodeURIComponent(JSON.stringify(product.images))}')">
                <img src="${product.images[0]}" alt="${product.title}">
                <p>${product.title}</p>
            </div>
        `;
        gridContainer.innerHTML += productHTML;
    });
}


function filterCategory(category){
    let buttons=document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if(window.event && window.event.target){
        window.event.target.classList.add('active');
    }

    displayProducts(category);
}



function openProductDetail(title,images){
    images=JSON.parse(decodeURIComponent(images));
    document.getElementById('products-section').classList.add('hidden');
    document.getElementById('product-detail-section').classList.remove('hidden');

    document.getElementById('product-detail-title').innerText=title;
    document.getElementById('main-product-img').src=images[0];

    let thumbContainer=document.getElementById('thumbnails-container');
    if(!thumbContainer)return;
    thumbContainer.innerHTML="";

    images.forEach(imgUrl =>{
        let thumbImg=
        document.createElement('img');
        thumbImg.src=imgUrl;
        thumbImg.classList.add('thumbnail-item');
        thumbImg.onclick=function(){
            document.getElementById('main-product-img').src=imgUrl;
        };
        thumbContainer.appendChild(thumbImg);
    });
}



function goBackToBrands(){
    document.getElementById('BRANDSGRID').classList.remove('hidden');
    document.getElementById('products-section').classList.add('hidden');
}

function goBackToProducts(){
    document.getElementById('product-detail-section').classList.add('hidden');
    document.getElementById('products-section').classList.remove('hidden');
} 

