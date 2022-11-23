<template>
  <div class="container btnInput">
  <div class="d-flex justify-content-between">
 <add-student :open="this.addIsOpen" @close="cancelAdd"></add-student>
   <input type="text" v-model="search" placeholder="search..." class="mb-2 border border-secondary rounded inpclass"/>
   <button @click="addStudent" class="btn btn-dark btn-sm mb-2">Add Student</button>
  </div>
</div>
  <student-info :students="getDataFromStorage"></student-info>
</template>

<script>
import { mapGetters } from "vuex";
import StudentInfo from "./StudentInfo.vue";
import AddStudent from "./AddStudent.vue";
export default {
 components: {
  StudentInfo,
  AddStudent,
 },
 data() {
  return {
   search: "",
   getDataFromStorage: [],
   savedStudentList: [],
   addIsOpen: false,
   order: "desc",
  };
 },
 methods: {
  addStudent() {
   this.addIsOpen = true;
  },
  cancelAdd() {
   this.addIsOpen = false;
  },
 },
 watch: {
  search() {
   const filteredData = this.savedStudentList.filter(
    (x) =>
     x.name.toLowerCase().includes(this.search) ||
     x.surname.toLowerCase().includes(this.search) ||
     x.municipality.toLowerCase().includes(this.search) ||
     x.index.includes(this.search)
   );
   this.getDataFromStorage = filteredData;
  },
  ...mapGetters(["getDataFromStorage"]),
 },
 beforeMount() {
  this.getDataFromStorage = this.$store.getters.getDataFromStorage;
  this.savedStudentList = this.getDataFromStorage;
 },
};
</script>
<style>
.btnInput{
  margin-top: 10px;
}
</style>