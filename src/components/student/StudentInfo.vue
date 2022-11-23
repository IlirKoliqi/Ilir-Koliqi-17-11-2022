<template>
 <edit-student
  :open="this.editIsOpen"
  :studentIndex="editStudentIndex"
  @close="cancelEdit"
 ></edit-student>
 <delete-student
  :open="this.deleteIsOpen"
  :studentIndex="deleteStudentIndex"
  @close="cancelDelete"
 ></delete-student>
 <section class="mt-4 mb-4  " >
    <div class="h-100">
      <div class="mask d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12">  
              <div class="table-responsive">
                <table class="table  table-sm table-dark table-bordered ">
                  <thead class="text-info">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Date of Birth</th>
                      <th scope="col">Municipality</th>
                      <th scope="col" >Edit/Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="student in students" :key="student.index">
                    <td>{{ student.index }}</td>
                    <td>{{ student.name + " " + student.surname }}</td>
                    <td>{{ student.doB }}</td>
                    <td>{{ student.municipality }}</td>
                    <td>
                    <button @click="deleteStudent(student.index) " class="btn btn-dark btn-sm">Delete</button
                    ><button @click="editStudent(student.index)" class="btn btn-dark btn-sm">Edit</button>
                    </td>
                    </tr>
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EditStudent from "./EditStudent.vue";
import DeleteStudent from "./DeleteStudent.vue";
export default {
 components: {
  EditStudent,
  DeleteStudent,
 },
 props: {
  students: {
   type: Array,
   required: true,
  },
 },
 data() {
  return {
   editIsOpen: false,
   editStudentIndex: "",
   deleteIsOpen: false,
   deleteStudentIndex: "",
  };
 },
 methods: {
  editStudent(studentIndex) {
   this.editStudentIndex = studentIndex;
   this.editIsOpen = true;
  },
  cancelEdit() {
   this.editStudentIndex = "";
   this.editIsOpen = false;
  },
  deleteStudent(studentIndex) {
   this.deleteStudentIndex = studentIndex;
   this.deleteIsOpen = true;
  },
  cancelDelete() {
   this.deleteIsOpen = false;
   this.deleteStudentIndex = "";
  },
 },
};
</script>

