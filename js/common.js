// 封装打印日志方法
const log = console.log.bind(console)
// 生成图片对象方法
const imageFromPath = function (src) {
  let img = new Image()
  img.src = './images/' + src
  return img
}
// 原生动画参数
const keyframesOptions = {
  iterations: 1,
  iterationStart: 0,
  delay: 0,
  endDelay: 0,
  direction: 'alternate',
  duration: 3000,
  fill: 'forwards',
  easing: 'ease-out',
}
// 图片素材路径
const allImg = {
  startBg: 'coverBg.jpg',                         // 首屏背景图
  bg: 'background1.jpg',                          // 游戏背景
  bullet: 'bullet.png',                           // 子弹普通状态
  sunback: 'sunback.png',                         // 阳光背景框
  loading: {                                      // loading 画面
    write: {
      path: 'loading/loading_*.png',
      len: 3,
    },
  },
  plantsCard: {                                               // 植物卡片
    sunflower: {  // 向日葵
      img: 'cards/plants/SunFlower.png',
      imgG: 'cards/plants/SunFlowerG.png',
    },
    peashooter: { // 豌豆射手
      img: 'cards/plants/Peashooter.png',
      imgG: 'cards/plants/PeashooterG.png',
    },
  },
  plants: {                                                   // 植物
    sunflower: {  // 向日葵
      img: 'plants/sunflower/idle.png',
    },
    peashooter: { // 豌豆射手
      img: 'plants/peashooter/idle.png',
    },
  },
  zombies: {                                            // 僵尸
    idle: 'zombies/idle.png',
    run: 'zombies/run.png',
    attack: 'zombies/attack.png',
    die: 'zombies/die.png',
  }
}