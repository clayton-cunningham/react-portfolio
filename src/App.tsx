import './App.css'
import { Column } from './components/generic/Column'
import { ProjectsSection } from './components/primary-widgets/projects/ProjectsSection'
import { ResumeDetails } from './components/primary-widgets/resume/ResumeDetails'

function App() {

  return (
    <>
      <Column>
        <ResumeDetails />
        <ProjectsSection />
      </Column>
    </>
  )
}

export default App
