import React, { useState, useEffect, useContext } from "react";
import {
    makeStyles,
    createStyles,
    useTheme,
} from "@material-ui/core/styles";
import './LayoutScss/AdminLayout.scss';
import Drawer from "@material-ui/core/Drawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import { renderRoutes } from "react-router-config";
import AdminSideNavLayout from "./AdminSideNav";
import { Icon } from "@material-ui/core";
import { AppContext } from "../../../App";
import LoadingSuspense from "../Loadings/LoadingSuspense";
import { useDispatch } from "react-redux";
import { logout } from "../../../services/redux/actions/userAction";
import AdminTopNav from "./AdminTopNav";


const AdminLayout = () => {
    const dispatch = useDispatch();
    const { rootRouting } = useContext(AppContext);
    const drawerWidth = 70;

    const useStyles = makeStyles((theme) =>
        createStyles({
            root: {
                display: "flex",
            },
            appBar: {
                transition: theme.transitions.create(["margin", "width"], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
            },
            appBarShift: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
                transition: theme.transitions.create(["margin", "width"], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
            menuButton: {
                marginRight: theme.spacing(2),
            },
            hide: {
                display: "none",
            },
            drawer: {
                flexShrink: 0,
            },
            drawerHide: {
                width: 0,
            },
            drawerPaper: {
                width: drawerWidth,
                backgroundColor: `#fff`,
                color: `rgb(19, 17, 17)`
            },
            drawerHeader: {
                display: "flex",
                alignItems: "center",
                padding: theme.spacing(0, 1),
                // necessary for content to be below app bar
                ...theme.mixins.toolbar,
                justifyContent: "flex-end",
            },
            content: {
                flexGrow: 1,
                padding: theme.spacing(3),
                transition: theme.transitions.create("margin", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
            },
            contentShift: {
                transition: theme.transitions.create("margin", {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: drawerWidth,
            },
        })
    );
    const classes = useStyles();
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [isSidebarOpen, setSidebarOpen] = useState(!smallScreen);

    useEffect(() => {
        setSidebarOpen(!smallScreen);
    }, [smallScreen]);


    return (
        <div className={classes.root}>
            <Drawer
                id="sideNavDrawer"
                className={clsx(classes.drawer, {
                    [classes.drawerHide]: !isSidebarOpen,
                })}
                variant="permanent"
                anchor="left"
                open={isSidebarOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={`my-2 ${classes.drawerHeader}`} >
                    <div className="NavLogoParent mx-auto" style={{ width: "45px", height: "45px" }}>
                        <img className="w-100" src="https://i.ibb.co/3cfhM24/icon-192x192.png" alt="" />
                    </div>
                </div>
                <AdminSideNavLayout />
                <div className="navBottom">
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
            <main
                className={`main_section p-0 w-100 ${clsx(classes.content, {
                    [classes.contentShift]: isSidebarOpen && !smallScreen,
                })}`}
            >
                <AdminTopNav />
                <LoadingSuspense>
                    {renderRoutes(rootRouting)}
                </LoadingSuspense>
            </main>
        </div>
    );
}

export default AdminLayout;