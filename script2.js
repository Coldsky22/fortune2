const prizes = [
  {
    id: 1,
    name: "Бефстроганов из говядины в сливках с картофельным пюре",
    image: "./img/1.png",
  },
  {
    id: 2,
    name: "Борщ с телятиной без сметаны",
    image: "./img/10.png"
  },
  {
    id: 3,
    name: "Гедзе с курицей в соусе Чили",
    image: "./img/9.png"
  },
  {
    id: 4,
     name: "Куриные котлеты с пюре и сырным соусом",
    image: "./img/8.png"
  },
  {
    id: 5,
      name: "Куриные фрикадельки с рисом и овощами ",
    image: "./img/7.png"
  },
  {
    id: 6,
    name: "Паста с морепродуктами",
    image: "./img/6.png"
  },
  {
    id: 7,
    name: "Птитим с вишней и сливочным соусом",
    image: "./img/5.png"
  },
  {
    id: 8,
      name: "Традиционный плов с говядиной",
    image: "./img/4.png"
  },
  {
    id: 9,
       name: "Филе белой рыбы, запеченное в соусе мисо, с копчеными сливками и картофельным пюре",
    image: "./img/3.png"
  },
  {
    id: 10,
     name: "Шоколадный брауни",
    image: "./img/2.png"
  },
];
let deg = [36, 72, 108, 144, 180, 216, 252, 288, 324, 360];
let isSpinning = false;
let currentRotation = 0;
const spinButton = document.getElementById("spinButton");
function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;
  const randomDegree = deg[Math.trunc(Math.random() * deg.length)];
  console.log(randomDegree);
  const fullRotations = 360 + randomDegree;
  console.log(fullRotations);
  const newRotation = currentRotation + fullRotations;
  console.log(newRotation);
  currentRotation = newRotation;
  console.log(currentRotation);
  const wheel = document.getElementById("wheel");
  wheel.style.transform = `rotate(${newRotation}deg)`;
  const sectorAngle = 360 / prizes.length;
  console.log(sectorAngle);
  const normalizedAngle = (360 - (newRotation % 360)) % 360;
  console.log(normalizedAngle);
  const winningIndex = Math.floor(normalizedAngle / sectorAngle);
  console.log(winningIndex);
  const prize = prizes[winningIndex];
  console.log(prize);
  localStorage.setItem('prize', JSON.stringify(prize));
  console.log(localStorage.getItem('prize'));
  setTimeout(() => {
    isSpinning = false;
  }, 4000);
}
function updateStats() {
  const stats = phoneStorage.getStats();
  document.getElementById("participantCount").textContent =
    stats.totalParticipants;
  document.getElementById("participantCount2").textContent =
    stats.totalParticipants;
  document.getElementById("prizesCount").textContent = stats.totalParticipants;
}
spinButton.addEventListener("click", () => {
  setTimeout(() => {
    spinWheel();
  }, 500);
  setTimeout(() => {
    location.href = "./index3.html";
  }, 8000);
});