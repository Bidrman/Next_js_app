import React from 'react'

const Layout = ({ header, children, homepage, footer }) => {
    return (
        <div className='holder'>
            {header}
            <main>{children}</main>
        </div>
    )
}

export default Layout
