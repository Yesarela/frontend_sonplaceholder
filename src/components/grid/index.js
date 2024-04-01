import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  getDataPosts, getDataUsers} from '../../api';
import Filters from '../shared/Filters';
import './index.scss';


const GridLayout = () => {
    const [dataPosts, setDataPost] = useState([]);
    const [dataUsers, setDataUsers] = useState([]);


    const fetchGetPost = async () => {
        const data = await getDataPosts();
       
        setDataPost(data?.map((res, index)=>{
            return {
                ...res, 
                user: dataUsers.filter(resp => resp.id === res.userId)
            }
        })
        );
    }

    const fetchGetUsers = async () => {
        const data = await getDataUsers();
        setDataUsers(data);
    }

    useEffect(()=>{
        fetchGetUsers()
    },[])

    useEffect(()=>{
       if (dataUsers.length > 0) {
        fetchGetPost();
       }
    }, [dataUsers])

 
 
    return(
      <>
        <Filters
            dataPosts={dataPosts}
            setDataPost={setDataPost}
        />
       {
        dataPosts.length === 0 ? null :
        dataPosts?.map((res, index)=>(
            <Row className='mt-5 row-style-custom' key={index}>
            <Col  className="col-style-custom" xs={12} md={6}>
                <strong>User: </strong> {res?.user[0]?.name}
            </Col>
            <Col  className="col-style-custom" xs={12} md={6}>
                <strong>Correo: </strong> {res?.user[0]?.email}
            </Col>
            <Col  className="col-style-custom" xs={12} md={12}>
                <strong>Titulo: </strong>  {res?.title}
            </Col>
            <Col  className="col-style-custom" xs={12} md={12}>
                <strong>Body: </strong> {res?.body}
            </Col>
            </Row>
        ))
       }
      </>
    )
}

export default GridLayout