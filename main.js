var soundEls = Array.from(document.querySelectorAll('.soundcite'));

var convertMillisecToHrMinSec = (time) => {
  let date = new Date(time);
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hr = hr < 10 ? '0' + hr : hr;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  return hr + ':' + min + ':' + sec; //01:27:55
};

soundEls.forEach(function (sound) {
  var parent = sound.parentNode;
  var milliseconds = sound.getAttribute('data-end');
  console.log('milliseconds', milliseconds);
  var time = convertMillisecToHrMinSec(milliseconds);
  console.log('time', time);
});
