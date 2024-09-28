import './App.css'
import { Column } from './components/generic/Column'
import { ProjectsSection } from './components/primary-widgets/projects/ProjectsSection'
import { ResumeDetails } from './components/primary-widgets/resume/ResumeDetails'
import { Weather } from './components/primary-widgets/weather/Weather'

function App() {

  return (
    <>
      <Column>
        <ResumeDetails />
        <ProjectsSection />
        <Weather />
      </Column>
    </>
  )
}

export default App
