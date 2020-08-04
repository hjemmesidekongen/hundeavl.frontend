import React from 'react';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const NewsletterSignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">E-mail adresse</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>

      <button type="submit" className="button button--tertiary">
        <FontAwesomeIcon icon={faCheck} />
      </button>
    </form>
  );
};

export default NewsletterSignupForm;
