import logo from './logo.svg';
import './assets/css/main.css';
import Row from "./components/grid/row";

function App() {
    const colors = ["red", "green", "blue", "pink", "purple"];

    return (
        <div className="App">
            <main>
                <section id="gameboard">
                    <div id={"gameboard-background"}>
                        <Row colors={colors}/>
                        <Row colors={colors}/>
                        <Row colors={colors}/>
                        <Row colors={colors}/>
                        <Row colors={colors}/>
                        <Row colors={colors}/>
                        <Row colors={colors}/>
                        <Row colors={colors}/>
                        <Row colors={colors}/>
                        <Row colors={colors}/>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
