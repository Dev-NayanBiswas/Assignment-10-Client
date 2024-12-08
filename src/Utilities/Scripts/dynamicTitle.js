import { useEffect } from "react"

function dynamicTitle(title){
    useEffect(()=>{
        document.title = title
    },[title])
}

export default dynamicTitle