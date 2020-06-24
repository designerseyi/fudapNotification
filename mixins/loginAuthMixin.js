export const loginAuthMixins = {

    fetch(){

      if(this.$auth.loggedIn){
        if(this.$auth.user.user.usertype == 'vendor'){
          // return redirect('/')
    
          if(!(Object.entries(this.$store.state.store).length>0)){
             this.$axios.post('/api/getStoreAccess',{
                    "state": this.$auth.user.user.storeState ,
                    "area": this.$auth.user.user.storeArea,
                  "ownerId":this.$auth.user.user._id
                  }).then((data)=>{
                      // console.log(data.data);
                      // console.log(Object.entries(data.data).length);
                      
                    if(Object.entries(data.data).length>0 ){
                      
                      // console.log(true);
                      //   console.log(data.data);
                        
                        
                           let obj = {...data.data}
                          
                           
                       this.$store.commit('STORE',obj)
                      this.$store.commit('STORE_SETUP_STATUS',true)
                      this.$store.commit('MESSAGE','HAPPY')
                      console.log(this.$store.state.store);
                     
                     
                    }else{
                        console.log(false);
                        this.$store.commit('STORE_SETUP_STATUS',false)
                        this.$router.push('/setupStore')
                     
                      
      
                    }
                  }).catch((e)=>{
                    console.log(e);
                    
                    
                  }) 
          }
    
         
              
            
              
           
        
         }
    
         else{
           this.$router.push('/login')
        }
        
      
         
      }
    
      else{
        this.$router.push('/login')
      }
      
    }

   
}