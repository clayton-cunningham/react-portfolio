import './App.css'
import { Column } from './components/generic/Column'
import { ResumeDetails } from './components/primaryWidgets/resume/ResumeDetails'
import { Weather } from './components/primaryWidgets/weather/Weather'

function App() {

  return (
    <>
      <Column>
        <ResumeDetails />
        <Weather />
      </Column>
    </>
  )
}

export default App
