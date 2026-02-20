import { AuthProvider } from "./contexts/AuthContext"
// import { BreadcrumbProvider } from "./contexts/BreadcrumbContext"
import RoutePage from "./routes/RoutePage"
import { Toaster } from 'react-hot-toast'
const App = () => {

  return (
    <AuthProvider>
     
        <RoutePage />
        <Toaster />
   

    </AuthProvider>

  )
}

export default App
