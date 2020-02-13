<template>
	<modal 
	title="Modal with validate"
	@close="$emit('close')"
	>
		<div slot="body" class="body-modal__container">
			<form @submit.prevent="onSubmit">
				<div class="form-item" :class="{errorInput: $v.name.$error}">
					<label >Name:</label>
					<p class="errorText" v-if="!$v.name.required">Filed is required!</p>
					<p class="errorText" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} !</p>
					<!-- <p class="errorText1" v-if="$v.name.$dirty && !$v.name.required">Name must have at least {{$v.name.$params.minLength.min}} !</p>
					<p class="errorText2" v-if="!$v.name.required && $v.name.$error">Name must have at least {{$v.name.$params.minLength.min}} !</p> -->
					<input 
					v-model="name"
					:class="{error: $v.name.$error}"
					@change="$v.name.$touch()">
				</div>
				<div class="form-item" :class="{errorInput: $v.email.$error}">
					<p class="errorText" v-if="!$v.email.required">Filed is required!</p>
					<p class="errorText" v-if="!$v.email.email">Email is not correct!</p>
					<label >Email:</label>
					<input 
					v-model="email"
					:class="{error: $v.email.$error}"
					@change="$v.email.$touch()"
					>
				</div>
				<button  class="btn btnPrimary">Submit</button>
			</form>
		</div>
		</modal>
</template>
<script>
import { required, minLength, between, email } from 'vuelidate/lib/validators'
import modal from "@/components/UI/Modal.vue"

export default{
	
	components:{
		modal
	},
	props:{
	
	},
	data(){
		return{
			email:'',
			name: ''
		}
	},
	validations: {
		name: {
			required,
			minLength : minLength(4)
		},
		email: {
			required,
			email
		}
	},
	methods:{
		onSubmit(){
			this.$v.$touch()
			if (!this.$v.$invalid){
				const user = {
					name: this.name,
					email: thid.email
				}
				console.log(user);
				// DONE
				this.name= ''
				this.email=''
				this.$v.$reset()
				this.$emit('close')
			}
		}
	}
}
</script>
<style lang="scss">
	.form-item .errorText{
		display: none;
		margin-bottom: 8px;
		font-size: 13.4px;
		color: #f00;
	}
	.form-item.errorInput .errorText{
		display: block;
	}
	input.error{
		border-color: #f00;
	}
</style>