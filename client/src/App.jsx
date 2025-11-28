import { Route, Routes } from "react-router"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"

function App() {

  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main className="flex-1">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App
