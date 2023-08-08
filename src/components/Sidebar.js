import { Link, useHistory, NavLink } from "react-router-dom";
import { Col, Row } from "reactstrap";

import { logout } from "../store/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

const Sidebar = (props) => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.authUser);
    // let history = useHistory();
    // let auth = JSON.parse(localStorage.getItem('auth'));

    // 	useEffect(() => {
    // console.log(history.location.pathname)
    //   }, [history.location.pathname]);
    // if (props.uid == '') {
    //   return <Redirect to="/auth/login" />;
    // }
    const contractRef = useRef(null);
    const handleClickOutside = (e) => {
        // window.setTimeout(() => {
        if (!contractRef.current?.contains(e.target)) {
            props.outsideClose();
        }
        // }, 100);
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    });

    const history = useHistory();

    const [isMobile, setIsMobile] = useState(false);

    const updatePredicate = () => {
        setIsMobile(window.innerWidth < 992);
    };

    useEffect(() => {
        updatePredicate();
        window.addEventListener("resize", updatePredicate);
        return () => window.removeEventListener("resize", updatePredicate);
    }, []);
    return (
        <>
            <div
                className="sidebar pt-lg-3 border-right border-dark shadow"
                ref={contractRef}
            >
                <div>
                    <div className="sidebar-logo d-block d-lg-none mb-4">
                        <Row className="mt-4">
                            <Col
                                xs="4"
                                className="d-flex justify-content-center align-items-center"
                            ></Col>
                            <Col
                                xs="4"
                                className="d-flex justify-content-center align-items-center"
                            >
                                <p className=" text-white  ">
                                    <strong>Logo</strong>
                                </p>
                            </Col>
                            <Col xs="4">
                                <div
                                    className="d-flex d-lg-none justify-content-end align-items-center px-3  cursor-pointer"
                                    onClick={props.sidebarToggle}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                            fill="#EDF1FA"
                                            // fill-opacity="0.4"
                                        />
                                        <path
                                            d="M9.10205 14.7568L14.8977 9.24228"
                                            stroke="black"
                                            // stroke-width="1.5"
                                            // stroke-linecap="round"
                                            // stroke-linejoin="round"
                                        />
                                        <path
                                            d="M14.7572 14.8982C12.6037 12.6349 11.3962 11.3659 9.24268 9.10254"
                                            stroke="black"
                                            // stroke-width="1.5"
                                            // stroke-linecap="round"
                                            // stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className=" sidebar-logo d-none d-lg-flex justify-content-center align-items-center flex-column mt-3">
                        <h4 className="mb-3 my-1 text-white font-weight-normal ">
                            <strong>Logo</strong>
                        </h4>
                    </div>

                    <div className="side-nav-items">
                        <NavLink
                            to="/customer/dashboard"
                            activeClassName="active"
                            className="side-nav-item my-2"
                            onClick={(e) => props.outsideClose()}
                        >
                            <div className="sidebar-icon ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" />
                                    <path d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z" />
                                    <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" />
                                    <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" />
                                </svg>
                            </div>
                            <div className="sidebar-text ">
                                <span className="ml-3">Dashboard</span>
                            </div>
                        </NavLink>
                    </div>
                </div>

                <div className="side-nav-items mb-3">
                    <Link
                        to="/auth/login"
                        activeClassName="active"
                        className={`side-nav-item my-2 pointer `}
                        onClick={() => {
                            dispatch(logout());
                        }}
                    >
                        <div className="sidebar-icon ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                            >
                                <path
                                    d="M16.8 2.18359H14.2C11 2.18359 9 4.18359 9 7.38359V11.4336H15.25C15.66 11.4336 16 11.7736 16 12.1836C16 12.5936 15.66 12.9336 15.25 12.9336H9V16.9836C9 20.1836 11 22.1836 14.2 22.1836H16.79C19.99 22.1836 21.99 20.1836 21.99 16.9836V7.38359C22 4.18359 20 2.18359 16.8 2.18359Z"
                                    fill="#D0D0DD"
                                />
                                <path
                                    d="M4.55994 11.4334L6.62994 9.36344C6.77994 9.21344 6.84994 9.02344 6.84994 8.83344C6.84994 8.64344 6.77994 8.44344 6.62994 8.30344C6.33994 8.01344 5.85994 8.01344 5.56994 8.30344L2.21994 11.6534C1.92994 11.9434 1.92994 12.4234 2.21994 12.7134L5.56994 16.0634C5.85994 16.3534 6.33994 16.3534 6.62994 16.0634C6.91994 15.7734 6.91994 15.2934 6.62994 15.0034L4.55994 12.9334H8.99994V11.4334H4.55994Z"
                                    fill="#D0D0DD"
                                />
                            </svg>
                        </div>
                        <div className="sidebar-text">
                            <span className="ml-3 ">logout</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
