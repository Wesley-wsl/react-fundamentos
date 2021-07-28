import './App.css';
import Primeiro from './components/básicos/Primeiro'
import ComParametro from './components/básicos/ComParametro'
import ComFilhos from './components/básicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/básicos/Repeticao'
import Condicional from './components/básicos/Condicional'

function App() {
  return (
    <div className='App'>

      <Card titulo="#01 Primeiro Compente">
        <Primeiro />
      </Card>

      <Card titulo="#02 Componente com Parametros">
        <ComParametro titulo='Esse é o título' subtitulo='Esse é o subtítulo' />
      </Card>


      <Card titulo="#03 Componente com Filhos">
        <ComFilhos>
          <ul>
            <li>Uma lista não ordenada.</li>
          </ul>

        </ComFilhos>
      </Card>


      <Card titulo='#04 Repetição'>
        <Repeticao></Repeticao>
      </Card>

      <Card titulo='#05 Condicional'>
        <Condicional numero={10}></Condicional>
      </Card>

    </div>
  );
}

export default App;
