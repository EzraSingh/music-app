import React, { FunctionComponent } from "react";
import {  useSelector } from 'react-redux';
import { AppLayer, ReduxState } from "../interfaces";

export interface LayerManagerProps{
}

const LayerManager: FunctionComponent<LayerManagerProps> = ({ }) => {
    const layers = useSelector((state: ReduxState) => state.layers)
    console.log({layers})
    return(
        <div className="layerManager">
            <h3>Layers</h3>
            <ul className="layerManager__list">
                <li className="layerManager__list--item">

                </li>
            </ul>
        </div>
    )
}

export default LayerManager;