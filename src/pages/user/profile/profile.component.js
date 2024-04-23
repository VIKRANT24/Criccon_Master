import React, { useEffect } from 'react'



import { connect } from 'react-redux'


import avatars11 from '../../../assets/images/header/profile.png'




const ProfilePage = (props) => {

   

   return (
     
        <div class="col-lg-12">
             <div class="card">
                  <div class="card-body">
                     <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <div class="d-flex flex-wrap align-items-center">
                           <div class="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
                           <img src={avatars11} alt="User-Profile" class="theme-color-default-img img-fluid rounded-pill avatar-100"/>
                              <img src={avatars11} alt="User-Profile" class="theme-color-purple-img img-fluid rounded-pill avatar-100"/>
                              <img src={avatars11} alt="User-Profile" class="theme-color-blue-img img-fluid rounded-pill avatar-100"/>
                              <img src={avatars11} alt="User-Profile" class="theme-color-green-img img-fluid rounded-pill avatar-100"/>
                              <img src={avatars11} alt="User-Profile" class="theme-color-yellow-img img-fluid rounded-pill avatar-100"/>
                              <img src={avatars11} alt="User-Profile" class="theme-color-pink-img img-fluid rounded-pill avatar-100"/>
                           </div>
                           <div class="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                              <h4 class="me-2 h4">{sessionStorage.getItem('full_name')}</h4>
                              {/* <span> - Web Developer</span> */}
                           </div>
                        </div>

                     </div>
                  </div>
             </div>

             <div class="card">
                    
                     <div class="card-body">
                      
                         <div class="mt-2">
                        <h6 class="mb-1">Role:</h6>
                         {sessionStorage.getItem('user_role')==='3'?<p >Sub-Admin</p>:''}
                                        {sessionStorage.getItem('user_role')==='2'?<p >Scorer</p>:''}
                                        {sessionStorage.getItem('user_role')==='1'?<p >Admin</p>:''}
                        </div>
                        <div class="mt-2">
                        <h6 class="mb-1">UserName:</h6>
                        <p>{sessionStorage.getItem('user_name')}</p>
                        </div>
                        <div class="mt-2">
                        <h6 class="mb-1">MobileNo:</h6>
                        <p>{sessionStorage.getItem('mobile_no')}</p>
                        </div>
                        <div class="mt-2">
                        <h6 class="mb-1">Status:</h6>
                        <p><a href="#" class="text-body"> {sessionStorage.getItem('user_state')}</a></p>
                        </div>
                      
                     </div>
                  </div>

          </div>

          
     
   )

}

const mapStateToProps = (state) => {
   return {
      showLoading: state.auth.showLoading
   }
}

export default connect(mapStateToProps)(ProfilePage);