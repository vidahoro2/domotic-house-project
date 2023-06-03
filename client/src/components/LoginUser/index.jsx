import React from "react";
import "./LoginUser.css";
import { Form, Formik } from "formik";
import { loginUserRequest } from "../../api/users.api";
import { redirect } from 'react-router-dom';

function LoginUser() {

  const handleLogin = async (values, actions) => {
    try {
      if (!values.email || !values.password) {
        console.log("Hay campos vacíos. Por favor, rellene los campos.");
      } else {
        console.log(values);
        const response = await loginUserRequest(values);
        // Verificar la respuesta del inicio de sesión
        if (response.data.success) {
          // Inicio de sesión exitoso, redirigir a la página principal
          console.log(response.data.success);
          //return redirect('/services');
        } else {
          console.log("Error de inicio de sesión:", response.error);
        }
      }
    } catch (error) {
      console.error(error);
    }
    actions.setSubmitting(false);
  };

  return (
    <>
      <div className="login-user-container">
        <div>
          <img src="/src/assets/Logo.png" />
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <p> Login </p>
              <input
                className="user-name inputs"
                name="email"
                placeholder="Insert email"
                onChange={handleChange}
                value={values.email}
              ></input>
              <p> Password </p>
              <input
                type="password"
                className="user-password inputs"
                id="password"
                name="password"
                placeholder="Insert password"
                onChange={handleChange}
                value={values.password}
              ></input>
              <p id="forget-psw"> ¿Olvidaste tu contraseña?</p>
              <div>
                <button
                  id="submit-button"
                  type="submit"
                  className="loginButton"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Ingresando..." : "Iniciar Sesión"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export { LoginUser };

