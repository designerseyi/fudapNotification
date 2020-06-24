import gql from 'graphql-tag'

export const GET_STORE_ACESS = gql`
query getStoreAccess($storeAccessInput:StoreAccessInput) {
    getStoreAccess(storeAccessInput:$storeAccessInput){
        id,
        name,
    }
}`

export const storeSetupMixins = {

    // apollo: {
    //     getStoreAccess: {
    //       query: GET_STORE_ACESS,
    //       variables() {
            
    //         return {
    //             storeAccessInput:{
    //                 ownerId:this.$auth.user.user._id,
    //                 state:this.$auth.user.user.storeState,
    //                 area:this.$auth.user.user.storeArea,
    //             }
    //         }
    //       },
    
    //       result(data) {
    //         let reformStoresData = JSON.parse(JSON.stringify(data))
    //         console.log(reformStoresData.data.getStoreAccess)
            
    //       }
    //     },
    
    //     // getUserProfile: {
    //     //   query: GET_USER_PROFILE,
    //     //   variables() {
    //     //     return {
    //     //       userid:this.userid
    //     //     }
    //     //   },
    
    //     //   result(data){
    
    //     //     console.log( 'userid' + this.userid);
            
    //     //     console.log('get user profile')
    
    //     //      let reformStoresData= lodash.get(data, 'data.getUserProfile', 'default')
    //     //      let useraddress= lodash.get(data, 'data.getUserProfile.address', 'default')
    //     //      let useraddressgeocode = lodash.get(data, 'data.getUserProfile.address.geoCode', 'default')
           
    //     //    this.userprofile = reformStoresData
           
    //     //    this.userprofileAddress = useraddress
    //     //    this.userprofileGeocode = useraddressgeocode
    //     //    console.log(this.userprofileAddress.geoCode);
    //     //    console.log(this.userprofileGeocode.lat);
    
    //     //     // this.userprofile = {...data.data.getUserProfile}
    //     //     // let museraddress = JSON.parse(JSON.stringify(this.userprofile.address))
    //     //     // console.log(museraddress.area);
            
         
            
    //     //   }
    //      },

         asyncData(context) {
            console.log('.....................');
            
            // context.apollo.addSmartQuery('query', {
            //     query: GET_STORE_ACESS,
            //     variables: { ownerId:this.$auth.user.user._id,
            //         state:this.$auth.user.user.storeState,
            //         area:this.$auth.user.user.storeArea,},
            //     manual: true,
            //     result(data) {
            //       // console.log(data.area)
            //        let reformStoresData = JSON.parse(JSON.stringify(data))
            //         // this.$store.commit('UPDATE_STORES_IN_LOCATION', data.area)
            //         // this.stores = this.$store.state.storesInLocation.stores
            //         console.log(reformStoresData.data);
                    
         
                  
            //     }
            //   })
            
            console.log("(Mixin) " + context.route.path + "AsyncData: " + JSON.stringify(context.route.params));
          },
          fetch(context) {
            console.log('orooooooooo');
            
            console.log("(Mixin) " + context.route.path + "Fetch: " + JSON.stringify(context.route.params));
          },

         beforeMount(){
            //  this.$apollo.queries.getStoreAccess
         },
        

        //  beforeEach(to,from,next){

        //  }
    
}