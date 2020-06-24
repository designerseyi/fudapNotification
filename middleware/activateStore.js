export default async function ({$auth,route,redirect,$axios,store}){

    console.log('checkstoremenuauth');
    
    console.log(store.state.store);
    
    if(!store.state.store.isActive){

        return redirect('/activateStores')
       
    }
  
    
  
}