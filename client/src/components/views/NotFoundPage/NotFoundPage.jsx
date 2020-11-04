import React from 'react';
import { Typography } from "antd";

const {Title}=Typography;
const NotFoundPage = () => {
    return ( <div className="app">
        <Title level={2}>404 ... Page Not Found</Title>
    </div> );
}
 
export default NotFoundPage;