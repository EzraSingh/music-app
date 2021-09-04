import React, { FunctionComponent } from "react";
import { AppLayout, GuitarFretBoard } from '../components';

const IndexPage: FunctionComponent<StaticPageProps> = (props) => {
    return(
        <AppLayout>
            <GuitarFretBoard/>
        </AppLayout>
    )
}

export default IndexPage;