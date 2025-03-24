function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let merdian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || hours;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}${merdian}`;
    document.getElementById("clock").textContent = timeString;
}

setInterval(updateTime, 1000);