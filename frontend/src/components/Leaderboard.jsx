import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Leaderboard = () => {

    const [items, setItems] = useState([]);
    const [searchVal, setSearchVal] = useState([]);
    const [values, setValues ] = useState({
        search :"",
        sort : ""
    })

    useEffect(()=> {
        const fetchItem = async () => {
            await axios.get("/main/students/")
            .then(res => {
                setItems(res.data)
                setSearchVal(res.data)
            })

            .catch(err => {
                console.log(err)
            })
        }
        fetchItem();

    },[])


    const sortBy = (field, reverse, primer) => {

        const key = primer ?
          function(x) {
            return primer(x[field])
          } :
          function(x) {
            return x[field]
          };
      
        reverse = !reverse ? 1 : -1;
      
        return function(a, b) {
          return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        }
      }

    const handleChange = e => {
        const {name ,value} = e.target

        setValues((prevVal)=>{
            return{
                ...prevVal,
                [name] : value
            }
        });


        if (name === "search")
        {
            const newarr = items.filter((item) => {
                return item.name.toLowerCase().match(value)
                // return item.name.toLowerCase() === value.toLowerCase()
            })
                value === "" ? 
                    setSearchVal(prevVal => {
                        return [...items]
                    })
                :
                    setSearchVal(prevVal => {
                        return [...newarr]
                    })
        }

        else {
            if(value === "alphabet") {
                // searchVal.sort((a,b) => {
                //     return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
                // })
                searchVal.sort(sortBy('name', false, (a) =>  a.toUpperCase()))
            }

            else if (value === "percentage") {
                searchVal.sort(sortBy('percentage', true, parseFloat))
            }

            else if (value === "roll") {
                searchVal.sort(sortBy('roll_no', false, parseInt))
            }

            else {
                setSearchVal(prevVal => {
                    return [...items]
                })
            }

        }
        
    }

    return (
        <div className="container" style = {{
            marginBottom:"5vh"
        }}>

            <div className="headline">
                <h2 className = "add_student_header"> Leaderboard</h2>
            </div>

            <div className="search_and_sort">
                <form action="">
                    <input type="text" name="search" className="formStyle lb" 
                    placeholder="Search Name Here" autocomplete="off" required 
                    value = {values.search}
                    onChange = {handleChange}
                    />
                </form>

                <form action="">
                    <select name="sort" id="cars" className="formStyle lb"
                    value = {values.sort}
                    onChange = {handleChange}
                    >
                        <option value=""> Sort By </option>
                        <option value="alphabet">Alphabet</option>
                        <option value="percentage">Percentage</option>
                        <option value="roll">Roll No</option>
                    </select>
                </form>

            </div>

            <div className="row">

                {
                    searchVal.length === 0 ?
                        <div className="container mt-5">
                            <h3 style = {{
                                color :"white",
                                textAlign : "center"
                            }}
                            > No Items Available </h3>
                        </div>

                    :
                    searchVal.map((item,index) => {
                        return(
                            <div key = {index} className="col-12 col-sm-12 col-md-6 col-lg-4 mt-5 ">
                            <div className="box-element">
                                <span className="tag">
                                    Rank - {index + 1}
                                </span>
                                <span className="name_roll">
                                    <h6 className = "leaderboard_name" >{item.name}</h6>
                                    <h6 className = "leaderboard_other" > Roll No:- {item.roll_no} </h6>
                                    <h6 className = "leaderboard_other" > Total:- {item.get_total_marks} </h6>
                                    <h6 className = "leaderboard_other" > Percentage:- {item.percentage}% </h6>
                                </span>
        
                                <span className="pcm_marks">
                                    <span className="subject">
                                        <p> Physics</p>
                                        <p> {item.physics} </p>
                                    </span>
        
                                    <span className="subject">
                                        <p> Chemistry</p>
                                        <p> {item.chemistry} </p>
                                    </span> 
        
                                    <span className="subject">
                                        <p> Maths</p>
                                        <p> {item.maths} </p>
                                    </span>
                                </span>
                            </div>
                        </div>
                        )

                    })
                }

            </div>
        </div>
    )
}

export default Leaderboard;