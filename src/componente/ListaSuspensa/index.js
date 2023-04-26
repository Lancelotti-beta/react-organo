import "./index.css";

const ListaSuspensa = ({label, item, required, value, onChange}) => {

	const valorEnviado = (event) => onChange(event.target.value);

	return (
		<div className="lista-suspensa">
			<label>
			    {label}
			</label>
			<select value={value} onChange={valorEnviado} required={required}>
			    {
			      item.map((item)=>{
			          return <option>{item}</option>
			      })
			    }
			</select>
		</div>
	);

}

export default ListaSuspensa;
