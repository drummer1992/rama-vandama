import React from "react"
import { Header } from "./components/Header/Header"
import { BrowserRouter } from "react-router-dom"
import { About } from "./components/About/About"
import { Cases } from "./components/Cases/Cases"
import { Footer } from "./components/Footer"
import { Contact } from "./components/Contact/Contact"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <main>
          <About/>
          <Cases/>
          <Contact/>
          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
