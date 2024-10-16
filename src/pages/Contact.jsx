


























import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import ShopImage from '../../public/shop-top.webp';
import Logo from '../../public/furniro.png';
import './Contact.css';
import Location from "../../public/Location.png";
import Phone from "../../public/bxs_phone.png";
import Time from "../../public/bi_clock-fill.png";
import { Link } from 'react-router-dom';

const Contact = () => {
  // حالة لإظهار رسالة النجاح
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'name must contain at least 3 letters')
        .required('name field is mandatory'),
      email: Yup.string()
        .email('e-mail is invalid')
        .required('e-mail field is mandatory'),
      subject: Yup.string(),
      message: Yup.string()
        .min(10, 'message must contain at least 10 letters')
        .required('message field is mandatory'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Form Submitted', values);
      setIsSubmitted(true); // إظهار رسالة النجاح
      resetForm(); // إعادة تعيين النموذج بعد الإرسال
    },
  });

  return (
    <>
      <div className="shop-container">
        <img className="ShopImage" src={ShopImage} alt="Shop Background" />
        <div className="center-content">
          <img className="logo" src={Logo} alt="Logo" />
          <h1>Contact</h1>
          <nav className="breadcrumb">
            <Link to="/">Home</Link> &gt; <Link to="/shop">Contact</Link>
          </nav>
        </div>
      </div>

      <div className="title">
        <h2>Get In Touch With Us</h2>
        <p className="para3">
          For More Information about our Products or Services, Please Feel Free to Drop Us<br />
          An Email, Call or Fill A Message Form to Inquire. You Can Also Visit Us!
        </p>
      </div>

      <div className="contact-section">
        <div className="contact-info">
          <div className="info-item">
            <h3><img src={Location} alt="Location" /> Address</h3>
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          <div className="info-item">
            <h3><img src={Phone} alt="Phone" /> Phone</h3>
            <p>
              Phone: <a href="tel:+123456789">+1 (234) 567-890</a>
              <br />
              Mobile: <a href="tel:+123456789">+1 (234) 456-7890</a>
            </p>
          </div>
          <div className="info-item">
            <h3><img src={Time} alt="Time" /> Working Time</h3>
            <p>Monday-Friday: 9:00 - 20:00<br />Saturday-Sunday: 9:00 - 15:00</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Enter your name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your email address"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              placeholder="This is optional"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder="Write to us about"
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="error">{formik.errors.message}</div>
            ) : null}
          </div>

          <button type="submit" className="submit-btn">Submit</button>

          {/* رسالة النجاح */}
          {isSubmitted && (
            <div className="success-message">
              message sent successfuly !
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;

