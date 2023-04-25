import "./index.css";

const BotaoCriar = ({children, onClick}) => {
	return (
		<button 
		    className="botao"
		    onClick={onClick}
		>
		   {children}
		</button>
	);
}

export default BotaoCriar;
