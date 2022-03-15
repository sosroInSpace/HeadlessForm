/*
  FormPage
*/


import React, { Component } from 'react';  
import axios from "axios";
import MasterForm from './MasterForm';


export default class FormPage extends React.Component {


    constructor(props) {
    super(props);

    // State.

    this.state = {
    
        text_fields: [],
        para_fields: [],
        select_name: [],
        select_option: [],
        page_name: ""
   
    };
  }

 getPageContent = async () => {
    const location =  window.location.pathname;
    const api_url =   "http://localhost:8000/wp-json/wp/v2/pages/?slug=" + location;
    console.log(api_url);

        let res = await axios.get(
            api_url
        );
        let { data } = await res;
        //text fields
        let text_fields = [];
        // para fields
        let para_fields = [];
        // select name
        let select_name;
        // select option
        let select_option = [];
        // page name
        let page_name;

        let array_objects = data.forEach((element, index, array) => {
            // save page name
            page_name = array[0].title.rendered;
            // check if acf fields available - if they are add additional form fields to state
             if(array[0].ACF){

                let acf = array[0].ACF;
            
                Object.entries(acf).forEach(([key, value]) => {
                    // if default one liner text is available

                   if(key == "form"){
                        value.forEach(function (item, index) {
                            text_fields.push(item.questions);
                        });
                   }
                   // if multi line text questions available
                   if(key == "multi_line"){
                        value.forEach(function (item, index) {
                            para_fields.push(item.multi_line_question);
                        });
                   }
                   // if select option is used
                   if(key == "select"){
                         value.forEach(function (item, index) {
                            
                            select_option.push(item.select_options);
                        });
                   }
                   // if select name is used
                   if(key == "select_name"){
                       select_name = value;
                   }

                });
          

             }
             
        });


        this.setState({ 
            select_name: select_name,
            select_option: select_option,
            para_fields: para_fields,
            text_fields: text_fields,
            page_name: page_name
         });
    };



 componentDidMount(){
    this.getPageContent()
 }


  render(){

  const { select_name, text_fields, para_fields, page_name } = this.state;


  return (

      <div className="page">
        <MasterForm
        form_name={this.state.page_name}
        text_fields={this.state.text_fields}
        para_fields={this.state.para_fields}
        select_name={this.state.select_name}
        select_option={this.state.select_option}
         />

       
    </div>
    );
  }
}