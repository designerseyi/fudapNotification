export const storemenuAuth = {
   
    fetch() {

      if(this.$store.state.store._id){

          if(!this.$store.state.isStoreMenuSetup){
              // return redirect('/')

                  
                this.$axios.post('/getStoreMenu',{
                        "storeId": this.$store.state.store._id,
                      
                      }).then((data)=>{
                          // console.log(data.data);
                          // console.log(Object.entries(data.data).length);
                          
                        if(Object.entries(data.data).length>0 ){
                          
                          console.log(true);
                  
                          this.$store.commit('STORE_MENU_STATUS',true)
                          this.$router.push('/')
                        
                        }else{
                            console.log(false);
                            this.$store.commit('STORE_MENU_STATUS',false)
                            this.$router.push('/storemenu')
                        
                          

                        }
                      }).catch((e)=>{
                        console.log(e);
                        
                        
                      })  
                  
              
            
          }
         
        
      }else{
        console.log('store menu redirect login');
        
        this.$router.push('/login')
      }
      
    },
    

  };