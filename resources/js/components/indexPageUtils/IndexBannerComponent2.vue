<template>
    <div>
        <div class="container-fluid">
            <div class="container">
                    <div class="row">
                        <div class="col-md-6 py-5"  data-aos="fade-left">
                            <hr class="" style="border: 3px solid #1a74bc; width: 50px;">

                            <h1 style="padding-bottom: 20px">
                                <strong>WELCOME TO MARINA CORPS LOGISTICS</strong>
                            </h1>
                            <div style="color: light-gray;">
                                <p>
                                    Our team of experienced supply chain professionals leverage on our unparalleled 
                                    distribution network with you from start to finish, designing and implementing your 
                                    unique supply chain model.
                                </p>
                                <p>
                                    Over 500 dedicated employees, working in over 46 locations around the country, 
                                    deliver operational excellence to provide viable answers to the most challenging supply 
                                    chain questions.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6 py-5"  data-aos="fade-right">
                            <img src="/img/postman1.jpg" alt=" " style="max-width:100%;">
                        </div>
                    </div>
            </div>
        </div>

       <div class="container-fluid" id="atlas">
           <div class="container">
               <div class="row py-5 text-white"  data-aos="zoom-in">

                   <div class="col-md-6 col-lg-3 mb-3">
                        <div class="row">
                            <div class="col-2 py-3">
                                <font-awesome-icon icon="phone-alt" size="2x"></font-awesome-icon>
                            </div>

                            <div class="col-10">
                                <h4>
                                    <strong>ONLINE SERVICES</strong>
                                </h4>
                                <p>
                                    Our online services are available 24/7.
                                    Kindly reach us via email 
                                    <a href="mailto:support@corpcourier-marina.com" class="anchor">support@corpcourier-marina.com</a> 
                                </p>
                            </div>
                        </div>
                    </div>

                   <div class="col-md-6 col-lg-3 mb-3">
                        <div class="row">
                            <div class="col-2 py-3">
                                <font-awesome-icon icon="clock" size="2x"></font-awesome-icon>
                            </div>
                            <div class="col-10">
                                <h4>
                                    <strong>WORKING HOURS</strong>
                                </h4>
                                <p>
                                    Monday - 8am to 7pm <br> 
                                    Tuesday - 8am to 7pm  <br>
                                    Wednesday - 8am to 7pm <br>
                                    Thursday - 8am to 7pm <br>
                                    Friday - 8am to 7pm <br>
                                    Saturday - 8am to 5pm  
                                </p>
                            </div>
                        </div>
                    </div>

                   <div class="col-md-6 col-lg-3 mb-3">
                        <div class="row">
                            <div class="col-2 py-3">
                                <font-awesome-icon icon="globe" size="2x"></font-awesome-icon>
                            </div>
                            <div class="col-10">
                                <h4>
                                    <strong>OUR LOCATION</strong>
                                </h4>
                                <p>
                                    China, South Korea<br>
                                    Singapore, Switzerland  <br>
                                    Canada, United States <br>
                                    Paris, France <br>
                                    Osio, Norway <br>
                                    Frankfurt, Germany <br>
                                    Philippine, Italy
                                </p>
                            </div>
                        </div>
                    </div>

                   <div class="col-md-6 col-lg-3 mb-3">
                        <div class="row">
                            <div class="col-2 py-3">
                                <font-awesome-icon icon="user-plus" size="2x"></font-awesome-icon>
                            </div>
                            <div class="col-10">
                                <h4>
                                    <strong>REGISTER AS A PARTNER</strong>
                                </h4>
                                <p>
                                   Pay a deposit for your transactions with us and get discounted rates and 
                                   faster deliveries <br>
                                   <a href="#" class="anchor">Register</a>
                                </p>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
       </div>
    </div>
</template>


<style scoped>
    #atlas{
        background-image: url('/img/atlas.png');
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        background-color: #1a74bc;
        min-height: 300px;
    }
    .anchor{
        color: white;
        font-style: italic;
    }
</style>


<script>
export default {
    name: "IndexBannerComponent"
}
</script>