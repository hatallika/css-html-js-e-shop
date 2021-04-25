class ProductsList {
    constructor(container = '.fetured__items'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }

    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'cheater', price: 68, img: 'cheater.jpg'},
            {id: 2, title: 'red shirt', price: 25, img: 'red-shirt.jpg'},
            {id: 3, title: 'sweather', price: 42, img: 'sweater.jpg'},
            {id: 4, title: 'trousers', price: 50, img: 'trousers.jpg'},
            {id: 5, title: 'sweatshirt', price: 39, img: 'sweatshirt.jpg'},
            {id: 6, title: 'white t-shirt', price: 25, img: 'white_t-shirt.jpg'},
            {id: 7, title: 'white shirt', price: 40, img: 'white_shirt.jpg'},
            {id: 8, title: 'leather jacket', price: 21, img: 'leather_jacket.jpg'},
            {id: 9, title: 'khakis shirt', price: 15, img: 'khaki_shirt.jpg'},
        ]
    }

    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
}


class ProductItem {
    constructor(product){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img;
    }

    render(){
        return `<li class="fetured-item" data-id="${this.id}">
                <a href="#" class="fetured-item__link">
                    <div class="fetured-item__image">
                        <div class="fetured-item__image-before">
                            <div class="fetured-item__image-before-button">Add to Cart</div>
                        </div>
                        <img class="fetured-item__pic" src="./img/articuls/${this.img}" alt="${this.title}" width="360" height="420"></div>
                    <div class="fetured-item__inner">  
                        <h3 class="fetured-item__title">${this.title}</h3>
                        <p class="fetured-item__text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p class="fetured-item__cost">$${(this.price).toFixed(2)}</p>
                    </div> 
                </a>        
            </li>` 
    }
}

let list = new ProductsList();
list.render();

// const products = [
//     {id: 1, title: 'cheater', price: 68, img: 'cheater.jpg'},
//     {id: 2, title: 'red shirt', price: 25, img: 'red-shirt.jpg'},
//     {id: 3, title: 'sweather', price: 42, img: 'sweater.jpg'},
//     {id: 4, title: 'trousers', price: 50, img: 'trousers.jpg'},
//     {id: 5, title: 'sweatshirt', price: 39, img: 'sweatshirt.jpg'},
//     {id: 6, title: 'white t-shirt', price: 25, img: 'white_t-shirt.jpg'},
//     {id: 7, title: 'white shirt', price: 40, img: 'white_shirt.jpg'},
//     {id: 8, title: 'leather jacket', price: 21, img: 'leather_jacket.jpg'},
//     {id: 9, title: 'khakis shirt', price: 15, img: 'khaki_shirt.jpg'},    
// ];

// const renderProduct = (item) => {
//     return `<li class="fetured-item">
//                 <a href="#" class="fetured-item__link">
//                     <div class="fetured-item__image">
//                         <div class="fetured-item__image-before">
//                             <div class="fetured-item__image-before-button">Add to Cart</div>
//                         </div>
//                         <img class="fetured-item__pic" src="./img/articuls/${item.img}" alt="${item.title}" width="360" height="420"></div>
//                     <div class="fetured-item__inner">  
//                         <h3 class="fetured-item__title">${item.title}</h3>
//                         <p class="fetured-item__text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
//                         <p class="fetured-item__cost">$${(item.price).toFixed(2)}</p>
//                     </div> 
//                 </a>        
//             </li>`
// };

// const renderPage = list => {    
//     document.querySelector('.fetured__items').innerHTML = list.map(item => renderProduct(item)).join("");
// };

// renderPage(products); 

