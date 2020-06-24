<template>
  <div>
    
    <div v-if="$fetchState.pending">
       <b-loading :is-full-page="trueFam" :active="trueFam" :can-cancel="falseFam">
        </b-loading>
   </div>
    <!-- After user has access to the site -->
    <!-- this.$auth.loggedIn && this.$auth.$state.user.user.usertype=='vendor' && this.$store.state.isStoreSetup -->
    <!-- <section  class="main-content  is-paddingless"> -->
         
          <sidebar />
          <nuxt />


  </div>
</template>

<script>
import sidebar from '~/components/sidebar.vue'
import {mapState} from 'vuex'
import loginAuthMixin from '@/mixins/loginAuthMixin'
import storemenuAuthMixin from '@/mixins/loginAuthMixin'

export default { 
  // mixins:['loginAuthMixin','storemenuAuthMixin'],
  middleware:['auth','loginauth','storemenuauth','activateStore'],

 
    components:{
      sidebar
    },

    fetchOnServer:false,
    fetch(){

    },

    data(){
      return {
        hasSetupStore:false,
        trueFam:true,
        falseFam:false
      }
    },

    computed:{
        ...mapState({
          isStoreSetup:state => state.isStoreSetup
        })
    }
}
</script>

            