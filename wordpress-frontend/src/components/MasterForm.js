/*
  MasterForm
*/


import React, { Component } from 'react';
import axios from "axios";
import serialize from 'form-serialize'

const api_url = "https://74jqgld040.execute-api.us-east-1.amazonaws.com/dev/email/send";

export default class MasterForm extends React.Component {


    constructor(props) {
        super(props);

        // State.

        this.state = {

            data: [],
            page_name: "",
            status: false

        };
    }
    handleSubmit(event) {

        event.preventDefault();
        const form = event.currentTarget;
        const body = serialize(form, { hash: true, empty: true });
        this.setState({
            status: !this.state.status
        })

        fetch(api_url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(body)
            })

            .then(response => {
                // success
                console.log(response.body);
                console.log(body);
                form.reset();
                window.location = "/thank-you";
            })
            .catch(err => {
                //error
                alert(err);
            });


    }


    render() {


        const { text_fields, para_fields, select_name, select_option, form_name } = this.props;


        return (

            <div className="page">
                <div className="form-header">
                    <h1>{form_name} form</h1>
                </div> 
                <form action="" name={form_name + "-form"} onSubmit={this.handleSubmit.bind(this)}>
                    <div className="fieldset-double">
                        <fieldset>
                            <label for="name">Name*</label>
                            <input type="text" name="name" required/>
                        </fieldset>
                         <fieldset>
                            <label for="name">Phone*</label>
                            <input type="text" name="phone" required/>
                        </fieldset>
                    </div>
                     <fieldset>
                        <label for="name">Email*</label>
                        <input type="text" name="email" required/>
                    </fieldset>

                        {text_fields ? 
                            // render data if available
                            text_fields.map((question, index) => {
                                return <fieldset key={index}><label>{question}</label><input type="text" name={question.replace(/ /g, "-")}/></fieldset>;
                            })

                            : 
                            // return nothing if no data prop given
                            ""
                        
                        }
                        {para_fields ? 
                            // render data if available
                            para_fields.map((question, index) => {  return <fieldset key={index}><label>{question}</label><textarea type="textarea" name={question.replace(/ /g, "-")}></textarea></fieldset>;
                            })

                            : 
                            // return nothing if no data prop given
                            ""
                        
                        }
                        {select_name ? 
                            <fieldset><label>{select_name}</label>
                                {select_option ? select_option.map((question, index) => { return <div className="checkbox" key={index}><input type="checkbox" id={question} key={index}/><label for={question}>{question}</label></div> }) : "" }
                            </fieldset> : ""}
                        
                    <fieldset>
                        <input type="submit" name="submit" value={this.state.status ? "SENDING.." : "SUBMIT"}/>
                    </fieldset>
                 </form>
            </div>
        );
    }
}