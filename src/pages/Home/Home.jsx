import { useEffect, useState } from "react";
import Card from '../../components/Card/Card'
import Banner from "../../components/Banner/Banner";
import houses from '../../datas/logements.json'
import './home.scss'

function Home() {

  const[housing, setHousing] = useState(houses)

  useEffect(() => {
    setHousing(houses)
  }, [])

  return (<div className="homePage">
            <Banner />
            <div className="gallery-layout">
                <div className="gallery">
                    {
                        housing.map((house) =>
                            <Card key={house.id} house={house} />)
                    }
                </div>
            </div>
            
          </div>)
}

export default Home;

