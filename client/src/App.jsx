import { Route, Routes } from "react-router"
import { UserProvider } from "./contexts/UserContext"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Logout from "./components/logout/Logout"
import Catalog from "./components/catalog/Catalog"
import RecipeCreate from "./components/recipe-create/RecipeCreate"
import Details from "./components/details/Details"
import Edit from "./components/edit/Edit"
import Footer from "./components/footer/Footer"
import GuestRoute from "./components/route-guard/GuestRoute"
import ProtectedRoute from "./components/route-guard/ProtectedRoute"
import OwnerRoute from "./components/route-guard/OwnerRoute"
import NotFound from "./components/not-found/NotFound"

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </UserProvider>
  )
}

export default App
