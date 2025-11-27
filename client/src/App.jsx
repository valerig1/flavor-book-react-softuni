import { Route, Routes } from "react-router"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"

function App() {

  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main className="flex-1">

        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App
