import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from '../containers/Home/HomePage';
import './navigation.scss'
function Navigation() {

    const dispatch = useDispatch()

    const redux = useSelector(state => state.Reducer)

    return (
            <>
                <nav className='navigation'>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='contact'>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='basket'>Basket</NavLink>
                        </li>
                    </ul>
                </nav>
            </>
    )
}    
export default  Navigation