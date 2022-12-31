import { App } from "vue";
import NoticeCard from "./NoticeCard.vue";
import RegularCard from "./RegularCard.vue";

const NOTICE_CARD_TAG = "notice-card";
const REGULAR_CARD_TAG = "regular-card";

function include(app: App): App {
  return app
    .component(NOTICE_CARD_TAG, NoticeCard)
    .component(REGULAR_CARD_TAG, RegularCard);
}

export default include;
export { NoticeCard, RegularCard };
