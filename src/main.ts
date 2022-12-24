import './style.css';

const POUTOUX = [
  'poutou-1.png',
  'poutou-2.png',
  'poutou-3.png',
  'poutou-4.png',
  'poutou-5.png',
  'poutou-6.png',
]

const canvas = document.getElementById('poutoux') as HTMLCanvasElement;
canvas.width = 7680;
canvas.height = 4320;
const ctx = canvas.getContext('2d');

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((ok) => {
    var poutou = new Image();
    poutou.onload = () => {
      ok(poutou)
    }
    poutou.src = url;
  })
}

function loadImages() {
  return Promise.all(POUTOUX.map(src => loadImage(`./${src}`)))
}

if (ctx) {

  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const poutoux = await loadImages();

  let x, y, randomPoutou;

  for (let i = 0; i < 500; i++) {
    x = Math.floor(Math.random() * canvas.width);
    y = Math.floor(Math.random() * canvas.height);
    ctx.save();
    // ctx.rotate(45 * Math.PI / 45);
    randomPoutou = poutoux[Math.floor(Math.random() * POUTOUX.length)];
    ctx.drawImage(randomPoutou, x - (randomPoutou.width * 2), y - (randomPoutou.height * 2), randomPoutou.width * 4, randomPoutou.height * 4);
    ctx.restore();
  }

}
