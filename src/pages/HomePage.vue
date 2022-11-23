<template>
<the-header></the-header>
<students-page></students-page>
<the-footer></the-footer>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import StudentsPage from '../components/student/StudentsPage.vue';
import TheFooter from '../components/TheFooter.vue'
export default {
    components:{
        TheHeader,
        StudentsPage,
        TheFooter
    }
};


</script>
