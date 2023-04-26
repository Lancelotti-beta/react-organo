import "./index.css";
import Card from "../Card";

const Time = ({time, corFundo, textoCor, pessoa}) => {
	return (
	    pessoa.length > 0 &&
	    	<section 
	      		className="time"
	      		style={{ background: `#${corFundo}`}}
	    	>
		    <h2 
		  	style={{ borderColor: `#${textoCor}`}}
		    >
		        {time}
		    </h2>
		    <div className="sessao-cards">
		        {pessoa.map(({nome, imagem, cargo, time}) => { 
			    return <Card
			  	      cor={textoCor}
		    	    	      nome={nome}
		    	    	      link={imagem}
		    	    	      cargo={cargo}
		    	    	      time={time}
			  	   /> 
		  	    })
		        }
		    </div>
	        </section>
	    
	);
}

export default Time;
