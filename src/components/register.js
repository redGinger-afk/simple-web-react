import { Container, Form, Button } from "react-bootstrap"
import ReactTypingEffect from "react-typing-effect"
import { useState } from "react"
import axios from "axios"
import { HomeButton } from "./homeButton"

function Register({ title, description }) {
  //functional component, bukan class component
  const [NIP, setNIP] = useState("")
  const [nama, setNama] = useState("")
  const [password, setPassword] = useState("")

  // function agar tidak hardcode
  const handleNIP = (inputNIP) => {
    setNIP(inputNIP)
  }

  const handleNama = (inputNama) => {
    setNama(inputNama)
  }

  const handlePassword = (inputPassword) => {
    setPassword(inputPassword)
  }

  const userRegister = () => {
    console.log("user register ready!")

    const requestingData = {
      nip: NIP,
      nama: nama,
      password: password,
    }

    axios({
      method: "POST",
      url: "http://localhost:3200/users",
      data: requestingData,
    }).then((result) => {
      if (result.data.registered) {
        alert("register berhasil")
        window.location.replace("/login")
      } else {
        alert("Gagal register, coba dengan NIP lain")
      }
    })
  }

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
      <Form className="w-50 mx-auto">
        <Form.Group>
          <Form.Label className="fw-bold">NIP</Form.Label>
          <Form.Control
            type="number"
            placeholder="Masukkan NIP Anda!"
            required
            onChange={(event) => handleNIP(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="fw-bold">Nama</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Nama Anda!"
            required
            onChange={(event) => handleNama(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="******"
            required
            onChange={(event) => handlePassword(event.target.value)}
          />
        </Form.Group>
        <Button
          variant="warning"
          className="mt-3 w-100"
          onClick={() => userRegister()}
          //   onClick={() => console.log("user login ready!")} ==> ini adalah contoh harcode
        >
          Register Sekarang
        </Button>
        <Button
          variant="danger"
          className="mt-2 w-100"
          onClick={() => HomeButton()}
          //   onClick={() => console.log("user login ready!")} ==> ini adalah contoh harcode
        >
          Kembali
        </Button>
      </Form>
    </Container>
  )
}

export default Register
