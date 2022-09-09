import React from 'react'
import { Container, Row } from 'react-bootstrap'

import PhotoGrid from '../components/PhotoGrid'
import Scan1 from "../assets/cdp/Scan1.jpg"
import Scan2 from "../assets/cdp/Scan2.jpg"
import Scan3 from "../assets/cdp/Scan3.jpg"
import Scan4 from "../assets/cdp/Scan4.jpg"
import Scan5 from "../assets/cdp/Scan5.jpg"
import Scan6 from "../assets/cdp/Scan6.jpg"
import Scan7 from "../assets/cdp/Scan7.jpg"
import Scan8 from "../assets/cdp/Scan8.jpg"
import Scan9 from "../assets/cdp/Scan9.jpg"
import Scan10 from "../assets/cdp/Scan10.jpg"
import Scan11 from "../assets/cdp/Scan11.jpg"
import Scan12 from "../assets/cdp/Scan12.jpg"


function Community() {
    const photos = [Scan1, Scan2, Scan3, Scan4, Scan5, Scan6, Scan7, Scan8, Scan9, Scan10, Scan11, Scan12]

    React.useEffect(()=> {
        document.title = "Community Dev. Plan | FollowTaxes"
      }, [])


  return (
    <Container className="pt-5">
        <Row className="g-5">
            <h1 className="mb-0 pb-0">{photos.length} Photos</h1>
            <hr className="mt-0 pt-0"/>
            {photos.map((photo, idx) => <PhotoGrid photo={photo} key={photo}/>)}
        </Row>
    </Container>
  )
}

export default Community