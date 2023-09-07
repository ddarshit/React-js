import React from 'react'
import { useEffect,useState } from 'react'


function Usemymaincostomhook(count) {

    return (
        useEffect(() => {
            document.title = `Count ${count}`
        },[count])
    )
}
export default Usemymaincostomhook