import { Container } from "react-bootstrap"
// import NavBar from "./dashboard/navbar"

const Home = ({ title }) => {
  return (
    <Container>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">HOME</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => window.location.replace("/login")}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => window.location.replace("/register")}
            >
              Register
            </button>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => window.location.replace("/daftarNama")}
          >
            Daftar Nama
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Home
