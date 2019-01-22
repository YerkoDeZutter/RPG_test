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
  [11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11],
  [11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11],
  [11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11],
  [11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11],
  [11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11],
  [11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11],
  [11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
]

const map2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

let fullBlock2 = [];

map2.forEach((row2, y2) => {
  row2.forEach((block2, x2) => {

    fullBlock2.push(block2 * blockSize);

  })
})

// console.log(fullBlock2[x]);


map.forEach((row, y) => {
  row.forEach((block, x) => {
    let fullBlock = block * blockSize;
    let blockPlacey = y * blockSize;
    let blockPlacex = x * blockSize;
    loadImage('img/RPG_path.png').then(image => {
      c.drawImage(image,
        fullBlock2[x * y], fullBlock,
        blockSize, blockSize,

        blockPlacex, blockPlacey,
        blockSize, blockSize)
    })
  })
})
