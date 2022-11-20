import NoticeCard from "./NoticeCard.vue";
import RegularCard from "./RegularCard.vue";

const NOTICE_CARD_TAG = "notice-card";
const REGULAR_CARD_TAG = "regular-card";

export default {
  NoticeCard,
  RegularCard,
};

export function include(app: any): any {
  app.component(NOTICE_CARD_TAG, NoticeCard);
  app.component(REGULAR_CARD_TAG, RegularCard);
}
