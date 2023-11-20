import React from 'react';

function Layout({children}) {
    return (
        <>
            <div className="left-sidebar"/>
            {children}
          /* first commit */
            <div className="right-sidebar" />
        </>
    );
}

export default Layout;