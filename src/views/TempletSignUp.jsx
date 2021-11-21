/* eslint-disable */
import React from "react";
import { Formik } from "formik";
import { userRegister, registerGoogle } from "../firebase/Firebase";

const Register = function () {
  return (
    <div>
      <h1>Bienvenidx</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Campo Requerido";
            /* eslint-disable */
            /^[a-zA-Z\_\-]{4,16}$/i.test(values.name);
          } else if (!values.email) {
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
          userRegister(user.email, user.password);
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <input
              type="email"
              name="email"
              placeholder="Correo electronico"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Registrate
            </button>
            <button type="button" className="" onClick={() => registerGoogle()}>
              Continua con Google
            </button>
            <p>¿Ya tienes una cuenta?</p>
            <a href="/Login">Inicia sesión</a>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
