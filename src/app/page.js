import Banner from '@/components/Banner/Banner'
import Contact from '@/components/Contact/Contact'
import Experiences from '@/components/Experiences/Experiences'
import Skills from '@/components/Skills/Skills'
// import Projects from '@/components/projects/Projects'

export default function Home() {
  return (
    <main>
      <Banner /> 
      {/* <Intro /> */}
      <Experiences />
      <Skills />
      {/* <Projects /> */}
      <Contact />     
    </main>
  )
}
