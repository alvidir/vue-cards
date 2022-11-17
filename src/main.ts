import NoticeCard from "./NoticeCard.vue";
import BubbleCard from "./BubbleCard.vue";

const NOTICE_CARD_TAG = "notice-card";
const BUBBLE_CARD_TAG = "bubble-card";

export default {
  NoticeCard,
  BubbleCard,
};

export function include(app: any): any {
  app.component(NOTICE_CARD_TAG, NoticeCard);
  app.component(BUBBLE_CARD_TAG, BubbleCard);
}
