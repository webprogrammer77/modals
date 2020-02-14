<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <navigation />
      <section>
        <div class="container">
          <div id="app">
            <h1>Home</h1>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import navigation from "@/components/UI/Navigation.vue"
export default {
	name: "Home",
		components:{
		navigation
	},
	data(){
		return{
			
		}
	}
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
