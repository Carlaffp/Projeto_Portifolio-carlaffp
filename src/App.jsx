import { AboutMeSection } from './Components/AboutMeSection';
import { BannerSection } from './Components/BannerSection';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { ProjectSection } from './Components/ProjectsSection';
import { TechSection } from './Components/TechSection';
import '../src/Styles/GlobalStyles.module.css';

function App() {
  return (
    <div >
    
      <Header />
      <main>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
