<template>
    <div class="container">
        <table class="table table-bordered table-hover">
            <thead>
                <th>Name</th>
                <th>Class</th>
                <th>School</th>
                <th>Options</th>
            </thead>
            <tbody v-for="data in datas" :key="data.id">
                <td>{{ data.name }}</td>
                <td>{{ data.class }}</td>
                <td>{{ data.school }}</td>
                <td>
                    <router-link :to="'/update/'+ data.id" class="btn btn-warning">Update</router-link>
                    <button @click.prevent="del(data.id)" class="btn btn-danger">Delete</button>
                </td>
            </tbody>
        </table>
        <router-link to="/create" class="btn btn-success mt-2 float-right">Create</router-link>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        data() {
            return {
                datas : []
            }
        },
        created(){
            this.load();
        },
        methods : {
            load(){
                axios.get("http://localhost:8000/api/student").then(res => {
                    this.datas = res.data;
                });
            },
            del(id){
                axios.delete("http://localhost:8000/api/student/"+ id).then( () => {
                    this.load()
                })
            }
        }
    }

</script>
