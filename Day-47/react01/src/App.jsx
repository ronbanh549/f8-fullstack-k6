import BlogSection from "./components/blog-section/BlogSection";
import Chat from "./components/chat/Chat";
import ContactSection from "./components/contact-section/ContactSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MySkillSection from "./components/my-skill-section/MySkillSection";
import PopularSection from "./components/popular-section/PopularSection";
import ProjectsSection from "./components/projects-section/ProjectsSection";
import ResumeSection from "./components/resume-section/ResumeSection";
import SocialSection from "./components/socail-section/SocialSection";

function App() {
  return (
    <>
      <Header />
      <SocialSection />
      <MySkillSection />
      <ProjectsSection />
      <ResumeSection />
      <BlogSection />
      <PopularSection />
      <ContactSection />
      <Footer />
      <Chat />
    </>
  );
}

export default App;