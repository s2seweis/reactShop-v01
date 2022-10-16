import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Field } from "formik";

import "./styles.css";

const initialValues = { value1: "", value2: "" };

const App = () => {
  const [formValues, setformValues] = useState(initialValues);
  const getFormData = values => {
    console.log("getFormData::", values);
  };
  console.log("formValues::", formValues);
  return (
    <div>
      <h1>Formik Form Reset</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {}}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          resetForm
          /* and other goodies */
        }) => {
          setformValues(values);
          getFormData(values);
          return (
            <form onSubmit={handleSubmit}>
              <Field type="text" name="value1" />
              <button type="reset" onClick={() => setFieldValue("value1", "")}>
                Reset This
              </button>
              <br />
              <Field type="text" name="value2" />
              <button type="reset" onClick={() => setFieldValue("value2", "")}>
                Reset This
              </button>
              <br />
              <button type="reset" onClick={resetForm}>
                Reset All
              </button>
              <br />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
