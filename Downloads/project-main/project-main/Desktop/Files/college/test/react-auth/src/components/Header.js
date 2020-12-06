import React, { useContext } from "react";
import AuthGlobal from "../store/AuthGlobal";
import { logoutUser } from "./autentication.action";

export default function Header() {
    const context = useContext(AuthGlobal);
    const endSesion = () => {
        logoutUser(context.dispatch);
    };

    return (
        <Styles>
            <Nav>
                        {context.stateUser.isAuthenticated === true ? (
                            <>
                                <div>
                                    {context.stateUser.user.userbd.name}
                                </div>
                                <div>
                                    {context.stateUser.user.userbd.email}
                                </div>
                            </>
                        ) : null}
                   
                    <div>
                        <Button onClick={endSesion}>Logout</Button>
                    </div>
                
            </Nav>
        </Styles>
    );
}
