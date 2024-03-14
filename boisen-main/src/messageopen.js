import './App.css';
import PageTemplate from './components/PageTemplate';
import './messageopen.css'
var textMessage = "dsfushfdiu"
  
function MessageOpen() {
    return (
      <PageTemplate children={
        <div className='all-text'>
          <div class = "upperBar">
            <div class = "messageInfo">
              <h1>Message subject</h1>
            </div>
              <button class = "returnIcon">
                <svg width = "30" height = "30" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 19a1 1 0 0 0 1 1h5c2.242 0 4.01-.778 5.218-2.023C19.414 16.744 20 15.113 20 13.5c0-1.613-.586-3.244-1.782-4.477C17.01 7.778 15.242 7 13 7H8.414l2.043-2.043a1 1 0 0 0-1.414-1.414l-3.75 3.75a1 1 0 0 0 0 1.414l3.75 3.75a1 1 0 0 0 1.414-1.414L8.414 9H13c1.758 0 2.99.597 3.782 1.415.804.83 1.218 1.948 1.218 3.085s-.414 2.256-1.218 3.085C15.99 17.403 14.758 18 13 18H8a1 1 0 0 0-1 1Z" fill="#FFFFFF"/></svg>
            </button>
          </div>
          <div class = "messageContainer">
            <div class = "message">
              <p>{textMessage}</p>
            </div>
          </div>
          <div class = "bottomBar">
            <button class = "replyButton">
              <h1>Vastaa viestiin</h1>
            </button>
          </div>
        </div>
      }/>
    );
  };

export default MessageOpen;

