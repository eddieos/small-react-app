import React from 'react';
import './App.scss';

function App() {
  return (
      <section className="App">
        <div className="dialogue dialogue--warning">
          <div className="dialogue__header">Warning 😬</div>
          <div className="dialogue__text">
            Your device storage is almost full. If you choose to proceed, you might have to delete some games.
          </div>
          <button className="dialogue__button">
            proceed
          </button>
        </div>
        <div className="dialogue dialogue--error">
          <div className="dialogue__header">Update error 😱</div>
          <div className="dialogue__text">
            The internet connection was interrupted. The receiver will not receive a notification. Please try again.
          </div>
          <button className="dialogue__button">
            try again
          </button>
        </div>
        <div className="dialogue dialogue--success">
          <div className="dialogue__header">Update successful! ☺️</div>
          <div className="dialogue__text">
            Your shipment records have been uploaded and the receiver has been sent a notification. Nice!
          </div>
          <button className="dialogue__button">
            ok
          </button>
        </div>
      </section>
  );
}

export default App;
