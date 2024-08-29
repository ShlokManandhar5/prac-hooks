import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import data from './data';

const MoreDetail = () => {
    const [pldata, setPldata] = useState([]);
    const [pid, setPid] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        setPldata(data)

    }, [])

    useEffect(() => {
        if (pid !== undefined) {
            // console.log(pid);
            navigate(`/detail/${pid}`)
        }
    }, [pid, navigate])

    const route = (id) => {
        setPid(id)
    }

    return (
        <div>
            <h1>Players</h1>
            {
                pldata.map((item) => (
                    <h4 key={item.id}>
                        {item.name}  &nbsp;
                        <button onClick={() => route(item.id)}>View More</button>
                    </h4>
                ))
            }
        </div>
    )
}

export default MoreDetail
