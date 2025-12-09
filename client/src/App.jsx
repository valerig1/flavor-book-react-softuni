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
import Details from "./components/details/Details"
import Edit from "./components/edit/Edit"
import ProtectedRoute from "./components/route-guard/ProtectedRoute"
import GuestRoute from "./components/route-guard/GuestRoute"
import OwnerRoute from "./components/route-guard/OwnerRoute"

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>

            {/* Guest Routes */}
            <Route element={<GuestRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            {/* Auth Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/recipes/create" element={<RecipeCreate />} />
              <Route path="/logout" element={<Logout />} />
            </Route>

            {/* Owner Only Routes */}
            <Route element={<OwnerRoute />}>
              <Route path="/recipes/:recipeId/edit" element={<Edit />} />
            </Route>

            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Catalog />} />
            <Route path="/recipes/:recipeId/details" element={<Details />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </UserProvider>
  )
}

export default App
