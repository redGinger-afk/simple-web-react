import { useEffect, useState } from "react"
import { Container, Badge, Button } from "react-bootstrap"
import axios from "axios"
import NavBar from "./navbar"

function Dashboard({ title }) {
  const [absensiList, setAbsensiList] = useState([])
  const [absenNotif, setAbsenNotif] = useState(false)
  useEffect(() => {
    if (!localStorage.getItem("nama") && !localStorage.getItem("nip")) {
      console.log("user belum login")
      window.location.replace("/login")
    }
    axios({
      method: "GET",
      url: "http://localhost:3200/absensi",
    }).then((result) => setAbsensiList(result.data.absensi))
  }, [absenNotif])

  const absen = (params) => {
    const requestingData = {
      nip: localStorage.getItem("nip"),
    }
    axios({
      method: "POST",
      url: `http://localhost:3200/absensi/${params}`,
      data: requestingData,
    }).then(() => {
      setAbsenNotif(!absenNotif)
    })
  }

  return (
    <Container>
      <div>
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
          <NavBar />
          <div>
            <Button
              variant="warning"
              style={{ cursor: "pointer" }}
              onClick={() => absen("checkin")}
            >
              Check In
            </Button>
            <Button
              variant="danger"
              className="mx-2"
              style={{ cursor: "pointer" }}
              onClick={() => absen("checkout")}
            >
              Check Out
            </Button>
          </div>
          <h2>{title}</h2>
          <div className="table-responsive mt-3">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Users_NIP</th>
                  <th scope="col">Status</th>
                  <th scope="col">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {absensiList.map((absensi, i) => {
                  const { users_nip, status, createdAt } = absensi
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{users_nip}</td>
                      <td>{status}</td>
                      <td>{createdAt} </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </Container>
  )
}

export default Dashboard
