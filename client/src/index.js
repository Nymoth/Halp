import Horizon from '@horizon/client';
import React from 'react';
import ReactDOM from 'react-dom';

import Halp from './components/Halp.jsx';

const uuid = require('uuid/v1');

(() => {
  const horizon = Horizon({ host: 'localhost:8181', authType: 'unauthenticated' });
  const messages = horizon('messages');
  let sessionId = null;

  const savedSessionId = localStorage.getItem('__halp_session_id');
  if (savedSessionId) {
    sessionId = savedSessionId;
  } else {
    sessionId = uuid();
    localStorage.setItem('__halp_session_id', sessionId);
  }

  horizon.onReady().subscribe(() => {
    if (!document.getElementById('__halp_root')) {
      const container = document.createElement('div');
      container.setAttribute('id', '__halp_root');
      document.getElementsByTagName('body')[0].appendChild(container);
      ReactDOM.render(
        <Halp
          messages={messages}
          sessionId={sessionId}/>, container);
    }
  });

  horizon.onDisconnected().subscribe(() => {
    const container = document.getElementById('__halp_root');
    if (container) {
      document.getElementsByTagName('body')[0].removeChild(container);
    }
  });

  horizon.connect();
})();
