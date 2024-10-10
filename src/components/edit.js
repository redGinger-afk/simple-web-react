import { Form, Button, Container } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"
import { logout } from "./dashboard/logout"

const Edit = ({ title }) => {
  const [nama, setNama] = useState(localStorage.getItem("nama"))
  const [password, setPassword] = useState("")
  const [passwordBaru, setPasswordBaru] = useState("")

  if (!localStorage.getItem("nama") && !localStorage.getItem("nip")) {
    alert("Silahkan Login Kembali")
    window.location.replace("/login")
  }

  const updateProfile = () => {
    const requestingData = {
      nip: localStorage.getItem("nip"),
      passwordBaru: passwordBaru,
      password: password,
      nama: nama,
    }

    axios({
      method: "PUT",
      url: "http://localhost:3200/users",
      data: requestingData,
    }).then((result) => {
      alert("anda akan keluar dari sistem, silahkan login kembali.")
      logout()
    })
  }

  return (
    <Container>
      <div>
        <Form className="w-50 mx-auto">
          <h2>{title}</h2>
          <Form.Group>
            <Form.Label>Nama</Form.Label>
            <Form.Control
              onChange={(event) => setNama(event.target.value)}
              defaultValue={localStorage.getItem("nama")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password Baru</Form.Label>
            <Form.Control
              onChange={(event) => setPasswordBaru(event.target.value)}
            />
          </Form.Group>
          <hr />
          <Form.Group>
            <Form.Label>Password Lama</Form.Label>
            <Form.Control
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Form.Text className="text-muted">
            Silahkan masukkan password lama anda.
          </Form.Text>
          <Button
            className="w-100 mt-2"
            onClick={() => {
              updateProfile()
              // window.location.replace("/dashboard")
            }}
          >
            Update Profile
          </Button>
          <Button
            variant="danger"
            className="w-100 mt-2"
            onClick={() => window.location.replace("/dashboard")}
          >
            Kembali
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default Edit
