import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { withRouter, Redirect } from 'react-router-dom';

export default function Auth(WrappedComponent) {
    class AuthHOC extends Component {
        render() {
            const token = Cookies.get('token');
            return !token ? <Redirect to="/login" /> : <WrappedComponent />;
        }
    }

    return withRouter(AuthHOC);
}