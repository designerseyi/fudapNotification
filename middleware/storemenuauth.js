export default async function ({$auth,route,redirect,$axios,store}){

    console.log('checkstoremenuauth');
    
    console.log(store.state.store);
    
    if(store.state.store.id){

            
            try{

              let data = await $axios.post('/api/getStoreMenu',{
                            "storeId": store.state.store._id,
                          })

                          if(Object.entries(data.data).length>0 ){
                        
                            console.log(true);
                     
                            store.commit('STORE_MENU_STATUS',true)
                            return true
                           
                          }else{
                              console.log(false + 'storemenuauth');
                              store.commit('STORE_MENU_STATUS',false)
                              return redirect('/storemenu')
                            
    
                          }

            }
            catch(e){
                console.log(e);
                
            }
                
              //  return      $axios.post('/api/getStoreMenu',{
              //         "storeId": store.state.store._id,
                     
              //       }).then((data)=>{
              //           // console.log(data.data);
              //           // console.log(Object.entries(data.data).length);
                        
              //         if(Object.entries(data.data).length>0 ){
                        
              //           console.log(true);
                 
              //           store.commit('STORE_MENU_STATUS',true)
              //           return true
                       
              //         }else{
              //             console.log(false + 'storemenuauth');
              //             store.commit('STORE_MENU_STATUS',false)
              //             return false
                       
                        

              //         }
              //       }).catch((e)=>{
              //       //   console.log(e);
                      
                      
              //       }) ?  '' : redirect('/storemenu')
                
             
          

        
       
    }
    
  
}