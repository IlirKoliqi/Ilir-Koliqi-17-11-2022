<template>
 <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <dialog open v-if="open"  class="deleteDialog">
   <div>
    <form @submit.prevent="deleteStudent">
     <div>
      <h2>
       Delete Student with Index: "{{ studentIndex }}"
      </h2>
     </div>
     <td>
      <button class="cancel" type="button" @click="$emit('close')">
       Cancel
      </button>
     </td>
     <td><button class="confirm" type="submit">Delete</button></td>
    </form>
   </div>
  </dialog>
</template>

<script>
export default {
 props: ["open", "studentIndex", "name"],
 emits: ["close"],
 methods: {
  deleteStudent() {
   this.$store.dispatch("deleteStudent", { index: this.studentIndex });
   this.$emit("close");
  },
 },
};
</script>










<style src="../../../public/style.css"></style>
