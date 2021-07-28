import './App.css';
import Primeiro from './components/básicos/Primeiro'
import ComParametro from './components/básicos/ComParametro'
import ComFilhos from './components/básicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/básicos/Repeticao'
import Condicional from './components/básicos/Condicional'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'


function App() {
  return (
    <div className='App'>

      <h1>Fundamentos React</h1>

      <div className='Cards'>
        <Card titulo="#01 Primeiro Compente" color="grey">
          <Primeiro />
        </Card>

        <Card titulo="#02 Componente com Parametros" color="blue">
          <ComParametro titulo='Esse é o título' subtitulo='Esse é o subtítulo' />
        </Card>

        <Card titulo="#03 Componente com Filhos" color="#FA6900">
          <ComFilhos>
            <ul>
              <li>Uma lista não ordenada.</li>
            </ul>

          </ComFilhos>
        </Card>

        <Card titulo='#04 Repetição' color="#E94C6F">
          <Repeticao></Repeticao>
        </Card>

        <Card titulo='#05 Condicional' color='orange'>
          <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo='#06 Comunicação direta' color='#4298B5'>
          <Pai sobrenome='Yukinoshita'></Pai>
        </Card>

        <Card titulo='#07 Comunicação indireta' color='#000'>
          <Super></Super>
        </Card>

        <Card titulo='#08 Input' color='purple'>
          <Input></Input>
        </Card>

        <Card titulo='#09 Contador' color='yellow'>
          <Contador passo={10} valor={100}></Contador>
        </Card>

      </div>



    </div>
  );
}

export default App;
