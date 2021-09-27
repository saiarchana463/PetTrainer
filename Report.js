import React,{useState,useEffect} from 'react'
import axios from "axios";
import {v4 as uuidv4} from "uuid";

export default function Report() {
    const [reports,setReports] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8080/checkupReport')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }) 

  /*  const fetchData = async () => {
        const response = await axios.get('htpps://')
        setBooks(response.data) 
    }   */

    return (
        <div className="ui celled list">
            <ul>
            {
                reports.map(report =><li key={report.id}>{report.title}</li>  
                    )
            }
            
            </ul>
        </div>
    )
}