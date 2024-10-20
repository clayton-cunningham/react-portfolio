import './App.css'
import { Column } from './components/generic/Column'
import { LooseParticles } from './components/particles/LooseParticles'
import { ProjectsSection } from './components/primary-widgets/projects/ProjectsSection'
import { ResumeDetails } from './components/primary-widgets/resume/ResumeDetails'

function App() {

  return (
    <>
      <Column>
        <LooseParticles />
        <ResumeDetails />
        <ProjectsSection />
      </Column>
    </>
  )
}

export default App
