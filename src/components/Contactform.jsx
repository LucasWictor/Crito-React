import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useFormik({
    initialValues: {
      Name: '', 
      email: '',
      Message: '',
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .required('Please enter your first name.')
        .min(2, 'First name must be at least two characters long'),
      email: Yup.string()
        .required('Please enter a valid email address.')
        .email('Should follow a valid email format (e.g., user@example.com.)'),
      Message: Yup.string()
        .required('Please enter your message.')
        .min(10, 'Your message must not be empty and at least 20 characters long.'),
    }),
    onSubmit: async (values) => {
        try {
          setSubmitting(true);
      
          // Log the submitted data
          console.log('Submitting data:', values);
      
          // Make a POST request to the API
          const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
      
          // Log the response status
          console.log('Response Status:', response.status);
      
          // Check if the form submission was successful
          setSubmitSuccess(response.ok);
      
          if (!response.ok) {
            // Log error response
            const errorResponse = await response.text();
            console.error('Error submitting form. Response:', errorResponse);
          }
        } catch (error) {
          // Log any errors during submission
          console.error('Error submitting form:', error);
          setSubmitSuccess(false);
        } finally {
          // Set submitting state to false
          setSubmitting(false);
        }
      },
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
            {submitSuccess && <p>Your message has been sent!</p>}
            <div>
              {form.touched.Name && form.errors.Name && (
                <label htmlFor="Name">{form.errors.Name}</label>
              )}
              <input
                type="text"
                name="Name"
                value={form.values.Name}
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
                <label htmlFor="Message">{form.errors.Message}</label>
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
              <button type="submit" className="btn-yellow" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message'}
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