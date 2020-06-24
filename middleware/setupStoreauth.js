export default async function({$auth,route,redirect,$axios,store}){

    console.log('login auth at work');
    
    
    
    if($auth.loggedIn){
      if($auth.user.user.usertype == 'vendor'){
        // return redirect('/')
  
       if(store.state.store){

            return redirect('/')
       }
       
       }
       else{
        return redirect('/login')
       }
   
  
    }
  
    
  
    
  }