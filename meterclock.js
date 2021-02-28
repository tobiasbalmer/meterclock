function meterclock() {
    const hourTen = document.querySelector('.meterclock__numbers--hour-ten');
    const hourOne = document.querySelector('.meterclock__numbers--hour-one');

    const minuteTen = document.querySelector('.meterclock__numbers--minute-ten');
    const minuteOne = document.querySelector('.meterclock__numbers--minute-one');

    const secondTen = document.querySelector('.meterclock__numbers--second-ten');
    const secondOne = document.querySelector('.meterclock__numbers--second-one');

    function setTime() {
        const now = new Date();

        const hour = now.getHours().toString().split('').reverse();
        const minute = now.getMinutes().toString().split('').reverse();
        const second = now.getSeconds().toString().split('').reverse();
    
        const time = {
            hourTen: parseInt(hour[1]) || 0,
            hourOne: parseInt(hour[0]),
            minuteTen: parseInt(minute[1]) || 0,
            minuteOne: parseInt(minute[0]),
            secondTen: parseInt(second[1]) || 0,
            secondOne: parseInt(second[0])
        };
        
        hourTen.style.transform = `translateY(calc(-100% / 3 * ${time.hourTen}))`;
        hourOne.style.transform = `translateY(calc(-100% / 10 * ${time.hourOne}))`;
        minuteTen.style.transform = `translateY(calc(-100% / 6 * ${time.minuteTen}))`;
        minuteOne.style.transform = `translateY(calc(-100% / 10 * ${time.minuteOne}))`;
        secondTen.style.transform = `translateY(calc(-100% / 6 * ${time.secondTen}))`;
        secondOne.style.transform = `translateY(calc(-100% / 10 * ${time.secondOne}))`;
    }

    setTime();
    setInterval(() => {
        setTime();
    }, 1 * 1000);
}

document.addEventListener('DOMContentLoaded', meterclock);