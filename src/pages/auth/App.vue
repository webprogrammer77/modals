<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <navigation >
				<div class="auth" slot="nav">
					<a>Sign in</a> <a>Sign up</a>
				</div>
      </navigation >
      <section>
        <div class="container">
          <div id="app">
            <auth/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import navigation from "@/components/UI/Navigation.vue"
import auth from "@/components/Auth.vue"
import login from "@/components/Login.vue"

export default {
	components:{
		auth,login,navigation
	},
	
	data(){
		return{
			
		}
	}
};
</script>

<style lang="scss">
#app {

}

.auth{
	margin-left: auto;
	margin-right: 50px;
	a{
		font-size: 14px;
		color: blue;
		border-bottom: 1px dashed blue;
		
		cursor:pointer;
	}
	a:not(:last-child){
		margin-right: 20px;
	}
}
</style>
