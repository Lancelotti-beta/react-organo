import "./index.css";

const CampoTexto = ({label, placeholder, required, onChange, value}) => {
	
	const valorEnviado = (event) => onChange(event.target.value);

	return (
		<div className="campo-texto">
			<label key={label}>{label}</label>
			<input
			  value={value}
			  onChange={valorEnviado}
			  required={required}
			  placeholder={placeholder}
			/>
		</div>
	);
}

export default CampoTexto;
