import './LayoutScss/TopNav.scss';
import { Icon } from '@material-ui/core';

const AdminTopNav = () => {

    return (
        <main id="mainTopNavbar" className="d-flex align-items-center justify-content-between px-5">
            <div className=''>
                <div className='buttonGroup d-flex align-items-center'>
                    <span className='btn explore'>Explore</span>
                    <span className='btn'>Activity</span>
                </div>
            </div>
            <div className='' id="navSrcBar">
                <form>
                    <div className='relative'>
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
        </main>
    );
};

export default AdminTopNav;