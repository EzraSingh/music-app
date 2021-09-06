import React, { FunctionComponent } from "react";
import NoteSelector from "../NoteSelector";
import LayerManager from "../LayerManager";

export interface SideMenuProps{

}

const SideMenu: FunctionComponent<SideMenuProps> = ({ children }) => {
    return(
        <aside className="app__sideMenu">
            <div className="app__sideMenu--noteSelector">
                <NoteSelector/>
                <LayerManager/>
            </div>
        </aside>
    )
}

export default SideMenu;