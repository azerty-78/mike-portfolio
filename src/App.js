import { MotionConfig } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import PageLoader from './components/ui/PageLoader';
import {
  About,
  Contact,
  Education,
  Experience,
  Hero,
  Projects,
  Skills,
  SoftSkills,
} from './components/sections';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <PageLoader />
        <CustomCursor />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <SoftSkills />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
