const Footer = () => {
	return (
		<div>
			<hr />
			<h3>¿Te gustan los animales?</h3>
			<p>
				En caso de ser "si", te recomiendo visitar nuestras paginas web
				enfocadas en otros animales
			</p>
			<div className="btnsAnimales">
				<button type="button" className="btn btn-primary">
					Gatos
				</button>
				<button type="button" className="btn btn-secondary">
					Tortugas
				</button>
				<button type="button" className="btn btn-success">
					Aves
				</button>
			</div>
		</div>
	);
};

export default Footer;
