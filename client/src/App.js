import React, { useState, useEffect, useMemo, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-scroll'
import './App.css';
import Navigation from './components/routs/navigation';
import Routs from './components/routs/routner';
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
        </>
    )
}


export default App = memo(App);