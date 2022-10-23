const showTime = () => {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    hours = hours % 12;
    hours = hours ? hours : '12';

    const pm = hours < 12 ? "AM" : "PM"

    const dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const dayNumber = date.getDay()

    const dn = dayName[dayNumber];

    const result = dn + " " + hours + ":" + minutes + ":" + pm;
    console.log(result);

    document.querySelector("#current_time").textContent = result;
}

window.addEventListener('load', showTime);