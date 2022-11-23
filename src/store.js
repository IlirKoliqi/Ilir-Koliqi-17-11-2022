import { createStore } from "vuex";

export default createStore({
 state() {
  return {
   logedIn: false,
   students: JSON.parse(localStorage.getItem("data")),
  };
 },
 getters: {
  isLoggedIn(state) {
   return state.logedIn;
  },
  getDataFromStorage(state) {
   return state.students;
  },
  getUser() {
   return JSON.parse(localStorage.getItem("users"));
  },
  getStudentById: () => (id) => {
   return JSON.parse(localStorage.getItem("data")).find((x) => x.index === id);
  },
 },
 mutations: {
  logIn(state) {
   state.logedIn = true;
  },
  setDataToStorage(_, payload) {
   const data = payload.data;
   const name = payload.name;
   localStorage.setItem(name, JSON.stringify(data));
  },
  updateStudents(state, payload) {
   const data = JSON.parse(localStorage.getItem("data"));
   const userIndex = data.findIndex((x) => x.index === payload.index);
   data.splice(userIndex, 1, payload);
   state.students.splice(userIndex, 1, payload);
   localStorage.setItem("data", JSON.stringify(data));
  },
  deleteStudent(state, payload) {
   const data = JSON.parse(localStorage.getItem("data"));
   const userIndex = data.findIndex((x) => x.index === payload.index);
   data.splice(userIndex, 1);
   state.students.splice(userIndex, 1);
   localStorage.setItem("data", JSON.stringify(data));
  },
  addNewStudent(state, payload) {
   const data = JSON.parse(localStorage.getItem("data"));
   data.unshift(payload.student);
   state.students.unshift(payload.student);
   localStorage.setItem("data", JSON.stringify(data));
  },
 },
 actions: {
  updateStudents(context, payload) {
   context.commit("updateStudents", payload);
  },
  deleteStudent(context, payload) {
   context.commit("deleteStudent", payload);
  },
  addNewStudent(context, payload) {
   context.commit("addNewStudent", payload);
  },
 },
});
