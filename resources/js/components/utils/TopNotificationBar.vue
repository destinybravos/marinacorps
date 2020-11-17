<template>
    <div id="top_notification">
        <p v-for="(data, index) in notifications" :key="index" class="py-2">
            {{ data.msg }}
        </p>
    </div>
</template>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #top_notification{
        background-color:#ffffff;
        color: white;
        text-align:center;
        font-size:1rem;
    }
    #top_notification p{
        max-width: 90%;
        margin: auto;
    }
</style>

<script>
import Api from "../../api/Api";

export default {
    data(){
        return {
            notifications : []
        }
    },
    mounted(){
        // Insert your api url from api.web file
        // Api.client.post('/notification/check')
        // .then((res)=>{
        //     this.displayNotification(res)
        // })
        // .catch((error)=>{
        //     console.log(error);
        // });
    },
    methods : {
        displayNotification(response){
            if(response.data.count > 0){
                this.notifications = response.data.notification;
            }
        }
    }
}
</script>
