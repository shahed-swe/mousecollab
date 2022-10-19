import logo from './logo.svg';
// import './App.css';
// import { CursorComp } from './Cursor';
import CursorChat from '@yomo/react-cursor-chat';
import '@yomo/react-cursor-chat/dist/hairy-green.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {/* <CursorComp
            presenceURL="https://prsc.yomo.dev"
            presenceAuthEndpoint="/api/auth"
            avatar="https://cursor-chat-example.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75"
            room
            // name="shahed"
          /> */}
          <CursorChat
            presenceURL="https://prsc.yomo.dev"
            presenceAuthEndpoint="/api/auth"
            avatar="https://avatars.githubusercontent.com/u/67308985?s=200&v=4"
            theme="dark"
            name="name"
          />;
        </a>
      </header>
    </div>
  );
}

export default App;
