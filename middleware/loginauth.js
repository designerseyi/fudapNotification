export default async function({$auth,route,redirect,$axios,store}){

  console.log('login auth at work');
  
  
  
  
  if($auth.loggedIn){
    if($auth.user.user.usertype == 'vendor'){
      // return redirect('/')

      if(!(Object.entries(store.state.store).length>0)){

          try {

             let data =  await  $axios.post('/api/getRestuarantAccess',{
                    "state": $auth.user.user.storeState ,
                    "area": $auth.user.user.storeArea,
                    "ownerId":$auth.user.user._id
                    })

                    if(Object.entries(data.data).length>0 ){
                  
                      // console.log(true);
                      //   console.log(data.data);
                        
                        
                           let obj = {...data.data}
                          
                           
                      store.commit('STORE',obj)
                      store.commit('STORE_SETUP_STATUS',true)
                      store.commit('MESSAGE','HAPPY')
                      console.log(store.state.store);
                      console.log('Has Setup');
                      
                      
                     
                    }else{
                        console.log(false + 'loginauth middleware');
                        store.commit('STORE_SETUP_STATUS',false)
                        return redirect('/setupStore')
        
                    }

          }
          catch(e){
            console.log(e);
          }

        //  return $axios.post('/api/getStoreAccess',{
        //         "state": $auth.user.user.storeState ,
        //         "area": $auth.user.user.storeArea,
        //       "ownerId":$auth.user.user._id
        //       }).then((data)=>{
        //           // console.log(data.data);
        //           // console.log(Object.entries(data.data).length);
                  
        //         if(Object.entries(data.data).length>0 ){
                  
        //           // console.log(true);
        //           //   console.log(data.data);
                    
                    
        //                let obj = {...data.data}
                      
                       
        //           store.commit('STORE',obj)
        //           store.commit('STORE_SETUP_STATUS',true)
        //           store.commit('MESSAGE','HAPPY')
        //           console.log(store.state.store);
                  
                 
        //         }else{
        //             console.log(false + 'loginauth middleware');
        //             store.commit('STORE_SETUP_STATUS',false)
    
        //         }
        //       }).catch((e)=>{
        //           console.log(e);
                
                
        //       }) 
              // ? '' : redirect('/setupStore')

                
                
              // if(a){
              //   console.log('got here');
                
              //   return redirect('/setupStore')
              // }
      }

 
     }
     else{
      return redirect('/login')
     }
 

  }

  

  
}