import React from 'react';

function Layout({children}) {
    return (
        <>
            <div className="left-sidebar"/>
            {children}
            <div className="right-sidebar" />
        </>
    );
}

export default Layout;