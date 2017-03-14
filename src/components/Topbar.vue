<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">简历编辑器</span>
      <p>左边编辑，右边实时预览</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Topbar'
  }

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
#topbar {
    background: #fff;
    box-shadow: 0 1px 3px 1px rgba(0,0,0,0.1);

    >.wrapper {
      min-width: 900px;
      max-width: 1440px;
      margin: 0 auto;
      height: 64px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      padding-left:40px;

    
     >.logo {
      font-size:30px;
      color: #333;
     }
     }
}

</style>
