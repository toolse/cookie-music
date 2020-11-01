export default {
    install(Vue) {
        // 播放量单位换算
        Vue.filter('playCount', target => {
            let numStr = target.toString()
            // 4位数以内直接返回
            if (numStr.length <= 4) return target
            // 大于8位数显示亿
            else if (numStr.length >= 9) {
                return Math.floor(target / 100000000).toFixed(0) + '亿'
            }
            // 大于6位数显示万
            else if (numStr.length >= 5) {
                return Math.floor(target / 10000).toFixed(0) + '万'
            }
        })
        // 个位数补零
        Vue.filter('addZeros', target => {
            return target.toString().padStart(2, '0')
        })

        // 毫秒转换为分钟
        Vue.filter('playTime', target => {
            let min = Math.floor(target / 1000 / 60)
            let sec = Math.floor((target / 1000) % 60)
            return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        })

        // 时间戳转换
        Vue.filter('timeStamp', target => {
            let time = new Date(target)
            let year = time.getFullYear()
            let month = time.getMonth() + 1
            let date = time.getDate()
            let hour = time.getHours()
            let minute = time.getMinutes()
            let second = time.getSeconds()
            return `${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}
            ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`
        })

        // 时间戳转换多少月前
        Vue.filter('time', target => {
            // 现在的时间
            let newTime = new Date()
            // 获取时间差
            let timeDiff = newTime - target
            // 定义分钟
            let minute = timeDiff / (1000 * 60)
            // 定义小时
            let hour = timeDiff / (1000 * 60 * 60)
            // 定义天
            let day = timeDiff / (1000 * 60 * 60 * 24)
            // 定义月
            let month = timeDiff / (1000 * 60 * 60 * 24 * 30)
            // 定义年
            let year = timeDiff / (1000 * 60 * 60 * 24 * 30 * 12)

            // 刚刚
            if (minute === 0) {
                return Math.floor(minute) + '刚刚'
            }
            // 分钟前
            else if (minute < 60 && minute > 0) {
                return Math.floor(minute) + '分钟前'
            }
            // 小时前
            else if (hour < 24 && hour > 0) {
                return Math.floor(hour) + '小时前'
            }
            // 天前
            else if (day < 7 && day > 0) {
                return Math.floor(day) + '天前'
            }
            // 周前
            else if (day < 29 && day > 6) {
                return Math.floor(day / 7) + '周前'
            }
            // 月前
            else if (month < 12 && month > 0) {
                return Math.floor(month) + '月前'
            }
            // 年前
            else if (month >= 12) {
                return Math.floor(year) + '年前'
            }
        })
    }
}
