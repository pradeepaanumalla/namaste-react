import { useEffect, useState } from "react"

const useOnlineStatus = ()=>{
    let [online, setOnline] = useState(true);

    useEffect(()=>{

        window.addEventListener("offline",(event)=>{
            setOnline(false);
        })
        window.addEventListener("online",(event)=>{

            setOnline(true);
        })

    },[]);

    return online;
}

export default useOnlineStatus;