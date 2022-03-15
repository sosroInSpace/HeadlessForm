/*
  HomePage - renders master form
*/


import React, { Component } from 'react';  
import axios from "axios";
import MasterForm from './MasterForm';


export default class HomePage extends React.Component {


render(){

return (

      <div className="page">
        <MasterForm
        form_name="Master"
         />
      </div>
    );
  }
}