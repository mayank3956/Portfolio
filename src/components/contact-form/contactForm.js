import React, { Component, useState }  from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const envVars = process.env;
const ContactForm1 = () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const [ name,  setName ] = useState('')
  const [ email,  setEmail ] = useState()
  const [ subject,  setSubject ] = useState()
  const [ message,  setMessage ] = useState()
   console.log('nmae ', process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, process.env.REACT_APP_USER_ID);
//   onMessagechange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }
//   onNamechange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }
//   onEmailchange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }
//   onSubbjectchange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async () => {
      console.log('data daatd ',name, email,  process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, process.env.REACT_APP_USER_ID);
    // Send form email
  
    try {
      const templateParams = {
        name:name,
        email: email,
        subject: subject,
        message: message
      };
console.log('template', templateParams);
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      value ={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                      ref={register('name',{
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {/* {errors.name && <span className='errorMessage'>{errors.name.message}</span>} */}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      value ={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      ref={register('test',{
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {/* {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )} */}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      value ={subject}
                      onChange={(e) =>
                        setSubject(e.target.value)
                      }
                      ref={register('test',{
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {/* {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )} */}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      value ={message}
                      onChange={(e) =>
                        setMessage(e.target.value)
                      }
                      {...register('test',{
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {/* {errors.message && <span className='errorMessage'>Please enter a message</span>} */}
                  </div>
                </div>
                <button className='submit-btn' type='submit' onClick= {onSubmit}>
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm1;