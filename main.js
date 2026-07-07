



let currentBrandName = ""; 
let currentCategoryName = ""; 

function showPage(pageId) {
    document.getElementById("brands-page").classList.add("hidden");
    document.getElementById("categories-page").classList.add("hidden");
    document.getElementById("products-page").classList.add("hidden");
    document.getElementById("detail-page").classList.add("hidden");
    
    document.getElementById(pageId).classList.remove("hidden");
}

function selectBrand(brandName) {
    currentBrandName = brandName;
    document.getElementById("selected-brand-title").innerText = brandName.toUpperCase();
    showPage("categories-page");
}

function selectCategory(categoryName) {
    currentCategoryName = categoryName;
    document.getElementById("products-title").innerText = `${currentBrandName} ${categoryName}`;
    
    let jsonCategory = categoryName;
    if (categoryName === 'WALLETS') jsonCategory = 'WALLET';
    if (categoryName === 'PURSES') jsonCategory = 'PURSE';

    let brandMap = {
        'GUCCI': 1,
        'LOUIS VUITTON': 2,
        'PRADA': 3,
        'CHANEL': 4,
        'FENDI': 5,
        'HERMES': 6
    };
    let targetBrandId = brandMap[currentBrandName.toUpperCase()];

    fetch('../api/product.json')
        .then(response => {
            if (!response.ok) throw new Error("Product JSON file not found!");
            return response.json();
        })
        .then(allProducts => {
            let filtered = allProducts.filter(p => {
                return p["brand-id"] == targetBrandId && 
                       p.category.toUpperCase() === jsonCategory.toUpperCase();
            });

            displayProducts(filtered);
            showPage("products-page");
        })
        .catch(error => console.error("", error));
}

function displayProducts(productsList) {
    const container = document.getElementById("products-container");
    container.innerHTML = ""; 

    if (productsList.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>No products found in this category.</p>";
        return;
    }

    productsList.forEach(product => {
        container.innerHTML += `
            <div class="card" onclick="showProductDetail('${product.id}')">
                <img src="${product.images[0]}" alt="${product.title}" style="width:100%; height:auto;">
                <h4>${product.title}</h4>
                <p style="color: black; font-weight: bold;">${product.price}</p>
            </div>
        `;
    });
}

function showProductDetail(productId) {
    fetch('../api/product.json')
        .then(res => res.json())
        .then(allProducts => {
            let product = allProducts.find(p => p.id === productId); 
            
            if (product) {
                const detailContainer = document.getElementById("detail-container");
                detailContainer.innerHTML = `
                    <h2>${product.title}</h2>
                    <p class="price">${product.price}</p>
                    
                    <div class="product-angles-grid" style="display: flex; gap: 15px; justify-content: center; margin: 20px 0;">
                        <div>
                            <p><b>Front View</b></p>
                            <img src="${product.images[0]}" alt="Front" style="width: 200px; height: auto;">
                        </div>
                        <div>
                            <p><b>Back View</b></p>
                            <img src="${product.images[1] || product.images[0]}" alt="Back" style="width: 200px; height: auto;">
                        </div>
                        <div>
                            <p><b>Side View</b></p>
                            <img src="${product.images[2] || product.images[0]}" alt="Side" style="width: 200px; height: auto;">
                        </div>
                    </div>
                    
                    <p class="description">${product.description || 'BRAND'}</p>
                `;
                
                showPage("detail-page");
            }
        })
        .catch(error => console.error("", error));
}

