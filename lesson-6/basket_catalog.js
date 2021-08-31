const cartElem = {
    render(good) {
        return ` <div class="good">
        <div><em>Наименование товара</em>: ${good.product_name}</div>
        <div><em>Цена за шт</em>: ${good.price}</div>
        <div><em> Количество</em>: ${good.quantity}</div>
        <div><em> Стоимость</em>: ${good.price * good.quantity}</div>
    </div>`

    },
}


let basket = {
    cartListBlock: null,
    cartButton: null,
    cartElem,
    goods: [
        {
            id_product: 1,
            product_name: 'Футболка',
            price: 400,
            quantity: 3,
        },
        {
            id_product: 2,
            product_name: 'Джинсы',
            price: 1200,
            quantity: 2,
        },
        {
            id_product: 3,
            product_name: 'Толстовка',
            price: 890,
            quantity: 1,
        },
        {
            id_product: 4,
            product_name: 'Майка',
            price: 1000,
            quantity: 2,
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartElem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.numberPosition()} позиций(я) стоимостью ${this.getSummProduct()} рублей`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },

    getSummProduct() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    numberPosition() {
        return this.goods.reduce(function (quantity, good) {
            return quantity + good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = []
        this.render()
    },
    clearBasket() {
        this.cartListBlock.innerHTML = null
        this.init()
    }

}
basket.init()

const catalog = {
    catalogListBlock: null,
    basket,
    goods: [
        {
            id_product: 1,
            product_name: 'Футболка',
            price: 400,
            quantity: 1,
        },
        {
            id_product: 2,
            product_name: 'Джинсы',
            price: 1200,
            quantity: 1,
        },
        {
            id_product: 3,
            product_name: 'Толстовка',
            price: 890,
            quantity: 1,
        },
        {
            id_product: 4,
            product_name: 'Майка',
            price: 1000,
            quantity: 1,
        },
        {
            id_product: 5,
            product_name: 'Куртка',
            price: 3000,
            quantity: 1,
        },
        {
            id_product: 6,
            product_name: 'Жилет',
            price: 2000,
            quantity: 1,
        },
    ],
    catalogElemRender(good) {
        let catalogHTML = document.querySelector('.catalog')
        good.forEach(({ id_product, product_name, price, quantity }) => {
            let elDiv = document.createElement('div')
            elDiv.className = 'goodCatalog'
            elDiv.innerHTML = `<div><em>Наименование товара</em>: ${product_name}</div>
            <div><em>Цена за шт</em>: ${price}</div>`
            let buttonCatalog = document.createElement('button')
            buttonCatalog.innerHTML = 'Добавить в корзину'
            buttonCatalog.addEventListener('click', this.addBasket.bind(this, id_product))
            elDiv.appendChild(buttonCatalog)
            catalogHTML.appendChild(elDiv)

        })

    },
    init() {
        this.catalogListBlock = document.querySelector('.catalog')
        this.render()

    },

    render() {
        if (this.goods.length) {
            this.catalogElemRender(this.goods)
        } else {
            this.catalogListBlock.textContent = 'Каталог пуст'

        }


    },
    addBasket(element) {
        const index = this.getIdProductBasketArr().indexOf(element)
        if (index === -1) {
            this.addProductBasket(element)
            this.basket.clearBasket()
        }
        else {
            this.quantityPlus(element)
            this.basket.clearBasket()

        }
    },
    getIdProductBasketArr() {
        let arr = []
        this.basket.goods.forEach(({ id_product }) => {
            arr.push(id_product)
        })
        return arr

    },
    addProductBasket(id) {
        this.goods.forEach((good) => {
            if (id === good.id_product)
                this.basket.goods.push(good)
        })
    },
    quantityPlus(id) {
        this.basket.goods.forEach((good) => {
            if (id === good.id_product) {
                good.quantity++
                console.log(good)
            }
        })


    }
}


catalog.init()