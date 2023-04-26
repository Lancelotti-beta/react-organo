import "./index.css";

const Rodape = () => {
	return (
		<footer className="rodape">
			<ul className="social">
			    <li>
				<a 
				  href="https://facebook.com"
				  target="_blank"
				>
				    <img 
			    	       src="/imagens/fb.png" 
			    	       alt="banner da organo com simbolos geométricos"
				    />
				</a>
			    </li>
			    <li>
				<a
                                  href="https://facebook.com"
                                  target="_blank"
                                >
                                   <img
                                      src="/imagens/tw.png"
                                      alt="banner da organo com simbolos geométricos"
                                    />
				</a>
                            </li>
			    <li>
				<a
                                  href="https://facebook.com"
                                  target="_blank"
                                >
                                    <img
                                       src="/imagens/ig.png"
                                       alt="banner da organo com simbolos geométricos"
                                    />
				</a>
                            </li>
			</ul>
			<figure className="logo-marca">
			    <img
			      src="/imagens/logo.png"
			      alt="logo marca da organo"
			    />
			</figure>
			<h3>Desenvolvido por Alura & Zero</h3>
		</footer>
	);

}

export default Rodape;
