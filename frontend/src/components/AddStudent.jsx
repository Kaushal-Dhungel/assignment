import React, { useState } from 'react';
import axios from 'axios';
import getCookie from './utils';
import swal from 'sweetalert';
import { Ellipsis } from 'react-css-spinners';

const AddStudent = () => {
 
    const [loading, setLoading] = useState(false)
    const [rollExists, setRollExists ] = useState(false)

    const submitHanldler = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const maths = form.get("maths");
        const physics = form.get("physics");
        const chemistry = form.get("chemistry");

        if (maths > 100 || maths < 0 || physics > 100 || physics < 0 || chemistry > 100 || chemistry < 0)
        {
            swal("Sorry!", "Marks can only be between 0 and 100", "warning");
            return;
        }

        setLoading(true);

        const csrftoken = getCookie('csrftoken');
        const axiosConfig = {
            headers: {
                "X-CSRFToken": csrftoken
            }
          };

        const url = "/main/students/";

        axios.post(url,form,axiosConfig)
        .then(res => {
            setLoading(false)
            swal("Success!", "Addition Successful", "success");
            e.target.reset();
        })

        .catch(err => {
            setLoading(false)
            swal("Sorry!", "Couldn't perform the addition operation", "error");
        })
        
    }

    const handleRollChange = e => {
        
        axios.get('/main/rollview/', {
            params: {
              roll: e.target.value 
            }
        })
        .then(res => {
            if (res.data[0] === "True") {
                setRollExists(true)
            }

            else {
                setRollExists(false)
            }

        })

        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
        <h2 className = "add_student_header"> Add New Student</h2>


            <div className = "add_student container">
                <form action="" onSubmit = {submitHanldler}>
                    <input type="text" name="name" className="formStyle" placeholder="Name" autocomplete="off"  required /> <br/>
                    <input type="number" name="roll_no" className="formStyle" placeholder="Roll No." required
                    onChange = {handleRollChange}
                    />
                    {
                        rollExists ? 
                            <div className="rollNoti">
                                <p> This roll no is taken.</p>    
                            </div> 
                        :
                        null
                    }

                    <br/>
                    <input type="number" step = "0.1" name="maths" className="formStyle" placeholder="Maths" required /> <br/>
                    <input type="number" step = "0.1" name="physics" className="formStyle" placeholder="Physics" required /> <br/>
                    <input type="number" step = "0.1" name="chemistry" className="formStyle" placeholder="Chemistry" required /> <br/>

                    {
                        loading ? 
                            <Ellipsis color="#ffdf00" size={80} />
                        :
                            <button className="button btn" disabled = {rollExists} >Add Student</button>
                    }
                </form>
            </div>
        </>
    )
}
 
export default AddStudent;