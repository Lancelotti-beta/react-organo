import "./index.css";
import Card from "../Card";

const Time = ({time, corFundo, textoCor}) => {
	return (
	    <section 
	      className="time"
	      style={{ background: `#${corFundo}`}}
	    >
		<h2 
		  style={{ borderColor: `#${textoCor}`}}
		>
		  {time}
		</h2>
		<Card />
	    </section>
	);
}

export default Time;
