import { useState, useEffect } from 'react'

export const CoolComponentChild = () => {
    const [kids, setKids] = useState(0)
    useEffect(() => {
      setKids(1);   
    }, [])
    return (
        <div>{kids}</div>
    );
    
}