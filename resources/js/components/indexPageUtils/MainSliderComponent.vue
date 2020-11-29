<template>
    <div style="max-width:100%; overflow:hidden;">
        <slider :image-list="images" :time-interval="9000" :slider-type="sliderType"></slider>
    </div>
</template>
<script>
import slider from '../utils/AgileSliderComponent.vue';
export default {
    components:{
        slider
    },
    data(){
        return{
            images: [
                {
                    image: '/img/ocean_shipping.jpg', 
                    caption:'Ocean Freight', 
                    sub_caption:'Express Logistics transport your bulky and gigantic cargo through water ways, eclipsing territories and regions.'
                },
                {
                    image: '/img/warehouse_trucks.jpg', 
                    caption:'Logistics Management',
                    sub_caption:'For us, moving your consignment from one destination to the other is equivalent to ensuring your reputation, travels far and wide, unblemished.'
                },
                {
                    image: '/img/air_freight.jpg', 
                    caption:'International Air Freight', 
                    sub_caption:'Our Air Freight service provides top notch, hassle free and timely movement for all your consignments at very competitive rates.'
                },
                {
                    image: '/img/navy.jpg',  
                    caption:'Courier Trucks on the go', 
                    sub_caption:'Need a fleet of trucks to transport containers from your manufacturing unit to the dock or airport? We are here for you!'},
            ],
            sliderType:'containers'
        }
    },
}
</script>