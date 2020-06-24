<template>
    <div>

        <p class="has-text-centered"> Notification</p>
    </div>
</template>

<script>
export default {

    
    mounted(){
        window.OneSignal.push(async ()=>{
            await window.$OneSignal.isPushNotificationsEnabled(async (isEnabled)=>{
            if (isEnabled) {
              console.log('Push notifications are enabled!')
                window.OneSignal.setExternalUserId(this.$auth.user.user._id);
                console.log('setooo');

            } else {
              console.log('Push notifications are not enabled yet.')
            //   await window.OneSignal.showNativePrompt()
                await   window.$OneSignal.registerForPushNotifications()
               
              
                  
              console.log('setooo');
              
            }
          })
          })
    }

}
</script>

<style>

</style>