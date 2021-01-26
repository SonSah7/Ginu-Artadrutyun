import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Switch, NavLink, Link,Redirect } from 'react-router-dom';
import { action } from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../containers/Loader/Loader';
const HomePage = lazy(()=>import('../containers/Home/HomePage'))
const AboutPage = lazy(()=>import('../containers/About/AboutPage'))
const ContactPage = lazy(()=>import('../containers/Contact/ContactPage'))
const BasketPage = lazy(()=>import('../containers/Basket/BasketPage'))

function Routs() {
    
    const dispatch = useDispatch()

    const redux = useSelector(state => state.Reducer)

    return (
        <Suspense fallback={<Loader/>}>
            <Switch>
                <Route exact path='/'><HomePage/></Route>
                <Route path='/about'><AboutPage/></Route>
                <Route path='/contact'><ContactPage/></Route>
                <Route path='basket'><BasketPage/></Route>
                <Redirect to='/' />
            </Switch>
        </Suspense>
    )
}
export default Routs