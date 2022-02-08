import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

const NotFound = () => {
    // document.title = "Not Found";

    return (
        <div className="row justify-content-center align-items-center">
            <div className="d-flex justify-content-center mb-5">
                <Link to="/" className="text-decoration-none">
                    <Button
                        className="capitalize "
                        variant="contained"
                        color="primary"
                    >
                        Back to Dashboard
                    </Button>
                </Link>
            </div>
            <div className="col-md-4">
                <img
                    className="w-100"
                    src="/assets/404.svg"
                    alt=""
                />
            </div>
        </div>
    )
}

export default NotFound
