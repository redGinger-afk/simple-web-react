import { Button, Container } from "react-bootstrap"
import ReactTypingEffect from "react-typing-effect"
import { HomeButton } from "./homeButton"
import { useEffect, useState } from "react"
import axios from "axios"

function DaftarNama({ title, description }) {
  const [listNama, setListNama] = useState([])

  const getList = () => {
    axios({
      method: "GET",
      url: "http://localhost:3200/users",
    }).then((result) => {
      setListNama(result.data.users)
    })
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <Container>
      <div className="d-flex justify-content-center fw-bold h3 my-4">
        <ReactTypingEffect
          text={[title, description]}
          speed={100}
          eraseDelay={800}
          eraseSpeed={100}
          typingDelay={100}
        />
      </div>
      <div>
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">NIP</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {listNama.map((user, i) => {
                  const { nip, nama, createdAt } = user
                  return (
                    <tr key={i}>
                      <td>{nip}</td>
                      <td>{nama}</td>
                      <td>{createdAt} </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </main>
        <Button
          variant="danger"
          className="mt-4 w-100"
          onClick={() => HomeButton()}
        >
          ← Homepage
        </Button>
      </div>
    </Container>
  )
}

export default DaftarNama
