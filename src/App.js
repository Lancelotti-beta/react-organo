import { useState } from "react";
import Banner from "./componente/Banner";
import BotaoCriar from "./componente/BotaoCriar"
import Formulario from "./componente/Formulario";
import Time from "./componente/Time";
import Rodape from "./componente/Rodape";

function App() {

  const [colaborador, setColaborador] = useState([]);
  const adicionaColaborador = (novoColaborador) => {
  	setColaborador([...colaborador, novoColaborador]);
	console.log(colaborador);
  };

  const [mostrar, setMostrar] = useState(true);
  const ocultarEmostrar = () => setMostrar(!mostrar);

  const times = [	
	{
	  titulo: 'Lógica & Programação',
	  corPrimaria: 'D9F7E9',
	  corSecundaria: '57C278',
	},
	{
	  titulo: 'Front-End',
	  corPrimaria: 'E8F8FF',
	  corSecundaria: 'B2CFFA',
	},
	{
	  titulo: 'Back-End',
	  corPrimaria: 'FDE7E8',
	  corSecundaria: 'ED9B69',
	},
        {
	  titulo: 'DevOps',
	  corPrimaria: 'FDE7E8',
	  corSecundaria: 'ED6B69',
	},
	{
	  titulo: 'UX & UI',
	  corPrimaria: 'FAE9F5',
	  corSecundaria: 'DB6EBF',
	},
	{
	  titulo: 'Mobile',
	  corPrimaria: 'FFF5D9',
	  corSecundaria: 'FFBA05',
	}
  ];

  return (
    <div className="App">
        <Banner />
	<main>
	    { mostrar && 
		<Formulario 
		    objetoAdicionado={usuario => adicionaColaborador(usuario)}
		/> 
	    }
	    <section className="sessao-cards">
	        <h2>Minha Organização</h2>
	        <BotaoCriar onClick={ocultarEmostrar}>
	          <img 
	  	    src="/imagens/ig.png" 
	  	    alt="botão para ocultar o formulario"
	  	  />
	        </BotaoCriar>
	    </section>
	    {times.map(({titulo, corPrimaria, corSecundaria}) => {
	    		return <Time
		    	          key={titulo}
	      			  time={titulo}
		    		  corFundo={corPrimaria}
		    		  textoCor={corSecundaria}
	    		       />
			})
	    }
	</main>
	<Rodape />
    </div>
  );
}

export default App;
