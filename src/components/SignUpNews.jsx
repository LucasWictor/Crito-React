import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Wavylines from '@images/background-wavy-lines.svg';

const SignUpNews = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Should follow a valid email format (e.g., user@example.com.').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className="newsletter">
      <img className="Background-wavy-lines" src={Wavylines} alt="" />
      <div className="container">
        <h2> Join Us for Exclusive News Updates</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="Your email address.."
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
          <button type="submit" className="btn-sub">
            Subscribe<i className="fa-solid fa-arrow-up-right"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUpNews;