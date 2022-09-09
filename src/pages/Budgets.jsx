import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

import DocumentGrid from '../components/DocumentGrid'
import G21 from '../assets/pdf/G21.pdf'

function Budgets() {
    const documents = [G21]

    React.useEffect(()=> {
        document.title = "Budgets | FollowTaxes"
      }, [])
    
      
  return (
    <Container className="pt-5">
        <Row className="g-5">
            <h1 className="mb-0 pb-0">{documents.length} Documents</h1>
            <hr className="mt-0 pt-0"/>
            {documents.map((document, idx) => <DocumentGrid document={document} key={document}/>)}
        </Row>
    </Container>
  )
}

export default Budgets