import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const ContactForm = () => {
  const form = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      Message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Please enter your first name.')
        .min(2, 'First name must be at least two characters long'),
      email: Yup.string()
        .required('Please enter a valid email address.')
        .email('Should follow a valid email format (e.g., user@example.com.)'),
      Message: Yup.string()
        .required('Please enter your message.')
        .min(10, 'Your message must not be empty and at least 20 characters long.'),
    }),
        
    // onSubmit: (values) => {
    //   console.log(values);
    //   console.log(form.errors);  
    // },
  });

  return (
    <form onSubmit={form.handleSubmit} noValidate>
      <section className="contact-form">
        <div className="container">
          <div className="text-container">
            <h2>Leave us a message</h2>
            <h2>for any information.</h2>
          </div>
          <div className="details">
            <div>
              {form.touched.firstName && form.errors.firstName && (
                <label htmlFor="name">{form.errors.firstName}</label>
              )}
              <input
                type="text"
                name="firstName"
                value={form.values.firstName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="name"
                tabIndex="1"
                placeholder="First name"
              />
            </div>
            <div>
              {form.touched.email && form.errors.email && (
                <label htmlFor="email">{form.errors.email}</label>
              )}
              <input
                type="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="email"
                tabIndex="2"
                placeholder="Email address"
              />
            </div>
            <div>
              {form.touched.Message && form.errors.Message && (
                <label htmlFor="message">{form.errors.Message}</label>
              )}
              <textarea
                name="Message"
                value={form.values.Message}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="message"
                cols="30"
                rows="15"
                tabIndex="3"
                placeholder="Your Message..."
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn-yellow">
                send message
                <i className="fa-regular fa-arrow-up-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default ContactForm;