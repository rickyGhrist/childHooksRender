import { useState, useEffect } from 'react'

export const CoolComponentChild = () => {
  console.log("rerendering CoolComponentChild.js")
    const [catFact, setCatFact] = useState("No Cat Fact")
    useEffect(() => {
      setCatFact(1);   

      const getCatFact = async () => {
        fetch("https://catfact.ninja/fact")
        .then((response) => response.json())
        .then((data) => setCatFact(data.fact));
      }

      getCatFact();
    }, [])
    return (
        <div>{catFact}</div>
    );
    
}