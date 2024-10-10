import Login from "./components/login"
import Register from "./components/register"
import Home from "./components/home"
import NavBar from "./components/dashboard/"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DaftarNama from "./components/daftarNama"
import Edit from "./components/edit"
import Dashboard from "./components/dashboard/"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home title={"HOME PAGE"} />} />
        <Route
          path="/login"
          element={
            <Login title={"LOGIN PAGE"} description="MINI ABSENSI APPS" />
          }
        />
        <Route
          path="/register"
          element={
            <Register title={"REGISTER PAGE"} description="MINI ABSENSI APPS" />
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard title={"DASHBOARD PAGE"} />}
        />
        <Route
          path="/daftarNama"
          element={
            <DaftarNama
              title={"Daftar Nama"}
              description="INI ADALAH LIST NAMA YANG TERDAFTAR"
            />
          }
        />
        <Route path="/edit" element={<Edit title={"EDIT"} />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </Router>
  )
}

export default App
