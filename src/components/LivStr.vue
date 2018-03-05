<template>
  <div class="vidCont">
    <video src="http://example.com/stream.m3u8"></video>
  </div>
</template>
<!-- http://phoboslab.org/log/2013/09/html5-live-video-streaming-via-websockets -->

<script></script>
<style>
  .vidCont{
    padding:50px;
    grid-area:vid;
  }
  .vidCont > video{
    width:500px;
    height:200px;
    background-color: #CCC;
  }
</style>
