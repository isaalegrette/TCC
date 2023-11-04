import './style.scss';

const WelcomeSection = () => {
    return (
        <div>
            <h3>Agilizando</h3>
            <hr className="divider" />
            <p className="paragraph">
                Bem-vindo(a) à ferramenta Agilizando! 
            </p>
            <p className="paragraph">
                O objetivo desta aplicação é auxiliar na obtenção de respostas sobre as Metodologias Ágeis e seus usos. 
            </p>
            <p className="paragraph">
                Para iniciar a visualização de dados, por favor <span className="bold">selecione uma Métrica no Painel de Filtros</span> presente no lado esquerdo da tela. 
                Também é possível mudar a seleção dos Relatórios se você desejar.
            </p>
            <p>
                Esta ferramenta foi desenvolvida pela aluna Isabella Alegrette Juliano, para o TCC do curso de Bacharelado em Ciência da Computação, do Instituto Federal de São Paulo, 
                em 2023, orientado pelo Prof. Dr. Breno Lisi Romano.
            </p>
            <p className="paragraph">
                Os dados presentes foram retirados dos relatórios State of Agile, patrocinados pela empresa <a href="https://digital.ai" target="_blank" rel="noreferrer">Digital.ai</a>. 
                Você pode encontrar mais informações sobre os relatórios neste <a href="https://stateofagile.com" target="_blank" rel="noreferrer">link</a>.
            </p>
            <p className="paragraph">
                A ferramenta foi desenvolvida utilizando React JS juntamente com o <a href="https://carbondesignsystem.com" target="_blank" rel="noreferrer">Carbon Design System</a> no 
                front-end e Java com Spring Boot no back-end.
            </p>
        </div>
    )
};

export default WelcomeSection;