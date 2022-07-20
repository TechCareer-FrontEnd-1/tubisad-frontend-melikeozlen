import React, { useState } from 'react'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import './Counter.scss'
const Counter = () => {

    return (
        <div className="counter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <div id="counter">
                            <div className="cell">
                                <div className="counter-value number-count" data-count="231">50</div>
                                <p className="counter-info">Happy Users</p>
                            </div>
                            <div className="cell">
                                <div className="counter-value number-count" data-count="85">20</div>
                                <p className="counter-info">Issues Solved</p>
                            </div>
                            <div className="cell">
                                <div className="counter-value number-count" data-count="59">15</div>
                                <p className="counter-info">Good Reviews</p>
                            </div>
                            <div className="cell">
                                <div className="counter-value number-count" data-count="127">56</div>
                                <p className="counter-info">Case Studies</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
           
        </div>

    )
}

export default Counter