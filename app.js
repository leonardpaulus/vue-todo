var app = new Vue({
  el: "#app",
  data: {
    goals: [],
    enteredValue: "",
  },
  methods: {
    addGoal() {
      if (!this.goals.includes(this.enteredValue)) {
        this.goals.push(this.enteredValue);
      }
    },
  },
});
