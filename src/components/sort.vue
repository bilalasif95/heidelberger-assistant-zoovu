<script lang="ts">
import { Component, Vue } from "@zoovu/runner-browser-api";
import { SortView } from "@zoovu/runner-web-design-base";

@Component({})
export default class SortViewExtended extends SortView {
  private isOpened = false;

  public documentClick(e) {
    const el: Vue | Element | Vue[] | Element[] = this.$el;
    const { target } = e;
    if (el !== target && !(el as Element).contains(target)) {
      this.isOpened = false;
    }
  }

  created() {
    document.addEventListener("click", this.documentClick);
  }

  beforeDestroy() {
    document.removeEventListener("click", this.documentClick);
  }
}
</script>
