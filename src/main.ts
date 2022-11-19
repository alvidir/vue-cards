import NoticeCard from "./NoticeCard.vue";
import FloatingCard from "./FloatingCard.vue";

const NOTICE_CARD_TAG = "notice-card";
const FLOATING_CARD_TAG = "floating-card";

export default {
  NoticeCard,
  FloatingCard,
};

export function include(app: any): any {
  app.component(NOTICE_CARD_TAG, NoticeCard);
  app.component(FLOATING_CARD_TAG, FloatingCard);
}
