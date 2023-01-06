import { App } from "vue";
import NoticeCard from "./NoticeCard.vue";
import RegularCard from "./RegularCard.vue";
import DialogCard from "./DialogCard.vue";

const NOTICE_CARD_TAG = "notice-card";
const REGULAR_CARD_TAG = "regular-card";
const DIALOG_CARD_TAG = "dialog-card";

function include(app: App): App {
  return app
    .component(NOTICE_CARD_TAG, NoticeCard)
    .component(REGULAR_CARD_TAG, RegularCard)
    .component(DIALOG_CARD_TAG, DialogCard);
}

export default include;
export { NoticeCard, RegularCard, DialogCard };
