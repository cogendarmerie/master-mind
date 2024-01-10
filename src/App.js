import logo from './logo.svg';
import './assets/css/main.css';
import Row from "./components/grid/row";
import {useState} from "react";
import Confetti from "react-confetti";
import useSound from "use-sound";

import sound from "./assets/sound/sound.mp3";

function selectColors(colors){
    return [
        colors[Math.floor(Math.random()*colors.length)],
        colors[Math.floor(Math.random()*colors.length)],
        colors[Math.floor(Math.random()*colors.length)],
        colors[Math.floor(Math.random()*colors.length)],
    ];
}

function App() {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    const [validRows, setValidRows] = useState(selectColors(colors));
    const [score, setScore] = useState(0);
    const [game, setGame] = useState(1);
    const [win, setWinT] = useState(false);
    const [play] = useSound(sound, { volume: 10 });

    const setWin = () => {
        setWinT(true);
        play();

        setTimeout(() => {
            setWinT(false);
        }, 17000);
    }

    return (
        <div className="App">
            <header>
                <div>
                    <h1>MasterMind</h1>
                    <p>Score : {score} / Partie : {game}</p>
                </div>
            </header>
            <main>
                <section id="gameboard">
                    <div id={"gameboard-background"}>
                        <Row colors={colors} validRow={validRows} setWin={setWin}/>
                        <Row colors={colors} validRow={validRows} setWin={setWin}/>
                        <Row colors={colors} validRow={validRows} setWin={setWin}/>
                        <Row colors={colors} validRow={validRows} setWin={setWin}/>
                        <Row colors={colors} validRow={validRows} setWin={setWin}/>
                        <Row colors={colors} validRow={validRows} setWin={setWin}/>
                        <Row colors={colors} validRow={validRows} setWin={setWin}/>
                        <Row colors={colors} validRow={validRows} setWin={setWin}/>
                        <Row colors={colors} validRow={validRows} setWin={setWin}/>
                        <Row colors={colors} validRow={validRows} setWin={setWin}/>
                    </div>
                </section>
                {win && <Confetti />}
            </main>
        </div>
    );
}

export default App;
