import type { I18nText } from './services';

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: I18nText;
  service?: string;
}

export const reviews: Review[] = [
  {
    id: 'r1', name: 'Linh N.', rating: 5, service: 'Combo 279k',
    text: {
      vi: 'Mình ngủ ngon hơn hẳn sau buổi gội thảo mộc. Không gian thơm, nhân viên nhẹ nhàng.',
      en: 'I sleep so much better after the herbal wash. Calm space, gentle staff.',
      zh: '草本洗发后睡眠改善很多，环境芬芳，服务温柔。',
      ko: '한방 샴푸 후 잠이 정말 잘 와요. 향기로운 공간과 부드러운 직원.',
      de: 'Nach der Kräuter-Wäsche schlafe ich viel besser. Ruhige Atmosphäre.',
      fr: 'Je dors bien mieux après le lavage aux herbes. Espace paisible.',
    },
  },
  {
    id: 'r2', name: 'Hương T.', rating: 5, service: 'Cat-Eye Gel',
    text: {
      vi: 'Móng đẹp xuất sắc, lấp lánh đúng kiểu Hàn. Sẽ quay lại lần nữa!',
      en: 'Stunning nails, that K-beauty shimmer. Coming back for sure!',
      zh: '美甲超美，韩系闪耀！一定再来。',
      ko: '네일이 완전 예뻐요. 한국 스타일 그대로! 또 갈 거예요.',
      de: 'Wundervolle Nägel — echtes K-Beauty-Funkeln!',
      fr: 'Ongles magnifiques, brillance K-beauty. Je reviens !',
    },
  },
  {
    id: 'r3', name: 'Mai V.', rating: 5, service: 'VIP 549k',
    text: {
      vi: 'Combo VIP đáng từng đồng. 90 phút như reset cả tuần làm việc.',
      en: 'The VIP combo is worth every penny. 90 minutes that reset my week.',
      zh: 'VIP套餐物超所值，90分钟重启一整周。',
      ko: 'VIP 콤보 정말 가치 있어요. 90분이면 한 주가 리셋돼요.',
      de: 'Das VIP-Combo ist jeden Cent wert. 90 min, die meine Woche zurücksetzen.',
      fr: 'Le combo VIP vaut chaque centime. 90 min qui réinitialisent ma semaine.',
    },
  },
  {
    id: 'r4', name: 'Trang P.', rating: 5, service: 'Foot Care VIP',
    text: {
      vi: 'Gót chân mềm như em bé, ngồi spa chân được nâng niu cực thoải mái.',
      en: 'Baby-soft heels and the most pampering foot spa I have tried.',
      zh: '脚跟柔软如婴儿，足疗体验非常奢华。',
      ko: '발이 아기처럼 부드러워졌어요. 풋스파 최고!',
      de: 'Fersen babyzart, das beste Fuß-Spa-Erlebnis.',
      fr: 'Talons doux comme bébé, le meilleur soin des pieds.',
    },
  },
  {
    id: 'r5', name: 'An K.', rating: 5, service: 'Massage 199k',
    text: {
      vi: 'Đau lưng văn phòng tan biến luôn. Sẽ rủ cả công ty đi.',
      en: 'My office back pain is gone. Bringing the whole team next time.',
      zh: '办公室腰痛全消，下次带同事一起来。',
      ko: '직장 허리 통증이 다 사라졌어요. 다음엔 동료들과 함께!',
      de: 'Mein Büro-Rückenschmerz ist weg. Beim nächsten Mal das ganze Team.',
      fr: 'Plus de mal de dos de bureau. La prochaine fois, toute l\'équipe.',
    },
  },
];
