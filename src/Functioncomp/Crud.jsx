import React, { useState } from 'react'


const Crud = () => {
    const [name,setName] = useState('')
    const [alldata , setAlldata] = useState([])
    const [show ,setShow] = useState(false)
    const [edittext ,setEdittext] = useState()


    const handleadd = () => {
        // console.log('handleadd')
        // console.log('name')
        if (name.length !== 0) {
            setAlldata(newdata => [...newdata, name])
            setName('')
        }
    }
    // console.log(alldata)
    const handledelete = (index) => {
        console.log(index)
        alldata.splice(index,1)
        setAlldata([...alldata])
    }
    const handleedit = (i) => {
        setName(alldata[i])
        setShow(true)
        setEdittext(i)
    }
    const handleupdate = () =>{
        alldata.splice(edittext,1,name)
        setAlldata([...alldata])
        setName('')
        setShow(false)
    }
    return ( 
        <>
        <div className='mx-5'>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            {!show ? <button onClick={handleadd}>Add-Item</button> :
            <button onClick={handleupdate}>update-Item</button>}
        </div>

        {
            alldata.map((valu,i) =>
            
            <div className='mx-5'>
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