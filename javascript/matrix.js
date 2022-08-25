
export default function Matrix() {

const state = {
  fps: 25,
  color: "#ffffff",
  charset: "0123456789ABCDEF"
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let w, h, p;
const resize = () => {
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;

  p = Array(Math.ceil(w / 10)).fill(0);
};
window.addEventListener("resize", resize);
resize();

const random = (items) => items[Math.floor(Math.random() * items.length)];

const draw = () => {
  ctx.fillStyle = "rgba(17,24,39,0.05)";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = state.color;

  for (let i = 0; i < p.length; i++) {
    let v = p[i];
    ctx.fillText(random(state.charset), i * 10, v);
    p[i] = v >= h || v >= 10000 * Math.random() ? 0 : v + 10;
  }
};

let interval = setInterval(draw, 1000 / state.fps);
fpsCtrl.onFinishChange((fps) => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(draw, 1000 / fps);
});
}