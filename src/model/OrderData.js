class OrderData {

    static key = "order_data"

    static generationData(length) {

        let result = []

        const productName = ['照烧鸡排饭', '鸡公煲', '蟹黄堡', '煲仔饭']
        const price = ['12.00', '18.00', '8.00', '14.5']
        const payOperation = ['微信支付', '支付宝', '网银', 'QQ钱包']

        for (let i = 0; i < length; i++) {
            const productIndex = parseInt('' + Math.random() * productName.length)

            const count = parseInt('' + (Math.floor(Math.random() * 3) + 1))

            const order = {
                orderID: '' + parseInt('' + Math.floor((Math.random() * 99999999) + 10000000)),
                productName: productName[productIndex],
                count: count,
                price: price[productIndex],
                amount: (parseFloat(price[productIndex]) * count).toFixed(2),
                payOperation: payOperation[parseInt('' + Math.random() * payOperation.length)],
                userPhone: '' + Math.floor((Math.random() * 19999999999) + 13000000000),
                // 0: 待接单 1: 已接单 2: 配送中 3: 已完成
                status: Math.floor((Math.random() * 3))
            }

            result.push(order)
        }

        return result
    }

    static setData(data) {
        localStorage.setItem(this.key, JSON.stringify(data))
    }

    static getData() {
        let data = JSON.parse(localStorage.getItem(this.key))
        if (data == null) {
            localStorage.setItem(this.key, JSON.stringify(this.generationData(7)))
            data = JSON.parse(localStorage.getItem(this.key))
        }
        return data
    }

}

export default OrderData