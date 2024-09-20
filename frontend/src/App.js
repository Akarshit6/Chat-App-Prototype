import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import VideoCallPage from "./Pages/VideoCall";
import CallManager from "./Pages/CallManager";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
      <Route path="/video" component={VideoCallPage} />
      <Route path="/call/:name" component={CallManager} />
    </div>
  );
}

export default App;

