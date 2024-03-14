import PageTemplate from './components/PageTemplate';
import './Announcements.css';

function Announcement({ message, name, time }) {
    return (
        <div class='tiedote'>
            <div class='viesti'>
                <h2 class='h2'>{message}</h2>
            </div>
            <div class='nimi'>
                <h2 class='h2'>{name}</h2>
            </div>
            <div class='aika'>
                <h2 class='h2'>{time}</h2>
            </div>
        </div>
    );
}

function Announcements() {
    const announcements = [
        { message: 'You will be killed bone by bone', name: 'Erola Simo', time: 'Eilen 13:00' },
        // Add more announcements here
    ];

    return (
        <PageTemplate>
            <div class='sivu'>
                <div class='topbar'>
                    <h1 class='h11'>Tiedotteet</h1>
                </div>
                {announcements.map((announcement, index) => (
                    <Announcement key={index} {...announcement} />
                ))}
            </div>
        </PageTemplate>
    );
};

export default Announcements;