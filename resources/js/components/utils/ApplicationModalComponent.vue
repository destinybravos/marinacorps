<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="applicationModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <h5 class="modal-title" id="applicationModalLabel"><strong>Application Details</strong></h5>
                <button @click="hideModal()" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover table-striped" v-if="application">
                        <tbody>
                            <tr>
                                <td class="form-group">
                                    <strong>Name: </strong>
                                </td>
                                <td>
                                    <p> {{ application.name }} </p>
                                </td>
                            </tr>
                            <tr>
                                <td class="form-group">
                                    <strong>Email Address: </strong>
                                </td>
                                <td>
                                    <p> {{ application.email }} </p>
                                </td>
                            </tr>
                            <tr>
                                <td class="form-group">
                                    <strong>Phone Number: </strong>
                                </td>
                                <td>
                                    <p> {{ application.phone }} </p>
                                </td>
                            </tr>
                            <tr>
                                <td class="form-group">
                                    <strong>Address: </strong>
                                </td>
                                <td>
                                    <p> {{ application.address }} </p>
                                </td>
                            </tr>
                            <tr>
                                <td class="form-group">
                                    <strong>City: </strong>
                                </td>
                                <td>
                                    <p> {{ application.city }} </p>
                                </td>
                            </tr>
                            <tr>
                                <td class="form-group">
                                    <strong>Country: </strong>
                                </td>
                                <td>
                                    <p> {{ application.country }} </p>
                                </td>
                            </tr>
                            <tr>
                                <td class="form-group">
                                    <strong>Staff Email: </strong>
                                </td>
                                <td>
                                    <p> {{ application.staffemail }} </p>
                                </td>
                            </tr>
                            <tr>
                                <td class="form-group">
                                    <strong>Attachment: </strong>
                                </td>
                                <td>
                                    <p> <a :href="`storage/images/leave/${application.attach}`" target="blank">View Attachment</a> </p>
                                </td>
                            </tr>
                            <tr>
                                <td class="form-group">
                                    <strong>Message: </strong>
                                </td>
                                <td>
                                    <p> {{ application.message }} </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="modal-footer">
                <button @click="hideModal()" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
// import Api from "../../api/Api";
// var token = $('meta[name=csrf_token]').attr('content')
export default {
    props:{
        isShow:Boolean,
        application:Object
    },
    data(){
        return{
            applicationModal:'',
        }
    },
    watch:{
        'isShow' : function (showState) {
            if(showState == true){
                this.displayModal();
            }else{
                this.hideModal();
            }
        }
    },
    mounted(){
         this.applicationModal = $('body #applicationModal');
         var _token = this.token;
    },
    methods:{
        displayModal(){
            this.applicationModal.modal('show');
        },
        hideModal(){
            this.$emit('hideModal', false);
            this.applicationModal.modal('hide');
        },
    }
}
</script>