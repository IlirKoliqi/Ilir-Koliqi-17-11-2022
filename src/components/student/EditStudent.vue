<template>
 <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <dialog open v-if="open">
   <div v-if="!loading">
    <h2>Edit Student</h2>
    <form @submit.prevent="editUser">
     <table>
      <tr>
       <td><label for="index">Index</label></td>
       <td>
        <input type="text" id="index" readonly v-model="index" />
       </td>
      </tr>
      <tr>
       <td><label for="name">Name</label></td>
       <td>
        <input type="text" id="name" v-model="name" />
        <p class="errorMsg" v-if="this.errorList.name !== ''">
         {{ this.errorList.name }}
        </p>
       </td>
      </tr>
      <tr>
       <td><label for="dob">Date of birth</label></td>
       <td>
        <input type="date" v-model="doB" id="dob" />
        <p class="errorMsg" v-if="this.errorList.doB !== ''">
         {{ this.errorList.doB }}
        </p>
       </td>
      </tr>
      <tr>
       <td><label for="municipality">Municipality</label></td>
       <td>
        <input type="text" id="municipality" v-model="municipality" />
        <p class="errorMsg" v-if="this.errorList.municipality !== ''">
         {{ this.errorList.municipality }}
        </p>
       </td>
      </tr>
      <tr>
       <td>
        <button class="cancel" type="button" @click="$emit('close')">
         Cancel
        </button>
       </td>
       <td><button class="confirm" type="submit">Save</button></td>
      </tr>
     </table>
    </form>
   </div>
   
  </dialog>
</template>

<script>
// import LoadingComponent from "../loading/LadingComponent.vue";
export default {
//  components: {
//   LoadingComponent,
//  },
 props: ["open", "studentIndex"],
 emits: ["close"],
 data() {
  return {
   loading: false,
   index: "",
   name: "",
   doB: "",
   municipality: "",
   allowEdit: true,
   errorList: {
    name: "",
    doB: "",
    municipality: "",
   },
  };
 },
 methods: {
  editUser() {
   this.validateData();
   if (this.allowEdit) {
    const user = this.$store.getters.getStudentById(this.studentIndex);
    const name = this.name.split(" ");
    user.name = name[0];
    user.surname = name[1];
    user.doB = this.doB;
    user.municipality = this.municipality;
    const updatedUser = {
     index: this.studentIndex,
     name: name[0],
     surname: name[1],
     doB: this.doB,
     municipality: this.municipality,
    };
    this.$store.dispatch("updateStudents", updatedUser);
    this.$emit("close");
   }
  },
  validateData() {
   if (this.name === "") {
    this.allowEdit = false;
    this.errorList.name = "Please fill the name field.";
   } else if (this.name.split(" ").length === 1) {
    this.allowEdit = false;
    this.errorList.name = "Please enter name and surname.";
   } else {
    this.errorList.name = "";
   }
   if (this.doB === "") {
    this.allowEdit = false;
    this.errorList.doB = "Please fill the Date of Birth field.";
   } else {
    this.errorList.doB = "";
   }
   if (this.municipality === "") {
    this.allowEdit = false;
    this.errorList.municipality = "Please fill the municipality field.";
   } else {
    this.errorList.municipality = "";
   }
   if (
    this.errorList.name === "" &&
    this.errorList.doB === "" &&
    this.errorList.municipality === ""
   ) {
    this.allowEdit = true;
   }
  },
 },
 watch: {
  open() {
   if (this.open) {
    this.errorList = {
     name: "",
     doB: "",
     municipality: "",
    };
    this.loading = true;
    const user = this.$store.getters.getStudentById(this.studentIndex);
    this.index = user.index;
    this.name = user.name + " " + user.surname;
    this.doB = user.doB;
    this.municipality = user.municipality;
    this.loading = false;
   }
  },
 },
};
</script>









<style src="../../../public/style.css"></style>
