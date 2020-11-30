<template>
    <div id="dashboard_home">
        <div class="container top_page_hd mb-3">
            <div class="row pt-3 pb-2">
                <div class="col-md-12">
                    <h2>
                        <font-awesome-icon icon="clipboard-list" />
                        Manage Leave Applications
                    </h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <table class="table table-hover table-striped">
                            <tbody>
                                <tr>
                                    <th>Client Name</th>
                                    <th>Email</th>
                                    <th class="display-lg">Country</th>
                                </tr>
                                <tr style="cursor:pointer;" v-for="(application, index) in applications" :key="index" @click="showApplicationDetails(application)">
                                    <td>{{ application.name }}</td>
                                    <td>{{ application.email }}</td>
                                    <td class="display-lg">{{ application.country }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <ApplicationModal :application="selectedApplication" :is-show="modalShowState" @hideModal="modalShowState = $event" />
    </div>
</template>

<script>
var token = $('meta[name=csrf-token]').attr('content');
import Api from "../../api/Api";
import ApplicationModal from "../utils/ApplicationModalComponent.vue";

export default {
    components:{
        ApplicationModal
    },
    data(){
        return{
            applications: [],
            selectedApplication:{},
            errors: '',
            modalShowState:false
        }
    },
    mounted(){
        this.fetchApplications();
    },
    methods: {
        showApplicationDetails(application){
            this.selectedApplication = application;
            this.modalShowState = true;
        },
        fetchApplications(){
            let data = {
                _token: token
            };
            Api.client.post('/applications/fetch_all', data)
            .then((res) => {
                this.handleApplications(res);
            })
            .catch((errors) => {
                this.handleError(errors);
            });
        },
        handleApplications(response_data){
            this.applications = response_data.data;
        },
        handleError(errorsObj){
            // Review if the error object is correct (Has response)
            this.errors = errorsObj.response;
            console.log(this.errors);
        }
    }
}
</script>
<style scoped>
    .top_page_hd{
        background-color: #1a74bc;
    }
    .top_page_hd h2{
        font-weight: bold;
        font-size: 1.3rem;
        color: white;
        text-shadow: 0 0 12px #1a74bc;
    }
</style>
