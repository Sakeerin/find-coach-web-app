<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="firstname">FirstName</label>
            <input type="text" id="firstname" v-model.trim="firstName">
        </div>
        <div class="form-control">
            <label for="lastname">LastName</label>
            <input type="text" id="lastname" v-model.trim="lastName">
        </div>
        <div class="form-control">
            <label for="discription">Description</label>
            <textarea name="" id="discription" rows="5" v-model.trim="description"></textarea>
        </div>
        <div class="form-controll">
            <label for="rate">Hourly Rate</label>
            <input type="number" id="rate" v-model.number="rate">
        </div>
        <div class="form-control">
            <h3>Areas of Experties</h3>
            <div>
                <input type="checkbox" id="frontend" value="frontend" v-model="areas">
                <label for="frontend">Frontend Development</label>
            </div>
            <div>
                <input type="checkbox" id="backend" value="backend" v-model="areas">
                <label for="backend">Backend Development</label>
            </div>
            <div>
                <input type="checkbox" id="career" value="career" v-model="areas">
                <label for="career">Career Advisory</label>
            </div>
        </div>
        <base-button>Register</base-button>
    </form>
</template>

<script>
export default{
    emits: ['save-data'],
    data(){
        return {
            firstName: '',
            lastName: '',
            description: '',
            rate: null,
            areas: [],
        };
    },
    methods: {
        submitForm(){
            const formData = {
                first: this.firstName,
                last: this.lastName,
                desc: this.description,
                rate: this.rate,
                areas: this.areas,
            };
            console.log(formData);
            this.$emit('save-data', formData);
            
        }
    },
}
</script>