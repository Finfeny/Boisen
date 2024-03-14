import './Messages.css'
import PageTemplate from './components/PageTemplate';
import Topbarbuttons from './components/Topbarbuttons';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function Message({ Subject, Sender, TimeStamp }) {
  return (
    <div class='message-message'>
      <div class='message-viesti'>
        <h2 class='h2'>{Subject}</h2>
      </div>
      <div className='message-info'>
        <div class='message-nimi'>
          <h2 class='h22'>{Sender}</h2>
        </div>
        <div class='message-aika'>
          <h2 class='h22'>{TimeStamp}</h2>
        </div>
      </div>
    </div>
  );
}

function Messages() {
  const buttonsData = [
    { name: 'Saapuneet', link: './viestit'},
    { name: 'Arkisto', link: './viestit'},
    { name: 'Luonnokset', link: './viestit'},
    { name: 'Tapahtumakutsut', link: './viestit'},
    { name: 'Lähetetyt', link: './viestit'},
  ];

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const headers = {
      'Wilma2SID': Cookies.get('Wilma2SID'),
      'WilmaID': Cookies.get('WilmaID')
    };

    fetch('https://boisen-api-882e3f974b75.herokuapp.com/messages/list', {
      headers: headers
    })
    .then(async response => {
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
      }
      return response.json();
    })
    .then(data => setMessages(data.Messages)) // Make sure data.Messages is the array of messages
    .catch(error => console.error('Error:', error));
  }, []);

  return (
    <PageTemplate>
      <div class='sivu'>
        <div className='messages-topbar'>
          <div className='messages_text'>
            <h1 class='message-h1'>Viestit</h1>
          </div>
          <Topbarbuttons buttonsData={buttonsData}/>
        </div>

        {Array.isArray(messages) && messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}

      </div>
    </PageTemplate>
  );
};

export default Messages;