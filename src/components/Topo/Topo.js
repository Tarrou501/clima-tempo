import  './Topo.css'
function Topo(props) {

    return (
        <header className="Topo">
            <div>
                <h1>Previsão do Tempo </h1>
            </div>
            <div className="pesquisa">
                <input type="Text" placeholder="Buscar" />
         
                <span>&#x1F50E;&#xFE0E;</span>
            </div>
        </header>
    )
}
export default Topo;