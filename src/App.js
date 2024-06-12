import './App.css';
import DarkMode from './DarkMode/DarkMode';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <DarkMode />
        <Weather defaultCity="New York" />
    <footer>
      This project was coded by Mahsa Abdolahnezhad{" "}
      <a href="https://github.com/mahsaabdolahnezhad/react-weather" target="_blank" rel="noreferrer">open-sourced on github</a>
      </footer>
      </div>
    </div>
  );
}


