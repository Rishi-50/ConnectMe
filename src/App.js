import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed';

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="2508794a-7dea-4a84-97f4-c33483f3f301"
      userName="Rishi_60"
      userSecret="3566"
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
