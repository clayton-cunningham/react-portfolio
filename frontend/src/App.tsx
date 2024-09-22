import './App.css'
import { Column } from './components/generic/Column'
import { ProjectsSection } from './components/primaryWidgets/projects/ProjectsSection'
import { ResumeDetails } from './components/primaryWidgets/resume/ResumeDetails'
import { Weather } from './components/primaryWidgets/weather/Weather'

function App() {

  return (
    <>
      <Column>
        <ResumeDetails />
        <Weather />
        <ProjectsSection />
      </Column>
    </>
  )
}

export default App
