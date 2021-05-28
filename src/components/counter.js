import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, refresh, rnd}) => {
    return(
        <div className="wrap">
            <h1 id="counter">{counter}</h1>
            <div className="btns">
                <button onClick={inc} className="inc btn btn-primary">&nbsp;</button>
                <button onClick={dec} className="dec btn btn-primary">&nbsp;</button>
                <button onClick={rnd} className="rnd btn btn-primary">&nbsp;</button>
                <button onClick={refresh} className="ref btn btn-primary">&nbsp;</button>
            </div>
        </div>
    )
};
const mapStateToProps = (state) => {
  return{
      counter: state
  }
};

export default connect(mapStateToProps, actions)(Counter);