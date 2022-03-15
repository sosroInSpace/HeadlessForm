import React, { Fragment } from "react";
import axios from "axios";
import "./App.scss";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
// pages
import FormPage from './components/FormPage';
import HomePage from './components/HomePage';
import ThankYou from './components/ThankYou';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pages: []
        };
    }

    getAllPages = async () => {
        let res = await axios.get(
            `http://localhost:8000/?rest_route=/wp/v2/pages`
        );
        let { data } = await res;
        this.setState({ pages: data });

    };

    componentDidMount = async () => {
        await this.getAllPages();
    };

    render() {
        const { pages } = this.state;

        return (
           <Router>
            <Fragment>
                    {/* Links */}
                    <div class="topnav">
                        <div>
                        <Link to="/">Home</Link>
                        {pages.map((page, index) => {
                            if(page.slug == "home"){
                                // dont render home link
                            } else {
                                // render other nav links
                                return  <Link to={page.slug}>{page.slug.replace(/-/g, " ")}</Link>;
                            }
                            
                        })}
                        <a href="http://localhost:8000/wp-admin" className="admin-login" target="_blank">Login</a>
                        </div>
                    </div>

                    {/* Routing */}
                    
                    {pages.map((page, index) => {
                        // if slug is home render route to default home page
                        if(page.slug == "home"){
                            return (
                                <Routes>
                                    <Route
                                        exact
                                        path='/'
                                        element={<HomePage/>}
                                    />
                                </Routes>
                            );
                        } else {
                            // return api based routes
                             return (
                                <Routes>
                                    <Route
                                        exact
                                        key={index}
                                        path={page.slug}
                                        element={<FormPage/>}
                                    />
                                </Routes>
                            );
                        }
                         
                       
                    })}
                    <Routes>
                            <Route
                                exact
                                path='/thank-you'
                                element={<ThankYou/>}
                            />
                        </Routes>
                </Fragment>
          </Router>
        );
    }
}