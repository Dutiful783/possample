import React from 'react';
import {Link} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
        <div className='bg-light p-5 mt-4 rounded-3'>
            <h1>Welcome to simple POS for small business</h1>
            <p>Please do well to refer us to people for more business appointment</p>
            <p>If you have any issue, call 443-444-xxx anytimes</p>
            <Link to="/pos" className="btn btn-primary">Click here to sell products</Link>
        </div>
    </MainLayout>
  )
}

export default HomePage
