import { Landing } from "pages/landing/landing"
import {BrowserRouter, Routes, Route} from "react-router-dom"

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routing
