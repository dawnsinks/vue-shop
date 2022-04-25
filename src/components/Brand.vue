<template>
  <div class="outer">
    <div class="brand">
      <div class="py-container">
        <ul class="brand-list">
          <li class="brand-item">
            <img src="../assets/brand_21.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="../assets/brand_03.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="../assets/brand_05.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="../assets/brand_07.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="../assets/brand_09.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="../assets/brand_11.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="../assets/brand_13.png" />
          </li>
          <li class="brand-item">
            <img src="../assets/brand_15.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="../assets/brand_17.png" />
          </li>
          <li class="brand-item">
            <img src="../assets/brand_19.png" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brand"
}
</script>

<style scoped lang="less">
.outer .brand {
  margin: 10px 0;
}
.outer .brand .py-container {
  width: 1200px;
  margin: 0 auto;
}
.outer .brand .py-container .brand-list {
  overflow: hidden;
  padding: 15px 0;
  background: #f7f7f7;
  line-height: 18px;
}
.outer .brand .py-container .brand-list .brand-item {
  width: 120px;
  float: left;
  height: 37px;
}
.outer .brand .py-container .brand-list .brand-item img {
  border-left: 1px dotted #ccc;
  padding: 0 10px;
}
.outer .brand .py-container .brand-list .brand-item:first-child img {
  border-left: 0;
}
</style>