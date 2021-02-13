<template>
<div>
  <div id='golink' class='separator' style='text-align:center'>
  <div class='safelink' dir='ltr' trbidi='on'>
  <span id='daplong' class='button1'>Please Wait...</span>
  </div>
  </div>
</div>
</template>

<script>
export default {};

var currentURL = location.href;
var str = currentURL;
var res = str.replace("https://www.alamatblog.com/p/safelink.html?url=", "");
document.write(
  '<button id="download" class="visit-link button1" onclick="changeLink();" style="display:none;">Menuju Link</button>'
);
</script>

<style>
</style>
