import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Whatsnew from "./components/Whatsnew"
import Areas from "./components/Areas"
import Interiors from "./components/Interiors"
import ProductSection from "./components/Products"
import WhatsApp from "./components/Whatapp"
import Why from "./components/Whychooseus"
import Project from "./components/Projects"
import { Menubar } from "./components/menubar"
import { DancingGallery } from "./components/DancingGallery"
import ButtonScanning from "./components/ButtonScanning"
import ButtonHover from "./components/ButtonHover"
import { PhotoPickSection } from "./components/PhotoPickSection"
import ContactCardsHover from "./components/ContactCardsHover"
import { DropDown } from "./components/DropDown"
import DropDown2 from "./components/DropDown2"
import OpenModel from "./components/OpenModel"
import NotificationMessage from "./components/NotificationMessage"
import FuzzyOverlayExample from "./components/FuzzyOverlay"
import { PhotoHovering } from "./components/PhotoHovering"
import { Navdesign } from "./components/Nav2"
import ThemeChanger from "./components/ThemeChanger"





function App() {
  return (
    <>
      <div >
        <div className="h-[400px] md:h-[600px] lg:h-[800px] relative">
          <div className="bg-black\">
            <img src="/ahmed hero 1.webp" alt="Ahmed Paint Karaikudi" title="ahmed-paint-traders"
              className="absolute right-0 top-0 h-[400px] md:h-[600px] lg:h-[800px] w-full    opacity-50 z-[-1]"
            /></div>
          <Navbar />
          <Hero />
        </div>
        <Whatsnew />
        <ButtonScanning />
        <ButtonHover />
        <PhotoPickSection />
        <About />
        <ContactCardsHover />
        <DropDown />
        <DropDown2 />
        <OpenModel />
        <Why />
        <NotificationMessage />
        <FuzzyOverlayExample />
        <PhotoHovering />
        <Navdesign />
        <Interiors />
        <ThemeChanger />
        <Areas />
        <ProductSection />
        <WhatsApp />
        <Project />
        <Contact />
        <Footer />
        <Menubar />
        <DancingGallery />
      </div>

    </>
  )
}

export default App
