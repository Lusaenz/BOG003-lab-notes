/* eslint-disable */
import React from "react";
import {  useNavigate } from "react-router-dom"
import { Formik } from "formik";
import { registerGoogle, loginEmailPassword } from "../firebase/Firebase";
import "./TempletLogin.css"
const Login = function () {
const navigate = useNavigate();
  return (
    <div className="containerLogin">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Campo Requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Correo invalido";
          } else if (!values.password) {
            errors.password = "Campo Requerido";
            /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i.test(
              values.password
            );
          }
          return errors;
        }}
        onSubmit={(user) => {
          alert(user.email);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="formLogin">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Correo electronico"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button
              onClick={() =>
                loginEmailPassword(values.email, values.password).then(() => {
                  navigate("/Home");
                })
              }
              type="submit"
              disabled={isSubmitting}
            >
              Inicia sesión
            </button>
            <button
              type="button"
              className="btn.login"
              onClick={() => registerGoogle()}
            >
              Continua con Google
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
