<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !firstName.isValid}">
            <label for="firstname">FirstName</label>
            <input type="text" id="firstname" v-model.trim="firstName.val" @blur="clearValidity('firstName')">
            <p v-if="!firstName.isValid">FirstName must not be empty.</p>
        </div>
        <div class="form-control" :class="{invalid: !lastName.isValid}">
            <label for="lastname">LastName</label>
            <input type="text" id="lastname" v-model.trim="lastName.val" @blur="clearValidity('lastName')">
            <p v-if="!lastName.isValid">LastName must not be empty.</p>
        </div>
        <div class="form-control" :class="{invalid: !description.isValid}">
            <label for="discription">Description</label>
            <textarea name="" id="discription" rows="5" v-model.trim="description.val" @blur="clearValidity('description')"></textarea>
            <p v-if="!description.isValid">Desciption must not be empty.</p>
        </div>
        <div class="form-controll" :class="{invalid: !rate.isValid}">
            <label for="rate">Hourly Rate</label>
            <input type="number" id="rate" v-model.number="rate.val" @blur="clearValidity('rate')">
            <p v-if="!rate.isValid">Rate must not be greater than 0.</p>
        </div>
        <div class="form-control" :class="{invalid: !areas.isValid}">
            <h3>Areas of Experties</h3>
            <div>
                <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="frontend">Frontend Development</label>
            </div>
            <div>
                <input type="checkbox" id="backend" value="backend" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="backend">Backend Development</label>
            </div>
            <div>
                <input type="checkbox" id="career" value="career" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="career">Career Advisory</label>
            </div>
            <p v-if="!areas.isValid">At least one expertise must be seleted.</p>
        </div>
        <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
        <base-button>Register</base-button>
    </form>
</template>

<script>
export default{
    emits: ['save-data'],
    data(){
        return {
            firstName: {
                val: '',
                isValid: true,
            },
            lastName: {
                val: '',
                isValid: true,
            },
            description: {
                val: '',
                isValid: true,
            },
            rate: {
                val: null,
                isValid: true,
            },
            areas: {
                val: [],
                isValid: true,
            },
            formIsValid: true,
        };
    },
    methods: {
        clearValidity(input){
            this[input].isValid = true;
        },
        validateForm(){
            this.formIsValid = true;
            if(this.firstName.val === ''){
                this.firstName.isValid = false;
                this.formIsValid = false;
            }
            if(this.lastName.val === ''){
                this.lastName.isValid = false;
                this.formIsValid = false;
            }
            if(this.description.val === ''){
                this.description.isValid = false;
                this.formIsValid = false;
            }
            if(this.firstName.val === ''){
                this.firstName.isValid = false;
                this.formIsValid = false;
            }
            if(this.firstName.val === ''){
                this.firstName.isValid = false;
                this.formIsValid = false;
            }
            if(!this.rate.val || this.rate.val < 0){
                this.rate.isValid = false;
                this.formIsValid = false;
            }
            if(this.areas.val.length === 0){
                this.areas.isValid = false;
                this.formIsValid = false;
            }
        },
        submitForm(){
            this.validateForm();

            if(!this.formIsValid){
                return;
            }
            const formData = {
                first: this.firstName.val,
                last: this.lastName.val,
                desc: this.description.val,
                rate: this.rate.val,
                areas: this.areas.val,
            };
            console.log(formData);
            this.$emit('save-data', formData);
            
        }
    },
}
</script>