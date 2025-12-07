import { Route, Routes } from "react-router"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import RecipeCreate from "./components/recipe-create/RecipeCreate"
import Logout from "./components/logout/Logout"
import { UserProvider } from "./contexts/UserContext"
import Catalog from "./components/catalog/Catalog"

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/recipes" element={<Catalog />} />
            <Route path="/recipes/create" element={<RecipeCreate />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </UserProvider>
  )
}

export default App
