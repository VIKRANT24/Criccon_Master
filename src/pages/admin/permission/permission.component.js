
import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import {  useNavigate,useLocation } from 'react-router-dom'
import Card from '../../../components/card/card'

import { loadingToggleAction } from "../../../store/action/common";
import store from "../../../store/store";
import ApiService from '../../../services/service'
import { API_NAME } from '../../../utils/constants';
import Spinner from '../../../components/loader/loader'
import { connect } from 'react-redux'
import Alert from '../../../components/toast/toast'
import { ToastContainer } from 'react-toastify';


const AdminPermission = (props) => {


    let history = useNavigate()
    let location = useLocation();
    //console.logs(itemId)



    //permission
    const [permission, setPermission] = useState([])
    const [editper, setEditPer] = useState([])

    const [defaultper, setDefaultPer] = useState([{
        name: 'Add Tournament',
        status: 'false',
        val_key:'add-tournament'

    },
    {
        name: 'View Tournament',
        status: 'false',
        val_key:'all-tournaments'
    },
    {
        name: 'My Tournament',
        status: 'false',
        val_key:'my-tournaments'

    },
    {
        name: 'Delete Tournament',
        status: 'false',
        val_key:'delete-tournament'

    },
    {
        name: 'Add Player',
        status: 'false',
        val_key:'add-player'

    },
    {
        name: 'View Players',
        status: 'false',
        val_key:'players'

    },
    {
        name: 'Add Scorer',
        status: 'false',
        val_key:'add-user'

    },
    {
        name: 'View Scorer',
        status: 'false',
        val_key:'user'

    },
    {
        name: 'Add Sub Admin',
        status: 'false',
        val_key:'add-admin'

    },
    {
        name: 'View Sub Admin',
        status: 'false',
        val_key:'admin'

    },
    {
        name: 'Reset Password',
        status: 'false',
        val_key:'reset-password'

    }

    ])

  const onPermissionSelect = (name,event)=>{
    console.log(event.target.checked)
    console.log(name)

    permission.forEach(element => {
        if(element.name===name)
        {
            element.status = JSON.stringify(event.target.checked)
        }
    });
   
  }
    
     React.useEffect(() => {

         if(location.state.per ==="" || location.state.per ===null )
         {
            setPermission(defaultper)
         }
         else
         {
            var dataArray = [] 
            defaultper.filter(per => {
              if((location.state.per).includes(per.val_key.toLowerCase()))
              {
               per.status = 'true'
              }
              else
              {
               per.status = 'false'
              }
              dataArray.push(per)
           });
           setPermission(dataArray)
         }
         console.log('Default',defaultper)
         console.log('Updated',permission)
     }, [])

     const updatePermission =  ()=>{

        store.dispatch(loadingToggleAction(true))
        const finalPerArray = []
       
        permission.filter(per => {
            if(per.status== 'true')
            {
                finalPerArray.push(per)
            }
        })
        console.log(finalPerArray)

        let updatedPermissions = finalPerArray.map(x => x.val_key).join(", ");
        console.log(updatedPermissions);


        


 
        let params = {
            user_id: location.state.uid,
            permissions : updatedPermissions
         }

         ApiService.postData(API_NAME.EDIT_PERMISSION,params).then(
            (resData) => {
               store.dispatch(loadingToggleAction(false))
               Alert('00', resData.message)

               setTimeout(() => {
                history('/home/admin')
               }, 3000);
               
              
      
            }
         ).catch((err) => {
            store.dispatch(loadingToggleAction(false))
            Alert('01', err.message)
      
         });

           
     }
    


    return (
        <>
           <ToastContainer/>
        <Spinner loading={props.showLoading} />
            <Row>
                <Col sm="12">
                    <Card>
                        <Card.Header className="d-flex justify-content-between flex-wrap">
                            <div className="header-title">
                                <h4 className="card-title mb-0">Permissions</h4>

                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive" style={{height:'400px'}}>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th className="text-center"  >{location.state.name}
                                                       
                                                    </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            permission.map((item, index) =>
                                            (
                                                <tr className="" key={index} >
                                                    <td className="">{item.name}
                                                
                                                    </td>
                                                    
                                                        <td className="text-center" key={index}>
                                                               {
                                                                 item.status ==='true' ?  
                                                                <input className="form-check-input" type="checkbox" defaultChecked onChange={onPermissionSelect.bind(this,item.name)}/> : <input className="form-check-input" type="checkbox"  onChange={onPermissionSelect.bind(this,item.name)}/> 
                                                               }

                                                            
                                                        </td>
                                                    
                                                  
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                
                            </div>
                        </Card.Body>
                        <Card.Footer>
                        <div className="text-center">
                                    <Button onClick={updatePermission} type="button" variant="primary">Save</Button>
                                </div>
                        </Card.Footer>
                    </Card>

                </Col>
            </Row>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
       showLoading: state.auth.showLoading
    }
 }

export default connect(mapStateToProps)(AdminPermission);