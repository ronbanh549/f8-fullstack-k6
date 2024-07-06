F8.component("counter-app", {
  data: () => {
    return {
      name: "Counter App F8",
      count: 10,
    };
  },

  template: `
      <h1>{{ name }}</h1>
      <h1>Count: {{count}} - {{count}} lần</h1>
      <button v-on:click="count--">-</button>
      <button v-on:click="count++">+</button>
      <button v-on:dblclick="name='Học lập trình để đi làm'">Change</button>
    `,
});
