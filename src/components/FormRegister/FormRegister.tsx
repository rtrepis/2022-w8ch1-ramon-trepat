import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FromRegister.css";

const FormRegister = (): JSX.Element => {
  const [part, setPart] = useState("personalData");

  return (
    <>
      <div className="container">
        <Form className="form-register">
          <h1 className="form-title">Register</h1>
          {part === "personalData" && (
            <>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter your first name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" placeholder="Enter your last name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBirthDay">
                <Form.Label>Birth day</Form.Label>
                <Form.Control type="date" placeholder="dd/mm/yyyy" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <div className="form-footer">
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => setPart("registerData")}
                  className="form-button"
                >
                  {">>"}
                </Button>
              </div>
            </>
          )}

          {part === "registerData" && (
            <>
              <Form.Group className="mb-3" controlId="formUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="name" placeholder="UserName" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                  Write password more 8 characters. not implemented
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPasswordRepeat">
                <Form.Label>Password Repeat</Form.Label>
                <Form.Control type="password" placeholder="Password Repeat" />
              </Form.Group>
              <div className="form-footer">
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => setPart("personalData")}
                  className="form-button"
                >
                  {"<<"}
                </Button>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => setPart("login")}
                  className="form-button"
                >
                  {">>"}
                </Button>
              </div>
            </>
          )}

          {part === "login" && (
            <>
              <Form.Group className="mb-3" controlId="formUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="name" placeholder="UserName" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formRememberCheckbox">
                <Form.Check type="checkbox" label="Remember login" />
              </Form.Group>
              <div className="form-footer">
                <Button variant="primary" type="submit" className="form-button">
                  Login
                </Button>
              </div>
            </>
          )}
        </Form>
      </div>
    </>
  );
};

export default FormRegister;
