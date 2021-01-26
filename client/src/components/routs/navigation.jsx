import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { action } from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';

function Navigation() {

    const dispatch = useDispatch()

    const redux = useSelector(state => state.Reducer)

    return (
            <>
                {/* 'nav>ul>li*?>NavLink' */}
            </>
    )
}    
export default  Navigation