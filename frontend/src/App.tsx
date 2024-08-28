import './App.css'
import { Column } from './components/generic/Column'
import { Row } from './components/generic/Row'
import { Weather } from './components/primaryWidgets/weather/Weather'

function App() {

  return (
    <>
      <Column>
          <p>Clayton Cunningham</p>
          <p>Software Developer</p>
          <Row>
            <p>Test</p>
            <p>Test</p>
          </Row>
        <Weather />
      </Column>
    </>
  )
}

export default App
