import React from 'react';
import homeImg from '../imgs/home.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="landing_wrapper">
                <div className="landing">

                    <div className="landing_left">
                        <div className="landing_text">
                            <h1>Record Students Marks</h1>
                            <p> We record student's marks and display the leaderboard.
                            </p>
                        </div>

                        <div className="landing_btns">
                            <Link className = "button btn" to = "/addstudent" >Add Student</Link>
                            <Link className = "btn button " to = "/leaderboard" >Leaderboard</Link>
                        </div>
                    </div>

                    <div className="landing_right">
                        <img src={homeImg} alt=".." srcSet=""/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;