import './App.css';
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'

function App() {
  return (
    <div className='App'>

      <Card titulo="#03 Componente com Filhos">
        <ComFilhos>
          <ul>
            <li>Uma lista não ordenada.</li>
          </ul>

        </ComFilhos>

      </Card>

      <Card titulo="#02 Componente com Parametros">
        <ComParametro titulo='Esse é o título' subtitulo='Esse é o subtítulo' />
      </Card>

      <Card titulo="#01 Primeiro Compente">
        <Primeiro />
      </Card>

    </div>
  );
}

export default App;
