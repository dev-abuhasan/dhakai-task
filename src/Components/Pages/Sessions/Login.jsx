import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Style/Login.scss';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import Loading from '../../Parent/Loadings/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../services/redux/actions/userAction';

const Login = () => {
    document.title = "Log In";

    const location = useLocation();
    const history = useHistory()
    let { from } = location.state || { from: { pathname: "/" } };

    const dispatch = useDispatch();
    const { user, loading: loginLoading } = useSelector(
        ({ userLogin }) => userLogin
    );
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...userInfo }
        temp[name] = value
        setUserInfo(temp)
    }

    const handleFormSubmit = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const { data } = await axios.get(
                `${process.env.REACT_APP_SERVER_API}/deviceuid`, config);
            const deviceUid = data.result.deviceUuid;
            toast.success(`Device Id Get Success (${deviceUid})`);
            if (deviceUid) {
                dispatch(login(userInfo.email, userInfo.password, deviceUid));
            }
        } catch (err) {
            const error =
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message;
            console.log(error);
            toast.error("device uid not found");
        }

    }
    useEffect(() => {
        if (user) {
            history.push(from);
        }
    }, [user, from, history]);

    return (
        <Container className='main_login'>
            {loginLoading && <Loading />}
            <Row className='pt-5 mt-5'>
                <div className="col-md-4 px-4 d-flex">
                    <img
                        width="auto"
                        height="auto"
                        src="https://i.ibb.co/Yj7wgCW/download.png"
                        alt="Logo"
                    />
                </div>
                <div className="col-md-6">
                    <h4 className="pb-3">Enter Login Details</h4>
                    <ValidatorForm onSubmit={handleFormSubmit}>
                        <TextValidator
                            className="w-100 mb-3"
                            variant="outlined"
                            size="small"
                            label="Email (rajib2@gmail.com)"
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={userInfo.email}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'this field is required',
                                'email is not valid',
                            ]}
                        />
                        <TextValidator
                            className="w-100 mb-3"
                            label="Password (123456)"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            name="password"
                            type="password"
                            value={userInfo.password}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />

                        <div className="flex  items-center">
                            <div className="">
                                <button className="btn btn-success px-5 " type="submit">
                                    Login
                                </button>
                            </div>
                        </div>
                    </ValidatorForm>
                </div>
            </Row>
        </Container>
    )
}
export default Login
