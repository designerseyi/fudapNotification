
// export default function({ $auth }) {
//  $auth.onRedirect((to, from) => {
//    console.error('Plugins fro Url' + from)
//    // you can optionally change `to` by returning a new value
//  })
// }

export default async function ({store,app, $auth,redirect}) {

    // $auth.onRedirect((to, from) => {
    //     console.log('Plugins from Url' + from)
    //     console.log('Plugins to' + to);
    
    //     if(from == '/signup'  ){
             
    //          console.log(from);
             
             
    //          return '/setupStore'
    //     }
    // //     else if(from == '/login'  ){
             
    // //         console.log(from);
            
            
    // //         return '/'
    // //    }
      
       
    
    // //     else {
    // //      console.log('i got here');
    // //      return from
    // //  }
        
    
    //     // you can optionally change `to` by returning a new value
    //   })

    if (!$auth.loggedIn) {
        return
    }
const auth = $auth;
const authStrategy = auth.strategy.name;
    if(authStrategy === 'facebook' || authStrategy === 'google'){

        const token = auth.getToken(authStrategy).substr(7)
        const authStrategyConverted = authStrategy === 'facebook' ? 'fb' : 'google';
        const url = `/user/signup/${authStrategyConverted}?token=${token}`;
          console.log(url)
          console.log(auth.user);
          
          

          if(store.state.usersStore.loginWithGmail){
              return
          }
          else{
                //get details returned from gmail
                let user = auth.user;
                
                //register use on db with the detials

                try{
                    
                    await app.$axios.$post('/api/register',{email: user.email,
                        profilePic:user.picture,
                        password: '',
                        usertype:'user',
                        firstname:user.given_name,
                        lastname:user.family_name} );
                        app.$router.push('/createProfile')
                }
                catch(e){
                  this.$store.commit('usersStore/GMAIL_ERROR',e.message)
                  app.$router.push('/login')
                  console.log(e)
                }
                //if possible log them in using local

          }
          
// try {
//             const {data} = await app.$axios.$post(url, null);
//             auth.setToken('local', "Bearer "+ data.access_token);
//             setTimeout( async () => {
//                 auth.setStrategy('local');
//                 setTimeout( async () => {
//                     await auth.fetchUser();
//                 })
//             });
//         } catch (e) {
//             console.log(e);
//         }
    }
}