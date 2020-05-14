import React from 'react';
import Loading from '../modules/Loading/container/Loading';
import Header from '../components/layout/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSidebar from '../components/layout/LeftSidebar'

const Authenticated: React.FC<{}> = props => {
    return (
        <div className="authenticated">
            <Header />
            <div className="mainPage">
                <Container>
                    <Row>
                        <Col lg={3} className="pageSidebar">
                            <LeftSidebar />
                        </Col>
                        <Col lg={6} className="pageContent">
                        </Col>
                        <Col lg={3} className="pageTags">
                        </Col>
                    </Row>
                </Container>
            </div>
            <Loading />
            { props.children }
        </div>
    )
}
export default Authenticated;