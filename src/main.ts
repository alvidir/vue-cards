import NoticeCard from "./NoticeCard.vue";

const NOTICE_CARD_TAG = "notice-card";

export default {
  NoticeCard,
};

export function include(app: any): any {
  app.component(NOTICE_CARD_TAG, NoticeCard);
}
