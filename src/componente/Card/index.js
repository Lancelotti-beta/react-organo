import "./index.css";

const Card = ({cor, nome, link, cargo, time}) => {
	return (
	    <article className="colaborador">
		<figure
		  style={{ backgroundColor: `#${cor}`}}
		  className="cabecalho"
		>
		   <img src={link} alt="imagem do usuario"/>
		</figure>
		<div className="rodape">
		    <h3>{nome}</h3>
		    <p>{cargo}</p>
		    <p>{time}</p>
		</div>
	    </article>
	);
}

export default Card;
