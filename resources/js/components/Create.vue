<template>
    <div class="container">
        <h2>Create New Data</h2>
        <form @submit.prevent="create()">
            <input type="text" v-model="form.name" placeholder="Name" class="form-control mb-2">
            <input type="text" v-model="form.class" placeholder="Class" class="form-control mb-2">
            <input type="text" v-model="form.school" placeholder="School" class="form-control mb-2">
            <button type="submit" class="btn btn-success float-right ml-1">Create</button>
            <router-link to="/" class="btn btn-primary float-right">Cancel</router-link>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                form: {
                    name: '',
                    class: '',
                    school: ''
                }
            }
        },
        methods : {
            create(){
                axios.post("http://localhost:8000/api/student", this.form).then(() =>
                    this.form = '',
                    this.$router.push('/')
                )
            }
        }
    }

</script>
