<script lang="ts">
    import {Component, Vue } from "@zoovu/runner-browser-api";
    import { SortView } from "@zoovu/runner-web-design-base";

    @Component({})
    export default class SortViewExtended extends SortView {

        private isOpened: boolean = false;

        public documentClick(e){
            let el: Vue | Element | Vue[] | Element[] = this.$el;
            let target = e.target;
            if ((el !== target) && !(el as Element).contains(target)) {
                this.isOpened = false
            }
        }

        created () {
            document.addEventListener('click', this.documentClick)
        }

        beforeDestroy () {
            document.removeEventListener('click', this.documentClick)
        }
    }
</script>
