import { App } from "vue";
import RegularCard from "./RegularCard.vue";
import NoticeCard from "./NoticeCard.vue";
import DialogCard from "./DialogCard.vue";

function include(app: App): App {
  return app
    .component("regular-card", RegularCard)
    .component("notice-card", NoticeCard)
    .component("dialog-card", DialogCard);
}

export default include;
export { RegularCard, NoticeCard, DialogCard };
