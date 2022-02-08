import React, { useContext } from "react";
import './LayoutScss/AdminLayout.scss';
import Drawer from "@material-ui/core/Drawer";
import { renderRoutes } from "react-router-config";
import AdminSideNavLayout from "./AdminSideNav";
import { Icon } from "@material-ui/core";
import { AppContext } from "../../../App";
import LoadingSuspense from "../Loadings/LoadingSuspense";
import { useDispatch } from "react-redux";
import { logout } from "../../../services/redux/actions/userAction";
import AdminTopNav from "./AdminTopNav";


// 
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

const AdminLayout = () => {
    const dispatch = useDispatch();
    const { rootRouting } = useContext(AppContext);
    const drawerWidth = 70;

    return (
        <div className="">
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Drawer
                    id="sideNavDrawer"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <div className={`my-2 `} >
                        <div className="NavLogoParent mx-auto" style={{ width: "45px", height: "45px" }}>
                            <img className="w-100" src="https://i.ibb.co/3cfhM24/icon-192x192.png" alt="" />
                        </div>
                    </div>
                    <AdminSideNavLayout />
                    <div className="navBottom d-flex flex-column">
                        <button className="btn">
                            <Icon className="DEFAULT_COLOR">settings</Icon>
                        </button>
                        <button className="btn">
                            <Icon className="DEFAULT_COLOR">help_outline</Icon>
                        </button>
                        <div className=""
                            onClick={() => {
                                dispatch(logout());
                            }}
                        >
                            <button className="btn">
                                <Icon className="DEFAULT_COLOR">logout</Icon>
                            </button>
                        </div>
                    </div>
                </Drawer>
                <Box
                    component="main"
                    className="w-100"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `57px` }}
                >
                    <AdminTopNav />
                    <div className="main_section">
                        <LoadingSuspense>
                            {renderRoutes(rootRouting)}
                        </LoadingSuspense>
                    </div>
                </Box>
            </Box>
        </div>
    );
}

export default AdminLayout;