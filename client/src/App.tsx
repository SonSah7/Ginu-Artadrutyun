import React, { useState, useEffect, useMemo, useRef, memo, FC } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { action } from './components/redux/actions/action';
import {animateScroll as scroll} from 'react-scroll';
import {useSelector,useDispatch} from 'react-redux';
import 'react-scroll'
import './App.css';
import Container1 from './components/components/container1/container1';
import Container2 from './components/components/container2/container2';
import Container3 from './components/components/container3/container3';
import Container4 from './components/components/container4/container4';
import Container5 from './components/components/container5/container5';
import Container6 from './components/components/container6/container6';
import Container7 from './components/components/container7/container7';
import Container8 from './components/components/container8/container8';
import Container9 from './components/components/container9/container9';
import Container10 from './components/components/container10/container10';
import Navigation from './components/routs/navigation';
import Routs from './components/routs/routner';
import { Redux } from './components/types/types';
// import Media from './components/media';

let App:FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {

    }, [])

    const [state, setstate] = useState('')

    const redux = useSelector((state:Redux) => state.Reducer1.arr)

    return(
        <>
            <Navigation />
            <Routs/>
            <Container1 />
            <Container2 />
            <Container3 />
            <Container4 />
            <Container5 />
            <Container6 />
            <Container7 />
            <Container8 />
            <Container9 />
            <Container10 />  
        </>
    )
}


export default App = memo(App);