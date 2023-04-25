import "./index.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import BotaoCriar from "../BotaoCriar";

const Formulario = () => {

	const aoEnviar = (event) => {
		event.preventDefault();
		console.log(event);
	}

	const escolas = [
	    'Lógica & Programação',
            'Front-End',
	    'Back-End',
	    'DevOps',
	    'UX & UI',
	    'Mobile'
	];

	const componenteTexto = [
        	{
                	titulo:'Nome',
                	dica: 'Digite o seu nome',
			obrigatorio: true
        	},
        	{
                	titulo:'Cargo',
                	dica: 'Digite o seu cargo',
			obrigatorio: true
        	},
        	{
                	titulo:'Imagem',
                	dica: 'Digite a url da imagem',
			obrigatorio: false
        	}
  	];


	return(
		<section className="formulario">
			<form onSubmit={aoEnviar}>
			    <h2>Preencha os dados para criar o Card</h2>
			    {componenteTexto.map(({titulo, dica, obrigatorio}) => {
					return ( 
						<CampoTexto
						    required={obrigatorio}
						    label={titulo} 
						    placeholder={dica}
						/>
					);
			    })}
			    <ListaSuspensa 
				obrigatorio={true} 
				label="Time" 
				item={escolas}
			    />
			    <BotaoCriar>
				Criar Card
			    </BotaoCriar>
			</form>
		</section>
	);
}

export default Formulario;
