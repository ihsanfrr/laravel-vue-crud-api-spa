<template>
    <div class="container">
        <h2>Update Data</h2>
        <form @submit.prevent="update()">
            <input type="text" v-model="form.name" placeholder="Name" class="form-control mb-2">
            <input type="text" v-model="form.class" placeholder="Class" class="form-control mb-2">
            <input type="text" v-model="form.school" placeholder="School" class="form-control mb-2">
            <button type="submit" class="btn btn-success float-right ml-1">Update</button>
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
        created(){
            this.load()
        },
        methods : {
            load(){
                axios.get("http://localhost:8000/api/student/"+ this.$route.params.id).then( res => {
                    this.form = res.data
                })
            },
            update(){
                axios.put("http://localhost:8000/api/student/"+ this.$route.params.id, {
                    name : this.form.name,
                    class : this.form.class,
                    school : this.form.school
                }).then( () => {
                    this.$router.push('/');
                })
            }
        }
    }

</script>
