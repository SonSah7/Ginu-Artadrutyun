import React, { useState, useEffect, useMemo, memo } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
import { action } from '../../redux/actions/action';
import PropTypes from 'prop-types';
// import Media from '../../media'; 
import './container3.scss';
import axios from 'axios';
import 'react-scroll';


function Container3() {

    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    const [state, setState] = useState('');
    
    const redux = useSelector(state => state.Reducer);
 
    return (
        <>
            <section className='Container3'>

            </section>
        </>
    )
}

Container3.propTypes ={
    //state: PropTypes.array,

}

export default Container3 = memo(Container3);
        