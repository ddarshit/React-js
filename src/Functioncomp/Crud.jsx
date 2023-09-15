import React, { useState } from 'react'


const Crud = () => {
    const [name,setName] = useState('')
    const [alldata , setAlldata] = useState([])


    const handleadd = () => {
        // console.log('handleadd')
        // console.log('name')
        if (name.length !== 0) {
            setAlldata(newdata => [...newdata, name])
            setName('')

        }
    }
    console.log(alldata)
    return ( 
        <>
        <div className='mx-5'>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleadd}>Add-Item</button>
        </div>

        {
            alldata.map((valu) =>
            
            <div>
                <h1>{valu}</h1>
                <button onClick={() => handleedit(i)}>edit</button>
                <button onClick={() => handledelete(i)}>delete</button>
            </div>
            )
        }
        </>
     );
}
 
export default Crud;