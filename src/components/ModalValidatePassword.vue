<template>
<modal @close="$emit('close', resetForm())"
title="Modal width form + validate + password"
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

			<!-- password -->
			<div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
				<label class="form__label">Password</label>
				<p class="error" v-if="$v.name.$dirty && !$v.name.required">Password is required.</p>
				<p class="error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</p>
				<input class="form__input" v-model.trim.lazy="$v.password.$model"/>
			</div>
			
			<div class="form-group" :class="{ 'form-group--error': $v.repeatPassword.$error }">
				<label class="form__label">Repeat password</label>
				<p class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</p>
				<input class="form__input" v-model.trim="$v.repeatPassword.$model"/>
			</div>
			
			
			<button class="btn btnPrimary" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
			<p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
			<p class="typo__p typo__p--error" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
			<p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
		</form>
	</div>
</modal>
</template>
<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

import modal from '@/components/UI/Modal.vue'
export default{
	components:{
		modal
	},
	data(){
		return{
			name:'',
			email:'',
			password:'',
			repeatPassword: '',
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
		},
		password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
	},
  methods: {
    submit() {
      console.log({
				name: this.name,
				email: this.email,
				password: this.password
			})
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
			this.password=""
			this.repeatPassword=""
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
	color: green;
	margin-top: 10px;
}
.typo__p--error{
	color: red;
	font-size: 15px;
	font-weight: bold;
}
</style>