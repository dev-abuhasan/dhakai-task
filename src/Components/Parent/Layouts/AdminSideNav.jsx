import React, { useContext } from 'react';
import { Icon } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../../App';
import { navigations } from '../../Routings/navigations';
const AdminSideNavLayout = () => {
    const { ChildRouting } = useContext(AppContext);
    const { pathname } = useLocation();
    const items = navigations;
    const getFilterData = ChildRouting && ChildRouting.find((d) => pathname === d.path);

    const renderLevels = (data) => {
        return data.map((item, index) => {
            if (item.path === pathname ||
                (getFilterData && getFilterData.parentRoute === item.path)
            ) {
                document.title = `${item.name}`;
            }
            if (item.type === 'label')
                return (
                    <p
                        key={index}
                        className="text-center py-2 mb-2 text-muted textLabelStyle"
                    >
                        <span>{item.label}</span>
                    </p>
                )
            else {
                return (
                    <div key={index} className={`${pathname === item.path || (getFilterData && getFilterData.parentRoute === item.path) ? 'activeNavBorder' : ''} `}>
                        <Link to={`${item.path}`}
                            className={`${pathname === item.path || (getFilterData && getFilterData.parentRoute === item.path) ? 'activeSideNav' : 'SideNavLink'}  d-flex align-items-center justify-content-center text-decoration-none sideNavPadding`}>
                            <Icon>{item.icon}</Icon>
                        </Link>
                    </div>
                )
            }
        })
    }
    return <div className="navigation mx-auto pt-2">{renderLevels(items)}</div>
};

export default AdminSideNavLayout;