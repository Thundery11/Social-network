import "./App.css";
import Settings from "./components/Settings/Settings";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Profile />
        <Dialogs />
        <Music />
        <News />
        <Settings />
      </div>
    </div>
  );
};

export default App;
