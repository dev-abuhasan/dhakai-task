import './LayoutScss/TopNav.scss';
import { Icon } from '@material-ui/core';
import { Nav, Navbar } from 'react-bootstrap';

const AdminTopNav = () => {

    return (
        <main id="mainTopNavbar" className="px-5">
            <Navbar expand="lg" className="main_nav_parent d-flex justify-content-end p-0">
                <Navbar.Toggle className='' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100">
                        <div className='w-100 lgScreen d-flex align-items-center justify-content-between '>
                            <div className=''>
                                <div className='buttonGroup d-flex align-items-center'>
                                    <span className='btn explore'>Explore</span>
                                    <span className='btn'>Activity</span>
                                </div>
                            </div>
                            <div className='' id="navSrcBar">
                                <form>
                                    <div className='position-relative'>
                                        <input
                                            type='text'
                                            placeholder="Search by name, group, type and others"
                                        />
                                        <Icon>search</Icon>
                                    </div>
                                </form>
                            </div>
                            <div className='navRightIcons d-flex align-items-center'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Icon>textsms</Icon>
                                    <span className='common'>2</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Icon>notifications</Icon>
                                    <span className='common'>6</span>
                                </div>
                                <div className='user d-flex align-items-center justify-content-center'>
                                    <Icon>account_circle</Icon>
                                </div>
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </main>
    );
};

export default AdminTopNav;