<template>
    <div>
    <BannerComponent page-name="leave"></BannerComponent>
        <!-- <div class="my-5 py-5">

            fghjk
        </div> -->


        <div class="container mt-5">
            <div class="row mt-5 mb-5">
                <div class="col-md-12 shadow">
                    <h2 class="text-center mt-5 mb-3"><strong> APPLY FOR |LEAVE |RETIREMENT </strong></h2>
                    <p class="mx-lg-3 py-3 px-lg-5 px-2 bg-primary text-white">
                        <strong>MAKE SURE YOU FILL THE FORM CORRECTLY!</strong> State employees hired for permanent 
                        employment are entitled to a maximum of 60 days (480 hours) of paid military leave as follows:
                        <ul>
                            <li>
                                Members of the National Guard or any of the federal armed services reserve 
                                components are permitted up to 30 days (240 hours) of paid military leave for 
                                eligible activities.
                            </li>
                            <li>
                                Employees who are called or ordered to active duty by proper federal authority 
                                are permitted up to an additional 30 days (240 hours) of paid military leave for 
                                eligible activities.
                            </li>
                        </ul>


                    </p>
                    <form method="post" class="mx-3" name="form_apply_leave" id="form_apply_leave" @submit.prevent="saveLeave()">
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label for="name"><strong>Name</strong></label>
                                <input type="text" id="name" class="form-control name" v-model="name">
                            </div>
                            <div class="form-group col-sm-6">
                                <label for="email"><strong>Email</strong></label>
                                <input type="email" id="email" class="form-control email" v-model="email">
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label for="country"><strong>Country</strong></label>
                                <input type="text" id="country" class="form-control country" v-model="country">
                            </div>
                            <div class="form-group col-sm-6">
                                 <label for="city"><strong>City</strong></label>
                                 <input type="text" id="city" class="form-control city" v-model="city">
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-6">
                                  <label for="address"><strong>Address</strong></label>
                                  <input type="text" id="address" class="form-control address" v-model="address">
                            </div>
                            <div class="form-group col-sm-6">
                                 <label for="phone"><strong>Phone-No</strong></label>
                                 <input type="phone" id="phone" class="form-control phone" v-model="phone">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="staffemail"><strong>Staff-Email</strong></label>
                                    <input type="email" id="staffemail" class="form-control staffemail" v-model="staffemail">
                                </div>
                                <div class="form-group">
                                    <label for="attach"><strong>Attachment <small>(Passport Photograph)</small></strong></label>
                                    <input type="file" id="attach" class="form-control attach" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="msg"><strong>Message</strong></label>
                                    <textarea type="text" id="msg" rows="4" class="form-control msg" v-model="message"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-6">
                            </div>
                            <div class="form-group col-sm-6">
                                 <input type="checkbox" id="agree" required v-model="agree">
                                 <label for="agree">I agree to the <a href="#">Terms and Conditions</a></label><br>
                                 <button class="btn btn-primary float-right" type="submit" id="btn-apply">APPLY</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Alert Modal -->
        <alert-modal-component :isShow="showModal" :message="modalMessage" :type="modalType" />

    </div>
</template>

<script>
import BannerComponent from '../components/utils/BannerComponent.vue';
import AlertModalComponent from '../components/utils/AlertModalComponent.vue';
import Api from "../api/Api";
var token = $('meta[name=csrf-token]').attr('content');
export default {
    components: {
        BannerComponent,
        AlertModalComponent
    },
    data(){
        return{
            name:'',
            email:'',
            country:'',
            city:'',
            address:'',
            phone:'',
            staffemail:'',
            message:'',
            attach:'',
            agree:'',
            _token:'',
            errors:{},
            showModal:false,
            modalMessage: '',
            modalType: ''
        }
    },
    mounted(){
        this._token = token;
    },
    methods: {
        saveLeave(){
            this.attach = document.querySelector('#attach').files[0];

            // Create a new form object
            let data = new FormData();

            // Append data for storing
            data.append('name', this.name);
            data.append('email', this.email);
            data.append('country', this.country);
            data.append('city', this.city);
            data.append('phone', this.phone);
            data.append('staffemail', this.staffemail);
            data.append('address', this.address);
            data.append('message', this.message);
            data.append('agree', this.agree);
            data.append('attach', this.attach);
            data.append('_token', this._token);

            Api.client.post('/parcel/applyleave', data)
            .then((res) => {
                this.handleApplyLeave(res);
            })
            .catch((errors) => {
                this.handleError(errors);
            });
        },
        handleApplyLeave(response){
            if(response.data.status == 'success'){
                this.modalMessage = "Your application was well recieved! We will get back to you in respect to it.";
                this.modalType = 'success';
                this.showModal = true;
                this.resetform();
            }else{
                this.modalMessage =  response.data.message;
                this.modalType = 'error';
                this.showModal = true;
            }
        },
        handleError(errorsObj){
            // Review if the error object is correct (Has response)
            this.errors = errorsObj.response;
            console.log(this.errors);
        },
        resetform(){
            this.name = '';
            this.email = '';
            this.country = '';
            this.city = '';
            this.address= '';
            this.phone= '';
            this.staffemail= '';
            this.message= '';
            this.attach = '';
            this.agree= '';
            document.forms['form_apply_leave'].reset();
        }
    }
}
</script>

