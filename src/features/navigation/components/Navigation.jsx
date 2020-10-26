import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Button} from 'reactstrap'
import { useSession, signout } from 'next-auth/client'
import Link from 'next/link'

import styles from './Navigation.module.scss'

const menuItems = [
    {
        label: 'Weather',
        url: '/weather',
    },
    {
        label: 'News',
        url: '/news',
    },
    {
        label: 'Pokus',
        url: '/pokus',
    },
    {
        label: 'Login',
        url: '/login',
    },
]

const Navigation = ({ type }) => {
    const [session, loading] = useSession()

    return (
        <Navbar collapseOnSelect expand={'sm'}>
            <Navbar.Brand>
                <Link href='/'>
                    <a className={`d-block ${styles.logo}`}>
                        <img src={'/logo/logo.png'} alt={'logo'} className={'w-100'} />
                    </a>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='collapsibleNavbar' className={''}>
                <span className={'navbar-toggler-icon'}></span>
            </Navbar.Toggle>
            <Navbar.Collapse id={'collapsibleNavbar'}>
                <ul className='navbar-nav'>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index} className={'nav-item mx-2'}>
                                <Link href={item.url}>
                                    <a>{item.label}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                {session && <Button onClick={signout}>Sign out</Button>}
            </Navbar.Collapse>
        </Navbar>
    )
}

Navigation.defaultProps = {
    type: 'basic',
}

export default Navigation
