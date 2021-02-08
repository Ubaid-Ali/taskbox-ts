import React from 'react';
import { Provider } from 'react-redux';

import store from './lib/redux'
import { PureInboxScreen } from './components/inboxScreen/InboxScreen'

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <PureInboxScreen {...PureInboxScreen.arguments}/>
      </Provider>
    </div>
  );
}

export default App;
