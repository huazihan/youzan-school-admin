class ProductData {

    static key = "product_data"

    static defaultData = [
        {
            key: '1',
            name: '照烧鸡排饭',
            desc: '很好吃的鸡排饭',
            price: '12.00',
            todaySaleNum: 4,
            saleNum: 32,
            category: '主食',
            status: 1,
            imgList: [
                require('../assets/img/product/product1.jpg'),
                require('../assets/img/product/product2.jpg')
            ],
        },
        {
            key: '2',
            name: '鸡公煲',
            desc: '鸡公煲哈哈哈',
            price: '18.00',
            saleNum: 12,
            category: '主食',
            todaySaleNum: 8,
            status: 1,
            imgList: [
                require('../assets/img/product/product1.jpg'),
                require('../assets/img/product/product2.jpg')
            ]
        },
        {
            key: '3',
            name: '蟹黄堡',
            desc: '珊迪会喜欢这个吗',
            price: '8.00',
            saleNum: 6,
            category: '小吃',
            todaySaleNum: 3,
            status: 1,
            imgList: [
                require('../assets/img/product/product1.jpg'),
                require('../assets/img/product/product2.jpg')
            ]
        },
        {
            key: '4',
            name: '煲仔饭',
            desc: '正宗煲仔饭，真的“煲仔”',
            price: '14.50',
            saleNum: 14,
            todaySaleNum: 5,
            category: '主食',
            status: 1,
            imgList: [
                require('../assets/img/product/product1.jpg'),
                require('../assets/img/product/product2.jpg')
            ]
        }
    ]

    static pushProduct(product) {
        const list = this.getData()
        product.key = (list.length + 1) + ''
        list.push(product)
        localStorage.setItem(this.key, JSON.stringify(list))
    }

    static setData(data) {
        localStorage.setItem(this.key, JSON.stringify(data))
    }

    static getData() {
        let data = JSON.parse(localStorage.getItem(this.key))
        if (data == null) {
            localStorage.setItem(this.key, JSON.stringify(this.defaultData))
            data = JSON.parse(localStorage.getItem(this.key))
        }
        return data
    }

}

export default ProductData