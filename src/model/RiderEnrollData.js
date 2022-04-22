class RiderEnrollData {

    static key = "rider_enroll_data"

    static setData(data) {
        localStorage.setItem(this.key, JSON.stringify(data))
    }

    static getData() {
        const defaultData = [
            {
                key: '1',
                name: '刘大川',
                id: '421122200010107013',
                phone: '18872728964',
                applicantTime: '2022-03-31 13:25',
            },
            {
                key: '2',
                name: '曾浩',
                id: '421224200210318013',
                phone: '15831937183',
                applicantTime: '2022-03-28 14:30'
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

export default RiderEnrollData