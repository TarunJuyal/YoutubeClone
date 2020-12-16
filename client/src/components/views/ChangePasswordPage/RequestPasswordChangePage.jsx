import React,{useState} from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button, Typography } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../config";
import { withRouter } from 'react-router-dom';

const {Title}=Typography;

const RequestPasswordChange = (props) => {
    
    const [FormErrorMessage, setFormErrorMessage] = useState("");
    const [Acknowledgment, setAcknowledgment] = useState("");

    return(
        <Formik initialValues={{email:""}} validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
    })} 
        onSubmit={(values,{setSubmitting}) => {
            let dataToSubmit = {
                email: values.email,
            };
            console.log(dataToSubmit);
            axios.post(`${USER_SERVER}/forgotPassword`,dataToSubmit).then((response)=>{
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
                <Title level={2}>Password Change Request</Title>
                <form onSubmit={handleSubmit} style={{width:"350px"}}>
                <Form.Item required>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                  onPressEnter={handleSubmit}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
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
                    Send Reset Email
                  </Button>
            </div>
            </form>
            </div>
        );
        }}
    </Formik>
    )
}
 
export default withRouter(RequestPasswordChange);