<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <div id="app">
						<!-- button firstModal -->

						<button @click="modalFirst = true" class="btn btnPrimary">Show first modal</button>
						<!-- first modal -->

           <modals v-show="modalFirst" title="First modal" @close="modalFirst=false">
						 <div slot="body" class="body-modal__container">
							 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur dolorem dolor in.</p>
							 <button @click="modalFirst = false" class="btn btnPrimary">Well done</button>
						 </div>
					 </modals>

					 <!-- second modal -->

					<button @click="modalSecond.show = true" class="btn btnPrimary">Show second modal</button>
					<modals
					title="Modal with form"
					v-show="modalSecond.show"
					@close="modalSecond.show=false"
					>
						<div slot="body" class="body-modal__container">
							<form @submit.prevent="submitSecondForm">
								<label >Name:</label>
								<input type="text" v-model="modalSecond.name" required>
								<label >Email:</label>
								<input type="email" v-model="modalSecond.email">
								<button  class="btn btnPrimary">Submit</button>
							</form>
						</div>
					 </modals>

					  <!-- modal width modal + validate -->
					<button @click="modalValidate = true" class="btn btnPrimary">Show modal + validate</button>
					<modalValidate
					v-show="modalValidate"
					@close="modalValidate=false"
					>
					</modalValidate>

					<button @click="modalValidatePassword = true" class="btn btnPrimary">Show modal + validate + password</button>
					<modalValidatePassword
					v-show="modalValidatePassword"
					@close="modalValidatePassword=false"
					>
					</modalValidatePassword>

					 <!-- modal width modal + validate + password -->

          </div>
        </div>
      </section>
    </div>
  </div>
	
</template>

<script>
import modals from "@/components/UI/Modal.vue"
import modalValidate from "@/components/ModalValidate.vue"
import modalValidatePassword from "@/components/ModalValidatePassword.vue"
export default {
	components:{
		modals,modalValidate,modalValidatePassword
	},
	data(){
		return {
			modalFirst: false,
			modalSecond: {
				show: false,
				name: '',
				email: ''
			},
			modalValidate: false,
			modalValidatePassword: false,
		}
	},
	methods: {
		submitSecondForm(){

			this.modalSecond.name=''
			this.modalSecond.email=''
			this.modalSecond.show=false
			
		}
	}
};
</script>

<style></style>
