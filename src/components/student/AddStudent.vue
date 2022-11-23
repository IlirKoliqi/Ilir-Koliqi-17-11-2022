<template>
 <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <dialog open v-if="open">
   <div>
    <h2>Add Student</h2>
    <form @submit.prevent="addStudent">
     <table>
      <tr>
       <td><label for="index">Index</label></td>
       <td>
        <input type="text" id="index" v-model="index" />
        <p class="errorMsg" v-if="this.errorList.index !== ''">
         {{ this.errorList.index }}
        </p>
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
       <td><button class="confirm" type="submit">Add</button></td>
      </tr>
     </table>
    </form>
   </div>
  </dialog>
</template>

<script>
export default {
 props: ["open"],
 emits: ["close"],
 data() {
  return {
   index: "",
   name: "",
   doB: "",
   municipality: "",
   errorList: {
    index: "",
    name: "",
    doB: "",
    municipality: "",
   },
   allowAdd: false,
  };
 },
 methods: {
  addStudent() {
   this.validateData();
   this.userExists();
   if (this.allowAdd) {
    const name = this.name.split(" ");
    const newStudent = {
     index: this.index,
     name: name[0],
     surname: name[1],
     doB: this.doB,
     municipality: this.municipality,
    };
    this.$store.dispatch("addNewStudent", { student: newStudent });
    this.$emit("close");
   }
  },
  validateData() {
   if (this.index.length !== 4) {
    this.allowAdd = false;
    this.errorList.index = "The index should be a 4 digit number";
   } else {
    this.errorList.index = "";
   }
   if (this.name === "") {
    this.allowAdd = false;
    this.errorList.name = "Please fill the name field.";
   } else if (this.name.split(" ").length === 1) {
    this.allowAdd = false;
    this.errorList.name = "Please enter name and surname.";
   } else {
    this.errorList.name = "";
   }
   if (this.doB === "") {
    this.allowAdd = false;
    this.errorList.doB = "Please fill the Date of Birth field.";
   } else {
    this.errorList.doB = "";
   }
   if (this.municipality === "") {
    this.allowAdd = false;
    this.errorList.municipality = "Please fill the municipality field.";
   } else {
    this.errorList.municipality = "";
   }
  },
  userExists() {
   const users = this.$store.getters.getDataFromStorage;
   const user = users.find((x) => x.index === this.index);
   if (typeof user !== "undefined") {
    this.errorList.index = "This index is already a user";
    this.allowAdd = false;
   } else {
    this.errorList.index = "";
   }

   if (
    this.errorList.name === "" &&
    this.errorList.doB === "" &&
    this.errorList.municipality === "" &&
    this.errorList.index === ""
   ) {
    this.allowAdd = true;
   }
  },
 },
};
</script>














<style src="../../../public/style.css"></style>
