import React from 'react';
import Loading from '../modules/Loading/container/Loading';
import Header from '../components/layout/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSidebar from '../components/layout/LeftSidebar';
import { MenuLink } from '../utils/hepper';

const tags = [
    {
        name: '# máy rửa mặt',
        path: '/tags/may-rua-mat'
    },
    {
        name: '# serum',
        path: '/tags/serum'
    },
    {
        name: '# halio',
        path: '/tags/halio'
    },
    {
        name: '# dưỡng da',
        path: '/tags/duong-da'
    },
    {
        name: '# trắng da',
        path: '/tags/trang-da'
    }
]
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
                            { props.children }
                        </Col>
                        <Col lg={3} className="pageTags">
                            <div className="tagsList">
                                <h2 className="title">Từ khóa nổi bật</h2>
                                <ul className="list">
                                    {
                                        tags.map((menu, index) => {
                                            return <MenuLink key={index} label={menu.name} to={menu.path} />
                                        })
                                    }
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Loading />
        </div>
    )
}
export default Authenticated;