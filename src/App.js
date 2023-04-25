import { useState } from "react";
import Banner from "./componente/Banner";
import BotaoCriar from "./componente/BotaoCriar"
import Formulario from "./componente/Formulario";
import Rodape from "./componente/Rodape";

function App() {

  const [colaborador, setColaborador] = useState([]);
  const adicionaColaborador = (novoColaborador) => {
	console.log(novoColaborador);
  	setColaborador([...colaborador, novoColaborador]);
	console.log(colaborador);
  };

  const [mostrar, setMostrar] = useState(true);
  const ocultarEmostrar = () => setMostrar(!mostrar);

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
	</main>
	<Rodape />
    </div>
  );
}

export default App;
