class TodayData {

    static key = "today_data"

    static setData(data) {
        localStorage.setItem(this.key, JSON.stringify(data))
    }

     static getData() {
        const todayOrder = parseInt("" + Math.random() * 50) + 5;
        const todayTurnover = todayOrder * ((Math.random() * 15) + 1)
        const todayPV = parseInt("" + (Math.random() * 120 + 20))

        const defaultData = {
            todayOrder: todayOrder,
            todayTurnover: todayTurnover,
            todayPV: todayPV
        }

        let data = JSON.parse(localStorage.getItem(this.key))
        if (data == null) {
            localStorage.setItem(this.key, JSON.stringify(defaultData))
            data = JSON.parse(localStorage.getItem(this.key))
        }
        return data
    }

}

export default TodayData