import { Row, Col, Image, Form, Button, Modal,Card } from 'react-bootstrap'
import React, { useEffect } from 'react'

import Alert from '../../../components/toast/toast'
import { loadingToggleAction } from "../../../store/action/common";
import store from "../../../store/store";
import ApiService from '../../../services/service'
import { API_NAME } from '../../../utils/constants';

import avatars11 from '../../../assets/images/header/profile.png'

import { useState } from 'react';
import ReactPaginate from 'react-paginate';

import { ToastContainer } from 'react-toastify'
import Spinner from '../../../components/loader/loader'
import { connect } from 'react-redux'

import '../../../assets/scss/hope-ui.scss'


import './list.scss'



const PlayerList = (props) => {

    const [showModal, setShowModal] = useState(false)
    const [players, setPlayers] = React.useState([])
    const [search, setNewSearch] = React.useState("");
    const [pageNumber, setPageNumber] = React.useState(0)

    const [name, setName] = useState('')
    const [mob, setMob] = useState('')
    const [dob, setDob] = useState('')
    const [role, setRole] = useState('')
    const [bat, setBat] = useState('')
    const [bowl, setBowl] = useState('')
    const [email, setEmail] = useState('')
    const [img, setImg] = useState('')
    const [id, setId] = useState('')
   const [playerPlace, setPlayerPlace] = React.useState('');
   const autoCompleteRef = React.useRef();
   const inputRef = React.useRef();
   const autoCompleteRefAdd = React.useRef();
   const inputRefAdd = React.useRef();

   const [showModalStats, setShowModalStats] = useState(false)
   const [playerStats, setPlayerStats] = useState(false)
   const [pName, setPName] = useState('')


    const filtered = !search
        ? players
        : players.filter((players) =>
            players.player_name.toLowerCase().includes(search.toLowerCase()) || players.player_mobile.toString().toLowerCase().includes(search.toLowerCase())
        );

    const playersPerPage = 8
    const pagesVisited = pageNumber * playersPerPage

    const pageCount = Math.ceil(filtered.length / playersPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const showEdit = (item) => {

        if (showModal)
            setShowModal(false)
        else {
            setShowModal(true)
            setImg(item.imgdata)
        }

        console.log(item)

        if (item !== undefined) {

            const today = new Date(item['dob']);
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Months start at 0!
            let dd = today.getDate();

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;
            setName(item['player_name'])
            setMob(item['player_mobile'])
            setDob(item['player_dob'])
            setEmail(item['player_email'])
            setImg(item['player_logo'])
            setId(item['player_id'])
            setPlayerPlace(item['player_place']);

        }


    }

    const showEditStats = () => {

        if (showModalStats)
            setShowModalStats(false)
        else {
            setShowModalStats(true)
      
        }

       


    }

    const handleFileRead = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        setImg(base64)
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    const onUpate = (event) => {
        event.preventDefault();
        const data = {
            player_name: document.getElementById('mname').value,
            player_mobile: document.getElementById('mmobile').value,
            player_dob: document.getElementById('mdob').value,
            player_email: document.getElementById('memail').value,
            player_logo: "",
            player_place: document.getElementById('place').value,
            player_id: id
        }

        store.dispatch(loadingToggleAction(true))
        console.log('Component : Edit  Player')
        console.log("Request : " + JSON.stringify(data))

        ApiService.postData(API_NAME.EDIT_PLAYER, data).then(
            (resData) => {
                if (resData.statusCode === '00') {
                    store.dispatch(loadingToggleAction(false))
                    Alert('00', resData.message)
                    fetchPlayer()
                    setShowModal(false)

                }
                else {
                    store.dispatch(loadingToggleAction(false))
                    Alert('01', resData.message)
                    setShowModal(false)
                }


            }
        ).catch((err) => {
            store.dispatch(loadingToggleAction(false))
            Alert('01', err.message)
            setShowModal(false)

        });

    }
    
    const displayPlayers = filtered
        .slice(pagesVisited, pagesVisited + playersPerPage)
        .map((item, idx) => {
            return (
                <Col key={idx} lg="3" style={{ backgroundColor: 'rgba(#6c757d , 0.1)', borderRadius: '0.5 rem' }} >
                    <div className="col">
                        <div className="card iq-product-custom-card animate:hover-media" >
                            <div className="iq-product-hover-img position-relative animate:hover-media-wrap">
                                <a>
                                    {/* <img src={item.imgdata==='' || item.imgdata==null  ?avatars11 : item.imgdata} alt="product-details" className="img-fluid iq-product-img hover-media   " />  */}
                                    <img src={avatars11} alt="product-details" className="img-fluid iq-product-img hover-media   " />
                                </a>
                                <div className="iq-product-card-hover-effect-1 iq-product-info" >
                                    <a role="button" tabindex="0" className="btn btn-icon iq-product-btn rounded-pill wishlist-btn">
                                        <span className="btn-inner" onClick={() => showEdit(item)}>

                                            {/* <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" className="text-danger" height="24" viewBox="0 0 24 24" id="edit" fill="currentColor"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
                                            </svg> */}
                                             <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-danger">
    <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
    <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
    <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
  </svg>
                                        </span>
                                    </a>
                                </div>

                                <div className="iq-product-card-hover-effect-2 iq-product-info" >
                                    <a role="button" tabindex="0" className="btn btn-icon iq-product-btn rounded-pill wishlist-btn">
                                        <span className="btn-inner" onClick={() => fetchPlayerStats(item)}>

                                            {/* <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" className="text-danger" height="24" viewBox="0 0 24 24" id="edit" fill="currentColor"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
                                            </svg> */}

                                            <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-info">
    <path opacity="0.4" d="M16.6756 2H7.33333C3.92889 2 2 3.92889 2 7.33333V16.6667C2 20.0711 3.92889 22 7.33333 22H16.6756C20.08 22 22 20.0711 22 16.6667V7.33333C22 3.92889 20.08 2 16.6756 2Z" fill="currentColor"></path>
    <path d="M7.36866 9.3689C6.91533 9.3689 6.54199 9.74223 6.54199 10.2045V17.0756C6.54199 17.5289 6.91533 17.9022 7.36866 17.9022C7.83088 17.9022 8.20421 17.5289 8.20421 17.0756V10.2045C8.20421 9.74223 7.83088 9.3689 7.36866 9.3689Z" fill="currentColor"></path>
    <path d="M12.0352 6.08887C11.5818 6.08887 11.2085 6.4622 11.2085 6.92442V17.0755C11.2085 17.5289 11.5818 17.9022 12.0352 17.9022C12.4974 17.9022 12.8707 17.5289 12.8707 17.0755V6.92442C12.8707 6.4622 12.4974 6.08887 12.0352 6.08887Z" fill="currentColor"></path>
    <path d="M16.6398 12.9956C16.1775 12.9956 15.8042 13.3689 15.8042 13.8312V17.0756C15.8042 17.5289 16.1775 17.9023 16.6309 17.9023C17.0931 17.9023 17.4664 17.5289 17.4664 17.0756V13.8312C17.4664 13.3689 17.0931 12.9956 16.6398 12.9956Z" fill="currentColor"></path>
  </svg>
                                        </span>
                                    </a>
                                </div>
                                

                            </div>
                            <div className="card-body ">
                                <div class="d-flex gap-3">
                                    <div class="date-of-event">
                                        <span>{item.player_dob != null && !isNaN(new Date(item.player_dob)) ? (new Date(item.player_dob).toLocaleString('default', { month: 'short' })) : 'Jan'}</span>
                                        <h5 className="text-primary">{item.player_dob != null && !isNaN(new Date(item.player_dob)) ? (new Date(item.player_dob).getDate().toString().padStart(2, "0")) : '00'}</h5>
                                    </div>
                                    <div class="events-detail">
                                        <h5><a href="../social-app/event-detail.html">{(item.player_name).replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); })}</a></h5>
                                        {item.player_role === 'wk' ? <p >Wicket Keeper</p> : ''}
                                        {item.player_role === 'all' ? <p >All Rounder</p> : ''}
                                        {item.player_role === 'bowl' ? <p >Bowler</p> : ''}
                                        {item.player_role === 'bat' ? <p >Batsman</p> : ''}

                                    </div>

                                </div>
                                <div class="d-flex  align-items-center gap-3" style={{ marginLeft: '-10px' }}>
                                    <div class="bg-soft-primary p-2 rounded">
                                        <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0317 12.9724C15.0208 16.9604 15.9258 12.3467 18.4656 14.8848C20.9143 17.3328 22.3216 17.8232 19.2192 20.9247C18.8306 21.237 16.3616 24.9943 7.6846 16.3197C-0.993478 7.644 2.76158 5.17244 3.07397 4.78395C6.18387 1.67385 6.66586 3.08938 9.11449 5.53733C11.6544 8.0765 7.04266 8.98441 11.0317 12.9724Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h6 className='text-warning'>{item.player_mobile}</h6>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Col>
            )
        })



    const fetchPlayer = () => {
        store.dispatch(loadingToggleAction(true))
        console.log('Component : Player List')
        console.log("Request : Post")
        ApiService.postData(API_NAME.PLAYER).then(
            (resData) => {

                if (resData.statusCode === '00') {
                    store.dispatch(loadingToggleAction(false))
                    Alert('00', resData.message)
                    console.log('===================================')
                    setPlayers(resData.data)

                }
                else {
                    store.dispatch(loadingToggleAction(false))
                    Alert('01', resData.message)
                    console.log('==================================')
                }


            }
        ).catch((err) => {
            store.dispatch(loadingToggleAction(false))
            Alert('01', err.message)
            console.log('==================================')

        });
    }
    const fetchPlayerStats = (playerData) => {
        store.dispatch(loadingToggleAction(true))
        console.log('Component : Player Statistics')
        console.log("Request : Post")
        const data = {
            player_id: playerData.player_id
        }
        setPName(playerData.player_name)
        ApiService.postData(API_NAME.PLAYER_STATS,data).then(
            (resData) => {

                if (resData.statusCode === '00') {
                    store.dispatch(loadingToggleAction(false))
                   // Alert('00', resData.message)
                    console.log('===================================')
                    setPlayerStats(resData.data)
                    console.log(playerStats)
                    showEditStats()
                }
                else {
                    store.dispatch(loadingToggleAction(false))
                    Alert('01', resData.message)
                    console.log('==================================')
                }


            }
        ).catch((err) => {
            store.dispatch(loadingToggleAction(false))
            Alert('01', err.message)
            console.log('==================================')

        });
       
    }

    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            { types: ['(cities)'] }
        );
  
        autoCompleteRef.current.addListener("place_changed", async function () {
            const place = await autoCompleteRef.current.getPlace();
            setPlayerPlace(place.name)
        });
  
        autoCompleteRefAdd.current = new window.google.maps.places.Autocomplete(
            inputRefAdd.current,
            { types: ['(cities)'] }
         );
         
         autoCompleteRefAdd.current.addListener("place_changed", async function () {
            const place = await autoCompleteRefAdd.current.getPlace();
            setPlayerPlace(place.name)
      
         });
         fetchPlayer();
    },[])
    const handleSearchChange = (e) => {
        console.log(e.target.value)
        setNewSearch(e.target.value);
        setPageNumber(0)
    }

    return (
        <>
            <ToastContainer />
            <Spinner loading={props.showLoading} />
            <Row>


                <Form id="exform">
                    <Row style={{ marginTop: '50px' }} className='justify-content-end'>
                        {players.length > 0 ? <Col md="3" className="mb-3" >
                            <input class="form-control form-control-lg" placeholder="Search Players..." id="name" type="text" onChange={handleSearchChange} aria-label=".form-control-lg example" />
                        </Col> : ''}
                    </Row>
                </Form>

                {displayPlayers}



                <Modal show={showModal} onHide={showEdit} scrollable={true} >
                    <Modal.Header className="btnw" closeButton>
                        <Modal.Title as="h5">Edit Player</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>



                        <Form onSubmit={onUpate}>
                            <Row>
                                <Col md="12" className="mb-3" style={{ textAlign: 'center' }}>
                                    <Image style={{ width: '80px' }} className="  img-fluid rounded-circle card-img" src={avatars11} alt="profile-pic" />
                                    {/* <Image style={{ width: '80px' }} className="  img-fluid rounded-circle card-img" src={img===''?avatars11 : img} alt="profile-pic" /> */}
                                </Col>
                                <Col md="12" className="mb-3">
                                    <Form.Label md="6" htmlFor="validationDefault01">Name</Form.Label>
                                    <Form.Control type="text" defaultValue={name} id="mname" required />
                                </Col>
                                <Col md="12" className="mb-3">
                                    <Form.Label md="6" htmlFor="validationDefault01">Mobile No</Form.Label>
                                    <Form.Control type="text" readOnly defaultValue={mob} id="mmobile" required />
                                </Col>
                                <Col md="6" className="mb-3">
                                    <Form.Label htmlFor="validationDefault02">DOB</Form.Label>
                                    <Form.Control type="date" id="mdob" defaultValue={dob} required />
                                </Col>
                                <Col md="6" className="mb-3">
                                 <Form.Label htmlFor="validationDefault02">Place</Form.Label>
                                 <Form.Control type="text" id="place" ref={inputRef} defaultValue={playerPlace} required />   
                                </Col>
                                <Col md="12" className="mb-3">
                                    <Form.Label htmlFor="validationDefault02">Email</Form.Label>
                                    <Form.Control type="email" defaultValue={email} id="memail" />
                                </Col>
                                <Col md="6" className="mb-3">
                                    <Form.Label className="custom-file-input">Image</Form.Label>
                                    <Form.Control type="file" onChange={e => handleFileRead(e)} id="mimg" />
                                </Col>
                            </Row>
                            <Form.Group>
                                <Button variant="btn btn-primary" style={{ float: 'right' }} type="submit">Update</Button>

                            </Form.Group>
                            <div style={{ marginTop: '40px' }}></div>
                        </Form>

                    </Modal.Body>
                   
                </Modal>


                <Modal show={showModalStats} onHide={showEditStats} className="recModal">
                    <Modal.Header className="btnw" closeButton>
                        <Modal.Title as="h5">{pName?.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); })}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Card.Header className="d-flex justify-content-between" style={{marginTop:'3vh'}}>
                     <div className="header-title">
                        <h5 className="card-title">Batting Record</h5>
                     </div>
          
                  </Card.Header>
                    <div className="table-responsive" style={{marginTop:'3vh'}}>
                        <table id="user-list-table" className="table table-striped" role="grid" data-toggle="data-table">
                           <thead>
                              <tr className="ligth">
                              <th style={{textAlign:'center'}}>INNS</th>
                                 <th style={{textAlign:'center'}}>RUNS</th>
                                 {/* <th min-width= "100px">HR</th> */}
                                 <th style={{textAlign:'center'}}>HR</th>
                                 <th style={{textAlign:'center'}}>SR</th>
                                 <th style={{textAlign:'center'}}>100</th>
                                 <th style={{textAlign:'center'}}>50</th>
                              </tr>
                           </thead>
                           <tbody>
                           <tr>
                            <td style={{textAlign:'center'}}>{playerStats.batting_record?.innings === undefined ? '-' : playerStats.batting_record?.innings}</td>
                            <td style={{textAlign:'center'}}>{playerStats.batting_record?.runs=== undefined ? '-' : playerStats.batting_record?.runs}</td>
                            <td style={{textAlign:'center'}}>{playerStats.batting_record?.highest=== undefined ? '-' : playerStats.batting_record?.highest}</td>
                            <td style={{textAlign:'center'}}>{playerStats.batting_record?.sr=== undefined ? '-' : playerStats.batting_record?.sr === null ? '0': playerStats.batting_record?.sr.toFixed(2) }</td>
                            <td style={{textAlign:'center'}}>{playerStats.batting_record?.hundred=== undefined ? '-' : playerStats.batting_record?.hundred}</td>
                            <td style={{textAlign:'center'}}>{playerStats.batting_record?.fifty=== undefined ? '-' : playerStats.batting_record?.fifty}</td>
                           </tr>
                           </tbody>
                        </table>
                     </div>

                     <Card.Header className="d-flex justify-content-between" style={{marginTop:'3vh'}}>
                     <div className="header-title">
                        <h5 className="card-title">Bowling Record</h5>
                     </div>
          
                  </Card.Header>
                    <div className="table-responsive" style={{marginTop:'3vh'}}>
                        <table id="user-list-table" className="table table-striped" role="grid" data-toggle="data-table">
                           <thead>
                              <tr className="ligth">
                              <th style={{textAlign:'center'}}>INNS</th>
                                 <th style={{textAlign:'center'}}>WKTS</th>
                                 {/* <th min-width= "100px">HR</th> */}
                                 <th style={{textAlign:'center'}}>ECON</th>
                                 <th style={{textAlign:'center'}}>MAIDEN</th>
                                 <th style={{textAlign:'center'}}>OV</th>
                               
                              </tr>
                           </thead>
                           <tbody>
                        
                           <tr>
                            <td style={{textAlign:'center'}}>{playerStats.bowling_record?.innings === undefined ? '-' : playerStats.bowling_record?.innings}</td>
                            <td style={{textAlign:'center'}}>{playerStats.bowling_record?.wickets=== undefined ? '-' : playerStats.bowling_record?.wickets}</td>
                            <td style={{textAlign:'center'}}>{playerStats.bowling_record?.economy=== undefined ? '-' : playerStats.bowling_record?.economy}</td>
                            <td style={{textAlign:'center'}}>{playerStats.bowling_record?.maidens=== undefined ? '-' : playerStats.bowling_record?.maidens}</td>
                            <td style={{textAlign:'center'}}>{playerStats.bowling_record?.over=== undefined ? '-' : playerStats.bowling_record?.over}</td>
           
                     
                          
                           </tr>
                           </tbody>
                        </table>
                     </div>



                       

                    </Modal.Body>
                   
                </Modal>






            </Row>
            {filtered.length > 0 ? <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
                className="pagination pagination-md flex-wrap justify-content-center"
            /> : ' '}

        </>


    )
}

const mapStateToProps = (state) => {
    return {
        showLoading: state.auth.showLoading
    }
}

export default connect(mapStateToProps)(PlayerList);