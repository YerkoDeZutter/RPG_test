function loadImage(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.src = url;
  });
}


const blockSize = 32;


var canvas = document.querySelector("canvas");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

canvas.width = 500;
canvas.height = 500;


var c = canvas.getContext("2d");

c.fillStyle = "#000";
c.fillRect(0, 0, canvas.width, canvas.height);



const map = [
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
  [11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11],
  [11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11],
  [11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11],
  [11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11],
  [11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11],
  [0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2],
  [11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11],
  [11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11],
  [11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11],
  [11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
]

const map2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

let fullBlock2 = [];
// let map2y = 0;

map2.forEach((row, y) => {
  // map2y ++
  row.forEach((block, x) => {



    fullBlock2.push(block * blockSize);

  })
})

// console.log(fullBlock2[x]);

// let arrayNum = 0;
let curY2 = 0;
map.forEach((row, y) => {
  row.forEach((block, x) => {
    let fullBlock = block * blockSize;
    let blockPlacey = y * blockSize;
    let blockPlacex = x * blockSize;
    loadImage('img/RPG_path.png').then(image => {
      curY2 = map2[y];
      curX2 = (curY2[x] * blockSize);
      console.log(curX2);
      c.drawImage(image,
        curX2, fullBlock,
        blockSize, blockSize,

        blockPlacex, blockPlacey,
        blockSize, blockSize)
    })
  })
})
