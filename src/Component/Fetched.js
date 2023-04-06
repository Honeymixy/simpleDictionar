import React,{useState, useEffect} from 'react'

const Fetched = () => {
    const [data, setData] = useState([])
    
        const  fetchdiko = async ()=> {
      try {
          const fetcher = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/Hello")
          const res = await fetcher.json()
          // array destur
          const [{meanings }] = res
          setData(meanings)
         
      } 
      catch (error) {
          
      }
      
  }
  useEffect(()=> {
    fetchdiko();
    },[]);



    console.log(
      'wfwefwef', data
    );

  return (
    <div>
      {data?.map(((datum, index)=>{
        const {definitions,partOfSpeech }= datum
        return(
          <div key={index}>
            <p>{partOfSpeech}</p>
            {definitions.map((define)=> {
              return (
                <h1>{define.definition}</h1>
              )
            })}
          
          </div>
        )
      }))}
    </div>
  )
}

export default Fetched