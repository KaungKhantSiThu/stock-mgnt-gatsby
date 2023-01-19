import * as React from 'react';

const wineImage = {
    borderRadius: '5px 5px 0 0'
}

const card = {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    width: '40%',
    borderRadius: '5px'
  }
  
  const container = {
    padding: '2px 16px'
  }

export default function Wine() {
    /*
    1. Fetch from https://api.sampleapis.com/coffee/hot
    2. Trsnsform into JSX
    */
    let items = []
    let [wineTitles, setWineTitles] = React.useState([])
    React.useEffect(async () => {
        // Run once after the page finished loading
        // Fetch from https://api.sampleapis.com/coffee/hot
        let res = await fetch('https://api.sampleapis.com/wines/reds')
        let wines = await res.json()
        for (let i = 0; i < wines.length; i++) {
            console.log(wines[i].wine)
            items.push(<li>
                <div style={card} >
                    <img src={wines[i].image} alt={wines[i].wine} style={wineImage}></img>
                    <div style={container}>
                        <h4><b>{wines[i].wine}</b></h4>
                        <p>{wines[i].winery}</p>
                    </div>
                </div>
                    </li >)
                    }
                    setWineTitles(items)
                }, [])
                return (
                <>
                <h1>Wine</h1>
                <ul>
                    {wineTitles}
                    </ul>
                    </>
                    )
                }

                