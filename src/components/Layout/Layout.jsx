import React from 'react'
import HeaderMobile from '../HeaderMobile/HeaderMobile';

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <HeaderMobile/>
            {children}
        </React.Fragment>    
    
        
    );
}

export default Layout;