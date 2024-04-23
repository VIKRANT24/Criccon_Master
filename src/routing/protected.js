import {
    Navigate,
  } from 'react-router-dom';
  import { useLocation } from 'react-router-dom'

  
  const ProtectedRoute = ({ user, children }) => {
    const location = useLocation();
    if(sessionStorage.getItem('user_role')==='2' || sessionStorage.getItem('user_role')==='1'){
      return children;
    }
    console.log(location.pathname.split('/')[2])
    if (sessionStorage.getItem('user_uid')===null || sessionStorage.getItem('user_uid')===undefined || sessionStorage.getItem('user_uid') === '' ) {
      return <Navigate to="/auth/login" replace />;
    }
    if(location.pathname.split('/')[2]!='dashboard' && location.pathname.split('/')[2]!='user-profile' && location.pathname.split('/')[2]!='login' && location.pathname.split('/')[2]!='register'  )
    {
      if(sessionStorage.getItem('permissions').includes(location.pathname.split('/')[2]))
      {
    
       
      }
      else
      {
        alert('You dont have access contact admin for more information.')
       return  <Navigate to="/home/dashboard" replace />;
      }
    }
   

   

  
    return children;
  };
  
  export default ProtectedRoute;
  
  