// Set your start date here (YYYY-MM-DDTHH:MM:SS format)
const startDate = new Date('2022-10-18T11:30:00');

function updateTogetherTime() {
  const now = new Date();
  let diff = Math.floor((now - startDate) / 1000); // difference in seconds

  const days = Math.floor(diff / (24 * 3600));
  diff %= 24 * 3600;
  const hours = Math.floor(diff / 3600);
  diff %= 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  const togetherTime = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  const el = document.querySelector('.together-time');
  if (el) el.textContent = togetherTime;
}

setInterval(updateTogetherTime, 1000);
updateTogetherTime(); 