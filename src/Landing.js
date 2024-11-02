import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import Logo from "./assets/logo.svg";
import LandingPic from "./assets/landing.png";

export default function Landing() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
     .email('Invalid email address')
     .required('Email is required'),
  });
  const handleSubmit = (values, {resetForm}) => {
    resetForm();
    alert(`Email Submitted Successfully!`);
  }
  return (
    <div className={`w-screen h-dvh lg:h-[100vh] bg-gradient-to-b from-dark to-light flex flex-col justify-center text-white lg:pl-48`}>
      {/** Logo - Desktop */}
      <img src={Logo} alt="Deal Flower logo with the app name" className={`hidden lg:inline-block w-[128px] absolute top-8`}/>
      {/** Main Div */}
      <div className={`flex justify-center`}>
        {/** Logo - Mobile & Tablet */}
        <img src={Logo} alt="Deal Flower logo with the app name" className={`w-[128px] absolute top-8 lg:hidden`}/>
        {/** Left Side Text Info Div */}
        <div className={`w-3/4 md:w-1/2 pt-24 lg:pt-0 space-y-16 lg:space-y-20`}>
          <h1 className={`text-center lg:text-left text-[8vw] md:text-[5vw] lg:text-[4vw] font-semibold tracking-wide leading-snug`}>Get Ready, We Are Launching Soon 🚀</h1>
          <p className={`text-center lg:text-left text-lg font-light tracking-wide`}>Enter your email below to get notified when we launch!</p>

          {/** Email Form */}
          <Formik initialValues={{ email: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form className={`flex flex-col lg:flex-row space-y-6 lg:space-y-2 lg:space-x-6`}>
              <div className={`w-full lg:w-[55%] flex flex-col space-y-2`}>
                <label htmlFor="email" className={`hidden lg:inline-block`}>Email</label>
                <Field type="email" name="email" id="email" placeholder="jane.doe@dealflower.io" className={`bg-transparent border-b-2 focus:outline-none`}/>
              </div>
              <button type="submit" className={`w-full lg:w-auto text-green tracking-wide py-2 lg:px-8 border-green border-2 lg:border-[0.5px] rounded`}>NOTIFY ME!</button>
            </Form>
          </Formik>

        </div>
        {/** Landing Picture - Desktop */}
        <div className={`hidden lg:inline-block w-1/2`}>
          <img draggable={false} src={LandingPic} className={`w-1/2 absolute -right-20 top-1/2 transform -translate-y-1/2`}/>
        </div>
      </div>
    </div>
  )
};