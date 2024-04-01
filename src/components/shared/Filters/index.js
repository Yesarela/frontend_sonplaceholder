
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {getDataUsers, getAllDataPostsById, getDataPosts} from '../../../api';

const Filters = ({dataPosts, setDataPost}) => {
    const [dataUser, setDataUser] = useState([]);
    const [dataSearch, setDataSearch] = useState('');
    const [select, setSelect] = useState('')

    const fetchGetUsers = async () => {
        const data = await getDataUsers();
        setDataUser(data);
    }

    const fetchGetFilterPost = async (id) =>{
        if(id===''){
            const data = await getDataPosts();
            setDataPost(data?.map((res, index)=>{
                return {
                    ...res, 
                    user: dataUser.filter(resp => resp.id === res.userId)
                }
            }));
        } else {
        const data = await getAllDataPostsById(id);
        setDataPost(data?.map((res, index)=>{
            return {
                ...res, 
                user: dataUser.filter(resp => resp.id === res.userId)
            }
        }));
    }
    }

    const onChangeUser = (event) =>{
        fetchGetFilterPost(event.target.value)
    }

    const onClickChange = () => {
        const newData = [...dataPosts];
        newData.sort((a, b)=> a.title.localeCompare(b.title));
        setDataPost(newData);
    }

    const onChangeKeyUp = (event) => {
        const searchText = event.target.value
        setDataSearch(searchText);
        const newData = [...dataPosts];
        const filtered = newData.filter(item => item.body.toLowerCase().includes(searchText.toLowerCase()));
        setDataPost(filtered);
    }


    const resetFilter = () => {
        setDataSearch('');
        setSelect('');
        fetchGetFilterPost('');
    }


    useEffect(()=>{
        fetchGetUsers()
    },[])

    return (
        <Row className='mt-5'>
            <Col>
                Filtros:
            </Col>
            <Col>
                <Form.Select 
                    aria-label="Seleccione un usuario"
                    onChange={onChangeUser}
                    value={select}
                >
                    <option value="">Seleccione un usuario</option>
                    {
                        dataUser?.map((res)=>(
                            <option value={res.id}>{res.name}</option>
                        ))
                    }
                </Form.Select>
            </Col>
            <Col>
                <div className="d-grid gap-2">
                    <Button 
                        variant="primary"
                        onClick={onClickChange}    
                    >Ordenar por Titulo</Button>
                </div>
            </Col>
            <Col>
                <Form.Control 
                    type="text" 
                    placeholder="Buscar texto en body"  
                    onChange={onChangeKeyUp}
                    value={dataSearch}
                />
            </Col>
            <Col>
                <div className="d-grid gap-2">
                    <Button variant="danger"
                    onClick={resetFilter}
                    >Reinciar Filtros</Button>
                </div>
            </Col>
        </Row>
    );
}


export default Filters