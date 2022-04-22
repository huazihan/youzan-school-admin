import DateUtil from "@/util/DateUtil";

class RiderData {

    static key = "rider_data"

    static setData(data) {
        localStorage.setItem(this.key, JSON.stringify(data))
    }

    static enroll(rider) {
        let data = JSON.parse(localStorage.getItem(this.key))
        let riderS = {
            key: '' + (data.length + 1),
            name: rider.name,
            phone: rider.phone,
            todayOrderNum: 0,
            orderNum: 0,
            status: 0,
            enrollDate: DateUtil.format(new Date())
        }
        data.push(riderS)
        localStorage.setItem(this.key, JSON.stringify(data))
    }

    static getData() {
        const defaultData = [
            {
                key: '1',
                name: '腾新杰',
                phone: '13319890604',
                todayOrderNum: 3,
                orderNum: 37,
                status: 0,
                enrollDate: '2022-03-30'
            },
            {
                key: '2',
                name: '何佳乐',
                phone: '17322890412',
                todayOrderNum: 7,
                orderNum: 13,
                status: 1,
                enrollDate: '2022-03-30'
            },
            {
                key: '3',
                name: '彭亮',
                phone: '13220890604',
                todayOrderNum: 10,
                orderNum: 45,
                status: 2,
                enrollDate: '2022-03-28'
            },
            {
                key: '4',
                name: '栾顺宇',
                phone: '1883197391',
                todayOrderNum: 8,
                orderNum: 9,
                status: 2,
                enrollDate: '2022-03-29'
            }
        ]
        let data = JSON.parse(localStorage.getItem(this.key))
        if (data == null) {
            localStorage.setItem(this.key, JSON.stringify(defaultData))
            data = JSON.parse(localStorage.getItem(this.key))
        }
        return data
    }

}

export default RiderData