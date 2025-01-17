import Edit from "../edit"
import { logout } from "./logout"

const NavBar = () => {
  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">{localStorage.getItem("nama")}</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group me-2">
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => window.location.replace("/edit")}
          >
            Edit Profile
          </button>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary"
          onClick={() => logout()}
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default NavBar
