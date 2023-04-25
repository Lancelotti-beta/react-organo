import "./index.css";

const CampoTexto = ({label, placeholder, required}) => {
	
	return (
		<div className="campo-texto">
			<label key={label}>{label}</label>
			<input required={required} placeholder={placeholder} />
		</div>
	);
}

export default CampoTexto;
