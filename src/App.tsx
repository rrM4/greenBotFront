import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "@/pages/public/Welcome.tsx";
import PublicRoutes from "@/pages/PublicRoutes.tsx";
import ProtectedRoutes from "@/pages/ProtectedRoutes.tsx";
import NotFound from "@/pages/NotFound.tsx";

import ChatBotDemo from '@/pages/public/ChatBotDemo';

function App() {

  return (
      <Router>
          <Routes>
              {/* Public routes */}
              <Route element={<PublicRoutes/>}>
                  <Route index element={<Welcome/>}></Route>
                  <Route path="demo" element={<ChatBotDemo/>}/>
              </Route>

              {/* Private routes */}
              <Route element={<ProtectedRoutes/>}>
                  <Route path="main" element={<Welcome/>}></Route>
              </Route>

              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </Router>

  )
}

export default App
