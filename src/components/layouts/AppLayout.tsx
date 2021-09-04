import React, { FunctionComponent } from "react";
import SideMenu from './SideMenu';

export interface AppLayoutProps{

}

const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => {
    return(
        <main className="app__layout">
            <div className="app__layout--sidemenu">
                <SideMenu/>
            </div>
            <div className="app__layout--instrument">
                {children}
            </div>
            <div className="app__layout--content">
                Content
            </div>
        </main>
    )
}

export default AppLayout;