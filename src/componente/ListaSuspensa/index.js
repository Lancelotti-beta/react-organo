import "./index.css";

const ListaSuspensa = ({label, item, required}) => {

	return (
		<div className="lista-suspensa">
			<label>
			    {label}
			</label>
			<select required={required}>
			    {
			      item.map((item)=>{
			          return <option key={item}>{item}</option>
			      })
			    }
			</select>
		</div>
	);

}

export default ListaSuspensa;
