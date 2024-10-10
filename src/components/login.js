import { Container, Form, Button } from "react-bootstrap"
import ReactTypingEffect from "react-typing-effect"
import { useState } from "react"
import axios from "axios"
import { HomeButton } from "./homeButton"
// import axios from "axios"

function Login({ title, description }) {
  //functional component, bukan class component
  const [NIP, setNIP] = useState("")
  const [password, setPassword] = useState("")

  if (localStorage.getItem("nama") && localStorage.getItem("nip")) {
    alert("Anda Masih Login...")
    window.location.replace("/dashboard")
  }

  // function agar tidak hardcode
  const handleNIP = (inputNIP) => {
    setNIP(inputNIP)
  }

  const handlePassword = (inputPassword) => {
    setPassword(inputPassword)
  }

  const userLogin = () => {
    console.log("user login ready!")

    const requestingData = {
      nip: NIP,
      password: password,
    }

    axios({
      method: "POST",
      url: "http://localhost:3200/users/login",
      data: requestingData,
    }).then((result) => {
      localStorage.setItem("nip", result.data.users.nip)
      localStorage.setItem("nama", result.data.users.nama)
      window.location.replace("/dashboard")
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
          className="mt-4 w-100"
          onClick={() => userLogin()}
        >
          Login Sekarang
        </Button>
        <Button
          variant="danger"
          className="mt-4 w-100"
          onClick={() => HomeButton()}
        >
          ← Homepage
        </Button>
      </Form>
    </Container>
  )
}

export default Login
