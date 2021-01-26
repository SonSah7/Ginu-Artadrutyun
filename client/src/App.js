import React, { useState, useEffect, useMemo, memo } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { action } from './components/redux/actions/action';
import {animateScroll as scroll} from 'react-scroll';
import {useSelector,useDispatch} from 'react-redux';
import 'react-scroll'
import './App.css';
import Container1 from './components/containers/container1/container1.jsx';
import Container2 from './components/containers/container2/container2.jsx';
import Container3 from './components/containers/container3/container3.jsx';
import Container4 from './components/containers/container4/container4.jsx';
import Container5 from './components/containers/container5/container5.jsx';
import Container6 from './components/containers/container6/container6.jsx';
import Container7 from './components/containers/container7/container7.jsx';
import Container8 from './components/containers/container8/container8.jsx';
import Container9 from './components/containers/container9/container9.jsx';
import Container10 from './components/containers/container10/container10.jsx';
import Navigation from './components/routs/navigation';
import Routs from './components/routs/routner';
import PropTypes from 'prop-types';
// import Media from './components/media';

function App() {
    const dispatch = useDispatch()

    useEffect(() => {

    }, [])

    const [state, setstate] = useState('')
    const redux = useSelector(state => state.Reducer.arr)

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

App.propTypes = {
   // state:PropTypes.string
   
}

export default App = memo(App);