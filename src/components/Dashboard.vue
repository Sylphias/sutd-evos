
 <template>
 <div id="dashboard">
   <div id="banner">
     <img id="banner" src="@/assets/evos.png">
   </div>
   <LivStr></LivStr>
   <Graph></Graph>
   <Speedometer></Speedometer>
   <RPM></RPM>
   <Temp></Temp>
   <Consumption></Consumption>
   <Toggles></Toggles>
   <!-- <Graph></Graph> -->
 </div>
 </template>

<script>
import Graph from '@/components/Graph.vue'
import Toggles from '@/components/Toggles.vue'
import Speedometer from '@/components/Speedometer.vue'
import RPM from '@/components/RPM.vue'
import Temp from '@/components/Temp.vue'
import Consumption from '@/components/Consumption.vue'
import LivStr from '@/components/LivStr.vue'
export default {
 name: 'Dashboard',
 components:{
   'Graph':Graph,
   'Toggles':Toggles,
   'Speedometer':Speedometer,
   'RPM':RPM,
   'Temp':Temp,
   'Consumption':Consumption,
   'LivStr':LivStr,
 },
 data () {
   return {
     msg: 'Welcome to Your Vue.js App'
   }
 }
}
 </script>
 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#banner{
  width:100%;
  height:100%;
  grid-area: header;
}
#banner >img{
  max-width:80%;
  max-height: 100%;
}
#vid{
grid-area:vid;
}
#gr1{
grid-area: gr1;
}
#gr2{
grid-area: gr2;
}
#meter1{
grid-area: meter1;
}
#meter2{
grid-area: meter2
}
#meter3{
grid-area: meter3;
}
#meter4{
grid-area: meter4;
}

#dashboard{
  height:100%;
  display: grid;
  grid-template-columns: repeat(3,33%);
  grid-template-rows: 5% 20% repeat(5,14%) 4%;
  grid-template-areas: "header header header"
  "vid vid vid"
  "vid vid vid"
  "gr1 gr1 meter1"
  "gr1 gr1 meter2"
  ". . meter3"
  "toggle toggle meter4"
  ". . ."
  ;
  margin:auto;
  padding: 20px;
}
 h1, h2 {
   font-weight: normal;
 }
 ul {
   list-style-type: none;
   padding: 0;
 }
 li {
   display: inline-block;
   margin: 0 10px;
 }
 a {
   color: #42b983;
 }
 </style>
