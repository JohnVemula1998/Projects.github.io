import React, { useState, useEffect } from 'react'
import CustomPage from './CustomPage';
import SortingTable from './SortingTable';

const TestTable = () => {
    const [data,setData] = useState([]);
    const [page,setPage] = useState(1)
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1452e6e0980f76d9c09368379bd64adf&language=en&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`).then((res) => res.json()).then(data => {
            setData(data.results)
            //console.log(data.results)
        });
    }
    
    useEffect(() => {
        getData()
        
    }, [page]);

    let rows = data.map((item) => {
        return {
            id:item.id,
            firstName:item.title,
            lastName:item.release_date,
            age:item.vote_average,
        }
    })
    //console.log(rows)
  return (
    <div style={{width:'100%',height:'100%', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <SortingTable rows={rows}/>
        <CustomPage setPage={setPage} numOfPages={20}/>
    </div>
  )
}

export default TestTable