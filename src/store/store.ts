import { Vue } from "@zoovu/runner-browser-api";

export const CustomStore = new Vue({
  data() {
    return {
      advisorStart: true,
    };
  },
  methods: {
    add(key, val) {
      this.custom[key] = val;
    },
    addRef(key, val) {
      this.$refs[key] = val;
    },
  },
});
