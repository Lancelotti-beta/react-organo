import { useState } from "react";
import "./index.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import BotaoCriar from "../BotaoCriar";

const Formulario = ({objetoAdicionado}) => {

	const [nome, setNome] = useState('');
	const [cargo, setCargo] = useState('');
	const [img, setImg] = useState('');
	const [opcao, setOpcao] = useState('');

	const aoEnviar = (event) => {
		event.preventDefault();
		
		objetoAdicionado({
		  nome: nome, 
		  cargo: cargo,
		  imagem: img,
		  time: opcao
		});
	}

	const escolas = [
	    '',
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
			obrigatorio: true,
			valor: nome,
			estado: setNome
        	},
        	{
                	titulo:'Cargo',
                	dica: 'Digite o seu cargo',
			obrigatorio: true,
			valor: cargo,
                        estado: setCargo
        	},
        	{
                	titulo:'Imagem',
                	dica: 'Digite a url da imagem',
			obrigatorio: false,
			valor: img,
                        estado: setImg
        	}
  	];


	return(
		<section className="formulario">
			<form onSubmit={aoEnviar}>
			    <h2>Preencha os dados para criar o Card</h2>
			    {componenteTexto
				    .map(({titulo, dica, obrigatorio, valor, estado}) => {
					return ( 
				    	  <CampoTexto
						value={valor}
						onChange={valor => estado(valor)}
						required={obrigatorio}
						label={titulo} 
						placeholder={dica}
				    	  />
			 		);
			    	})
			    }
			    <ListaSuspensa
				value={opcao}
				onChange={value => setOpcao(value)}
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
