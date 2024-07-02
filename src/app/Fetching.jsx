const getData = async ()=>{
    const response = fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
        throw new Error('DATA IS NOT AVAILABLE');

    }
    return response.json()
}
import React from 'react'

const Fetching =async () => {
    const apiData = await getData();
  return (
    <div>Fetching

        {JSON.stringify(apiData)}
    </div>
  )
}

export default Fetching