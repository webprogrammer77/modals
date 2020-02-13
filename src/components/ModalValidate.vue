<template>
<modal @close="$emit('close', resetForm())"
title="Modal width form + validate"
> 
	<div slot="body">
		<form @submit.prevent="submit">

			<!-- Name -->
			<div class="form-group" :class="{ 'form-group--error': $v.name.$error }">				
				<label class="form__label">Name</label>
				<p class="error" v-if="$v.name.$dirty && !$v.name.required">Name is required</p>
				<p class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</p>
				<input class="form__input" v-model.trim.lazy="name"/>
			</div>

			<!-- Email -->
			<div class="form-group" :class="{ 'form-group--error': $v.email.$error }">				
				<label class="form__label">Email</label>
				<p class="error" v-if="$v.email.$dirty && !$v.email.required">Email is required</p>
				<p class="error" v-if="!$v.email.email">Email is incorrect.</p>
				<input class="form__input" v-model.trim.lazy="email"/>
			</div>
			
			<button class="btn btnPrimary" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
			<p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
			<p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
			<p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
		</form>
	</div>
</modal>
</template>
<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

import modal from '@/components/UI/Modal.vue'
export default{
	components:{
		modal
	},
	data(){
		return{
			name:'',
			email:'',
			submitStatus: null
		}
	},
	validations:{
		name:{
			required,
			minLength: minLength(4)
		},
		email:{
			required,
			email
		}
	},
  methods: {
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid ) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
					this.submitStatus = 'OK'
					setTimeout(() => {this.$emit('close' , this.resetForm()) }, 300)
        }, 500)
			}
			console.log(this.submitStatus);
			
		},
		resetForm(){
			this.name=""
			this.email=""
			this.submitStatus= null
			this.$v.$reset()
		}
  }
}
</script>
<style lang="scss">
.form-group .error{
	color:red;
	margin-bottom: 7px;
	font-size: 13px;
	text-align: left;
}
.form-group .error + input.form__input{
border-color: red;
}
.typo__p{
	font-size: 13px;
	color: blue;
	margin-top: 10px;
}
</style>