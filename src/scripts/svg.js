
function setProgressCircle(percent, circleClass) {
  const circle = document.querySelectorAll(circleClass);
  const radius = circle[0].r.baseVal.value;
const circumference = radius * 2 * Math.PI;
circle.forEach((path)=>{
  path.style.strokeDasharray = `${circumference} ${circumference}`;
  path.style.strokeDashoffset = circumference;
  const offset = circumference - percent / 100 * circumference;
  path.style.strokeDashoffset = offset;
  });
}

setProgressCircle(80, '.circle__progress-ring-first');
setProgressCircle(75, '.circle__progress-ring-second');
setProgressCircle(60, '.circle__progress-ring-third');

function setProgressRect(percent, rectClass) {
  const rect = document.querySelectorAll(rectClass);
  rect.forEach((path)=>{
    let length = path.getTotalLength();
    console.log(length);
    let to = length * ((100-percent)/100);
    path.getBoundingClientRect();
    path.style.strokeDashoffset = Math.max(0, to);
  });
}

setProgressRect(80,'.team__progress-path--first');
setProgressRect(65,'.team__progress-path--second');
setProgressRect(75,'.team__progress-path--third');
