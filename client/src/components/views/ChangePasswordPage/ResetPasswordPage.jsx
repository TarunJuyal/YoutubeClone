import React,{useState} from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button, Typography } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../config";
import { withRouter } from 'react-router-dom';

const {Title}=Typography;

const ResetPasswordPage = (props) => {
    const [FormErrorMessage, setFormErrorMessage] = useState("");
    const [Acknowledgment, setAcknowledgment] = useState("");

     return(
        <Formik initialValues={{password:"",confirmPassword:""}} validationSchema={Yup.object().shape({
            password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required"),
            confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
    })} 
        onSubmit={(values,{setSubmitting}) => {
            let dataToSubmit={
                password:values.password,
                resetPasswordToken:props.match.params.token,
            }
            console.log(dataToSubmit);
            axios.post(`${USER_SERVER}/reset`,dataToSubmit).then((response)=>{
                if(response.data.success){
                    setAcknowledgment(response.data.message);
                }else{
                    setFormErrorMessage(response.data.message)
                }
            })
            setSubmitting(false);
        }}>

        {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        
        return(
            <div className="app">
                <Title level={2}> Reset Password </Title>
                <form onSubmit={handleSubmit} style={{width:"350px"}}>

                    <Form.Item
                required
                label="Password"
                hasFeedback
                validateStatus={
                  errors.password && touched.password ? "error" : "success"
                }
              >
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              <Form.Item required label="Confirm" hasFeedback>
                <Input
                  id="confirmPassword"
                  placeholder="Enter your confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
              </Form.Item>

              {FormErrorMessage && (
                <label>
                  <p
                    style={{
                      color: "#ff0000bf",
                      fontSize: "0.7rem",
                      border: "1px solid",
                      padding: "1rem",
                      borderRadius: "10px",
                    }}
                  >
                    {FormErrorMessage}
                  </p>
                </label>
              )}

               {Acknowledgment && (
                <label>
                  <p
                    style={{
                      color: "#90ff5e",
                      fontSize: "0.7rem",
                      border: "1px solid",
                      padding: "1rem",
                      borderRadius: "10px",
                    }}
                  >
                    {Acknowledgment}
                  </p>
                </label>
              )}

              <div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ minWidth: "100%" }}
                    disabled={isSubmitting}
                    onSubmit={handleSubmit}
                  >
                     Reset
                  </Button>
            </div>
            </form>
            </div>
        );
        }}
    </Formik>
    )
}
 
export default withRouter(ResetPasswordPage);