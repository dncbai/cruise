let windows = require('../assets/os-icons/windows.png')
let ubuntu = require('../assets/os-icons/ubuntu.png')
let suse = require('../assets/os-icons/suse.png')
let debin = require('../assets/os-icons/debin.png')
let centOs = require('../assets/os-icons/cent_os.png')

const firstUpperCase = (str) => {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
}

const getRandomPic = () => {
  let picArr = [windows, ubuntu, suse, debin, centOs]
  let random = Math.round(Math.random() * (picArr.length))
  return picArr[random]
}

export default {
  firstUpperCase: firstUpperCase,
  getRandomPic: getRandomPic
}
