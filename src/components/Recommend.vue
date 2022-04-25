<template>
  <div class="outer">
    <div class="today-recommend">
      <div class="py-container">
        <ul class="recommend">
          <li class="clock">
            <div class="time">
              <img src="../assets/clock.png"  alt=""/>
              <h3>今日推荐</h3>
            </div>
          </li>
          <li class="banner">
            <img src="../assets/today01.png"  alt=""/>
          </li>
          <li class="banner">
            <img src="../assets/today02.png"  alt=""/>
          </li>
          <li class="banner">
            <img src="../assets/today03.png"  alt=""/>
          </li>
          <li class="banner">
            <img src="../assets/today04.png"  alt=""/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend"
}
</script>

<style scoped lang="less">
.outer .today-recommend .py-container {
  width: 1200px;
  margin: 0 auto;
}
.outer .today-recommend .py-container .recommend {
  height: 165px;
  background-color: #eaeaea;
  margin: 10px 0;
  display: flex;
}
.outer .today-recommend .py-container .recommend .clock {
  width: 16.67%;
  background-color: #5c5251;
  color: #fff;
  font-size: 18px;
  text-align: center;
}
.outer .today-recommend .py-container .recommend .clock .time {
  padding: 30px 0;
}
.outer .today-recommend .py-container .recommend .clock h3 {
  margin: 9px 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 30.06px;
}
.outer .today-recommend .py-container .recommend .banner {
  width: 20.83%;
}
.outer .today-recommend .py-container .recommend .banner img {
  width: 100%;
  height: 100%;
  transition: all 400ms;
}
.outer .today-recommend .py-container .recommend .banner img:hover {
  opacity: 0.8;
}
</style>