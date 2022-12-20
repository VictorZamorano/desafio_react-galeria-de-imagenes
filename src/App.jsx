import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<>
			<Header tittle="Mi galeria de imagenes con React"></Header>
			<div className="containerGallery">
				<Card img="./imgs/perro1.jpg" alt="perro1" tittle="Perro1" />
				<Card img="./imgs/perro2.jpg" alt="perro2" tittle="Perro2" />
				<Card img="./imgs/perro3.jpg" alt="perro3" tittle="Perro3" />
				<Card img="./imgs/perro4.jpg" alt="perro4" tittle="Perro4" />
				<Card img="./imgs/perro5.jpg" alt="perro5" tittle="Perro5" />
			</div>
			<Footer />
		</>
	);
}

export default App;
