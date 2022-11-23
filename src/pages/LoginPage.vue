<template>
  <section class="bg-dark" style="height:100vh" >
  <div class="container py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" >
          <div class="row g-0">
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">
                <form @submit.prevent="login">

                  <div class="d-flex align-items-center mb-3 pb-1">

                    <img class="rounded-top rounded-bottom mx-auto" src="https://t3.ftcdn.net/jpg/05/39/07/80/360_F_539078099_lEuyopxFWr6NWj3pbNPmLchRjcYs1gCn.jpg" height="50" />
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into Student Information System</h5>

                  <div class="form-outline mb-4">
                    <input type="text" id="form2Example17" class="form-control form-control-lg" placeholder="Username" v-model="username"/>
                  </div>
                  <p class="erro" v-if="this.errors.usernameBul">{{ this.errors.errorMsg }}</p>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" placeholder="Password" v-model="password"/>
                  </div>
                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from '../components/TheFooter.vue'
export default {
  components:{
    TheFooter
  },
 data() {
  return {
   username: "",
   password: "",
   errors: {
    usernameBul: false,
    errorMsg: "",
    passwordBul: false,
   },
   validatedUser: false,
  };
 },
 methods: {
  validateData() {
   if (this.username.trim() === "" || this.password.trim() === "") {
    this.errors.usernameBul = true;
    this.errors.passwordBul = true;
    this.errors.errorMsg = "Please Fill Both  Fields";
   } else {
    this.errors.usernameBul = false;
    this.errors.errorMsg = "";
    this.errors.passwordBul = false;
   }
  
   if (!this.passwordBul && !this.errors.passwordBul) {
    this.validateUser();
   }
  },
  validateUser() {
   const users = this.$store.getters.getUser;
   const foundUser = users.find((x) => x.username === this.username);
   if (typeof foundUser === "undefined" || foundUser.password !== this.password) {
    this.errors.usernameBul = true;
    this.errors.errorMsg = "User or Password is Incorrect";
   } else {
    this.errors.passwordBul = false;
    this.errors.usernameBul = false;
    this.errors.password = "";
    this.validatedUser = true;
   }
  },
  login() {
   this.validateData();
   if (!this.passwordBul && !this.errors.passwordBul && this.validatedUser) {
    this.$store.commit("logIn");
    this.$router.push("/home");
   }
  },
 },
};
</script>

<style scoped>
.errorMsg {
 color: #d60929;
 margin: 0 auto;
 margin-bottom: 1rem;
 margin-top: -0.8rem;
 padding: 0;
}
</style>
