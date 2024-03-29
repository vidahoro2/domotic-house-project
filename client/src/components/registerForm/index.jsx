import React from "react";
import "./registerForm.css";
import { Form, Formik } from "formik";
import { insertUserRequest } from "../../api/users.api";

function RegisterForm({ title = "¡Bienvenido!", action = "¡Registrate!" }) {
  return (
    <>
      <div className="register-form-container">
        <h2>{title}</h2>

        <div>
          <Formik
            initialValues={{
              fullname: "",
              address: "",
              phone: "",
              email: "",
              username: "",
              password: "",
            }}
            onSubmit={async (values, actions) => {
              try {
                console.log(values);
                if (
                    !values.fullname ||
                    !values.address ||
                    !values.phone ||
                    !values.email ||
                    !values.username ||
                    !values.password
                  ) {
                    console.log("Hay algunos campos vacios, rellene los campos");
                  } else {
                    const response = await insertUserRequest(values);
                    actions.resetForm();
                  }
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <div className="first-column-container">
                  <label className="form-label" htmlFor="name-and-last-name">
                    Nombres y apellidos:
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="name-and-last-name"
                    onChange={handleChange}
                    value={values.fullname}
                  ></input>

                  <label className="form-label" htmlFor="home-address">
                    Dirección de residencia:
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="home-address"
                    onChange={handleChange}
                    value={values.address}
                  ></input>

                  <label className="form-label" htmlFor="phone-number">
                    Teléfono:
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone-number"
                    onChange={handleChange}
                    value={values.phone}
                  ></input>

                  <label className="form-label" htmlFor="email">
                    Correo Electrónico:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                  ></input>
                </div>

                <div className="second-column-container">
                  <label className="form-label" htmlFor="user-name">
                    Nombre de usuario:
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="user-name"
                    onChange={handleChange}
                    value={values.username}
                  ></input>

                  <label className="form-label" htmlFor="password">
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                  ></input>

                  <div className="button-container">
                    <button id="submit-button" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Saving...": action}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export { RegisterForm };
