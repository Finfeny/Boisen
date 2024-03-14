import './App.css';
import PageTemplate from './components/PageTemplate';
import './Schedule.css';

function Schedule() {
    const times = ['8:00', '9:00', '10:00', '11:00', '11:45', '12:30', '13:30', '14:30', '15:30'];
    const days = ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai'];
    setTimeout(ArrowFunction, 1)

    function ArrowFunction(){
    document.getElementById("leftArrow").onclick = Back;
    document.getElementById("rightArrow").onclick =Forward;
    }

    window.onload = TimeTableBuilder
    
    return (
        <PageTemplate>
            <div class = 'main'>
                <div class = "scheduleTopBar">
                    <div class = "siteName">
                        <h1 class = 'h1'>Lukujärjestys</h1>
                    </div>
                        <button class = "leftArrow" id = "leftArrow">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12l7.852-8.313Z" fill="#ffffff"/></svg>
                        </button>
                            <div class = "pageNumber">
                                <h1 class = 'h1'>Jakso | 44/2023</h1>
                            </div>
                        <button class = "rightArrow" id = "rightArrow">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.273 3.687a1 1 0 1 1 1.454-1.374l8.5 9a1 1 0 0 1 0 1.374l-8.5 9.001a1 1 0 1 1-1.454-1.373L19.125 12l-7.852-8.313Z" fill="#ffffff"/></svg>
                        </button>
                    </div>
                <div class = "schedule" id = "schedule">
                    {times.map(time => (
                        <div class = "time" key = {time}>
                            <h1 class = 'h1'>{time}</h1>
                        </div>
                    ))}
                    <div class = "days"><h1 className='h1'></h1></div>
                    {days.map(day => (
                        <div class = "days" key = {day}>
                            <h1 class = 'h1'>{day}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </PageTemplate>
    );
}

function Back() {
    window.location.reload()
}

function Forward() {
    window.location.reload()
}

function TimeTableBuilder() {
    let x
    x = 0
    while (x < 15){
    let vertical = Math.floor(Math.random() * 9 + 1);
    let horizontal = Math.floor(Math.random() * 5 + 2);
    let newSlot = document.createElement('div');
    newSlot.classList.add("timeSlot");
    newSlot.textContent = "Projekti";
    newSlot.id = "newLesson";
    newSlot.style.gridColumn = horizontal;
    newSlot.style.gridRow = vertical;
    document.getElementById("schedule").appendChild(newSlot);
    newSlot.style.gridRow = vertical + 1;
    document.getElementById("schedule").appendChild(newSlot);
    x = x + 1
    }
};
export default Schedule;
export {Forward, Back};