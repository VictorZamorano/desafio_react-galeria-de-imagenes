const Card = (props) => {
	return (
		<div className="card">
			<img src={props.img} className="card-img-top" alt={props.alt} />
			<div className="card-body">
				<h5 className="card-title">{props.tittle}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
				<a href="#" className="btn btn-warning">
					¿Quieres saber más?
				</a>
			</div>
		</div>
	);
};

export default Card;
