/**
 * HuongMinri service data model
 * Two-funnel architecture: herbal_spa (Dưỡng sinh) + nail_services (Nails)
 *
 * - Names & descriptions are multilingual (vi default, en/zh/ko/de/fr fallbacks).
 * - Prices in VND (number). Display formatting handled by `formatPrice()`.
 * - Tag drives badge & visual hierarchy on the pricing UI.
 */

export type Locale = 'vi' | 'en' | 'zh' | 'ko' | 'de' | 'fr';
export type ServiceTag = 'popular' | 'best' | 'vip' | 'recommended';
export type ServiceGroup = 'herbal_spa' | 'nail_services';

export interface I18nText {
  vi: string;
  en: string;
  zh?: string;
  ko?: string;
  de?: string;
  fr?: string;
}

export interface Service {
  id: string;
  group: ServiceGroup;
  category: string;
  name: I18nText;
  description: I18nText;
  duration?: string;       // e.g. "45m", "60m"
  price: number;           // VND
  priceMax?: number;       // for ranges (e.g. 150k–180k)
  tag?: ServiceTag;
}

export interface CategoryDef {
  id: string;
  group: ServiceGroup;
  name: I18nText;
}

/* ============================================================
 * CATEGORIES
 * ============================================================ */
export const categories: CategoryDef[] = [
  // Herbal Spa
  { id: 'recommended', group: 'herbal_spa', name: { vi: 'Đề xuất cho bạn', en: 'Recommended', zh: '推荐服务', ko: '추천 서비스', de: 'Empfohlen', fr: 'Recommandés' }},
  { id: 'simple',      group: 'herbal_spa', name: { vi: 'Gội đơn giản',  en: 'Simple Wash', zh: '简单洗发', ko: '간편 샴푸', de: 'Einfache Wäsche', fr: 'Lavage simple' }},
  { id: 'basic',       group: 'herbal_spa', name: { vi: 'Gội cơ bản',     en: 'Basic Hair Wash', zh: '基础洗发', ko: '기본 샴푸', de: 'Basis-Haarwäsche', fr: 'Lavage de base' }},
  { id: 'combo',       group: 'herbal_spa', name: { vi: 'Combo Dưỡng sinh', en: 'Wellness Combos', zh: '养生套餐', ko: '웰니스 콤보', de: 'Wellness-Kombis', fr: 'Combos bien-être' }},
  { id: 'body',        group: 'herbal_spa', name: { vi: 'Body & Massage',   en: 'Body & Massage', zh: '身体按摩', ko: '바디 & 마사지', de: 'Körper & Massage', fr: 'Corps & Massage' }},
  { id: 'add_on',      group: 'herbal_spa', name: { vi: 'Topping thêm',    en: 'Add-ons', zh: '附加服务', ko: '추가 옵션', de: 'Extras', fr: 'Suppléments' }},

  // Nails
  { id: 'nail_basic',     group: 'nail_services', name: { vi: 'Nail cơ bản',  en: 'Basic Nail Care', zh: '基础美甲', ko: '기본 네일', de: 'Basis-Nagelpflege', fr: 'Soins de base' }},
  { id: 'nail_color',     group: 'nail_services', name: { vi: 'Sơn màu',       en: 'Gel Polish', zh: '甲油胶', ko: '젤 컬러', de: 'Gel-Lack', fr: 'Vernis gel' }},
  { id: 'nail_extension', group: 'nail_services', name: { vi: 'Đắp & Úp móng', en: 'Nail Extension', zh: '美甲延长', ko: '네일 연장', de: 'Nagelverlängerung', fr: 'Pose & extension' }},
  { id: 'nail_design',    group: 'nail_services', name: { vi: 'Thiết kế Nail', en: 'Nail Design', zh: '美甲设计', ko: '네일 디자인', de: 'Nageldesign', fr: 'Nail art' }},
  { id: 'foot_care',      group: 'nail_services', name: { vi: 'Chăm sóc chân', en: 'Foot Care', zh: '足部护理', ko: '풋 케어', de: 'Fußpflege', fr: 'Soins des pieds' }},
];

/* ============================================================
 * HERBAL SPA SERVICES (Dưỡng sinh)
 * Real HuongMinri menu — emotional, benefit-focused descriptions
 * ============================================================ */
const herbalSpa: Service[] = [
  // ---------- RECOMMENDED (top 4) ----------
  {
    id: 'hs-rec-109',
    group: 'herbal_spa', category: 'recommended', tag: 'popular',
    name: { vi: 'Gội thư giãn vai gáy', en: 'Relax Hair Wash + Shoulder Massage', zh: '颈肩放松洗发', ko: '어깨 릴렉스 샴푸', de: 'Entspannende Wäsche + Nackenmassage', fr: 'Lavage relax + nuque' },
    description: { vi: 'Xoa dịu mỏi vai gáy sau ngày dài', en: 'Melt away neck & shoulder tension', zh: '舒缓颈肩疲劳', ko: '하루의 피로를 녹여드려요', de: 'Löst Nacken- und Schulterverspannungen', fr: 'Soulage les tensions du cou' },
    duration: '45m', price: 109000,
  },
  {
    id: 'hs-rec-179',
    group: 'herbal_spa', category: 'recommended', tag: 'best',
    name: { vi: 'Gội thảo mộc dưỡng sinh', en: 'Herbal Wellness Wash', zh: '草本养生洗发', ko: '한방 웰니스 샴푸', de: 'Kräuter-Wellnesswäsche', fr: 'Lavage aux herbes' },
    description: { vi: 'Thảo mộc tự nhiên — sạch sâu, ngủ ngon', en: 'Natural herbs — deep clean, better sleep', zh: '天然草本，深层洁净，助眠', ko: '천연 한방으로 깊은 숙면', de: 'Natürliche Kräuter, tieferer Schlaf', fr: 'Herbes naturelles, meilleur sommeil' },
    duration: '60m', price: 179000,
  },
  {
    id: 'hs-rec-279',
    group: 'herbal_spa', category: 'recommended', tag: 'popular',
    name: { vi: 'Combo dưỡng sinh mọc tóc', en: 'Hair Growth Wellness Combo', zh: '养发促生套餐', ko: '발모 웰니스 콤보', de: 'Haarwachstum-Combo', fr: 'Combo pousse cheveux' },
    description: { vi: 'Kích thích nang tóc, giảm rụng rõ rệt', en: 'Stimulates follicles, reduces hair loss', zh: '激活毛囊，减少脱发', ko: '모낭 자극, 탈모 완화', de: 'Aktiviert Haarwurzeln, weniger Haarausfall', fr: 'Stimule les follicules' },
    duration: '75m', price: 279000,
  },
  {
    id: 'hs-rec-549',
    group: 'herbal_spa', category: 'recommended', tag: 'vip',
    name: { vi: 'VIP Dưỡng sinh toàn diện', en: 'VIP Total Wellness', zh: 'VIP 全方位养生', ko: 'VIP 토탈 웰니스', de: 'VIP Komplett-Wellness', fr: 'VIP bien-être total' },
    description: { vi: 'Trải nghiệm cao cấp 90 phút trọn vẹn', en: 'Premium 90-minute full experience', zh: '90分钟尊享体验', ko: '프리미엄 90분 풀코스', de: '90-min Premium-Erlebnis', fr: '90 min premium complet' },
    duration: '90m', price: 549000,
  },

  // ---------- SIMPLE ----------
  { id: 'hs-simple-59', group: 'herbal_spa', category: 'simple',
    name: { vi: 'Gội nhanh', en: 'Quick Wash', zh: '快速洗发', ko: '빠른 샴푸', de: 'Schnelle Wäsche', fr: 'Lavage rapide' },
    description: { vi: 'Sạch nhanh, gọn gàng', en: 'Clean & quick', zh: '快速清爽', ko: '빠르고 깔끔', de: 'Sauber & schnell', fr: 'Propre et rapide' },
    duration: '20m', price: 59000 },
  { id: 'hs-simple-70', group: 'herbal_spa', category: 'simple',
    name: { vi: 'Gội + sấy tạo kiểu nhẹ', en: 'Wash + Quick Style', zh: '洗发+造型', ko: '샴푸 + 스타일', de: 'Wäsche + Styling', fr: 'Lavage + coiffage' },
    description: { vi: 'Tóc gọn gàng đi làm', en: 'Office-ready in minutes', zh: '出门即可', ko: '바로 외출 가능', de: 'Bürofertig', fr: 'Prêt pour le bureau' },
    duration: '25m', price: 70000 },

  // ---------- BASIC ----------
  { id: 'hs-basic-99', group: 'herbal_spa', category: 'basic',
    name: { vi: 'Gội cơ bản dược liệu', en: 'Basic Herbal Wash', zh: '基础药草洗发', ko: '기본 한방 샴푸', de: 'Basis Kräuterwäsche', fr: 'Lavage herbal de base' },
    description: { vi: 'Bồ kết, sả chanh — tóc mềm thơm', en: 'Lemongrass & saponaria — soft, fresh', zh: '柠檬草，秀发柔顺', ko: '레몬그라스로 부드럽게', de: 'Zitronengras, weich & frisch', fr: 'Citronnelle, doux et frais' },
    duration: '30m', price: 99000 },
  { id: 'hs-basic-109', group: 'herbal_spa', category: 'basic',
    name: { vi: 'Gội + massage đầu', en: 'Wash + Head Massage', zh: '洗发+头部按摩', ko: '샴푸 + 두피 마사지', de: 'Wäsche + Kopfmassage', fr: 'Lavage + massage tête' },
    description: { vi: 'Thư giãn da đầu, giảm căng thẳng', en: 'Soothes scalp, melts stress', zh: '舒缓头皮，减压', ko: '두피 진정, 스트레스 완화', de: 'Beruhigt Kopfhaut', fr: 'Apaise le cuir chevelu' },
    duration: '40m', price: 109000 },
  { id: 'hs-basic-179', group: 'herbal_spa', category: 'basic',
    name: { vi: 'Gội thảo mộc nâng cao', en: 'Premium Herbal Wash', zh: '高级药草洗发', ko: '프리미엄 한방 샴푸', de: 'Premium Kräuterwäsche', fr: 'Lavage premium aux herbes' },
    description: { vi: 'Công thức thảo mộc đậm đặc', en: 'Concentrated herbal formula', zh: '浓缩草本配方', ko: '농축 한방 포뮬러', de: 'Konzentrierte Formel', fr: 'Formule concentrée' },
    duration: '55m', price: 179000 },

  // ---------- COMBO ----------
  { id: 'hs-combo-219', group: 'herbal_spa', category: 'combo',
    name: { vi: 'Combo gội + cổ vai gáy', en: 'Wash + Neck-Shoulder Combo', zh: '洗发+颈肩套餐', ko: '샴푸 + 목어깨 콤보', de: 'Wäsche + Nacken-Schulter', fr: 'Lavage + cou-épaule' },
    description: { vi: 'Đôi cánh thư giãn cho dân văn phòng', en: 'Office wellness essential', zh: '上班族必选', ko: '직장인 필수', de: 'Büro-Wellness', fr: 'Essentiel bureau' },
    duration: '60m', price: 219000 },
  { id: 'hs-combo-259', group: 'herbal_spa', category: 'combo',
    name: { vi: 'Combo gội + lưng + chân', en: 'Wash + Back + Leg Combo', zh: '洗发+背腿套餐', ko: '샴푸 + 등 + 다리', de: 'Wäsche + Rücken + Beine', fr: 'Lavage + dos + jambes' },
    description: { vi: 'Tan biến mệt mỏi toàn thân', en: 'Whole-body tension relief', zh: '全身舒缓', ko: '전신 피로 해소', de: 'Ganzkörper-Entspannung', fr: 'Détente corps entier' },
    duration: '70m', price: 259000 },
  { id: 'hs-combo-279', group: 'herbal_spa', category: 'combo', tag: 'popular',
    name: { vi: 'Combo dưỡng tóc mọc khỏe', en: 'Hair Growth Combo', zh: '养发套餐', ko: '발모 콤보', de: 'Haarwachstum-Combo', fr: 'Combo pousse' },
    description: { vi: 'Tinh dầu quý kích thích mọc tóc', en: 'Premium oils stimulate growth', zh: '精油促生发', ko: '프리미엄 오일로 모발 성장', de: 'Premium-Öle für Wachstum', fr: 'Huiles premium' },
    duration: '75m', price: 279000 },
  { id: 'hs-combo-399', group: 'herbal_spa', category: 'combo',
    name: { vi: 'Combo dưỡng sinh cao cấp', en: 'Premium Wellness Combo', zh: '高级养生套餐', ko: '프리미엄 웰니스 콤보', de: 'Premium Wellness', fr: 'Combo bien-être premium' },
    description: { vi: 'Trị liệu thảo mộc + massage chuyên sâu', en: 'Herbal therapy + deep massage', zh: '草本疗法+深层按摩', ko: '한방 + 딥 마사지', de: 'Kräuter + Tiefenmassage', fr: 'Herbes + massage profond' },
    duration: '85m', price: 399000 },
  { id: 'hs-combo-549', group: 'herbal_spa', category: 'combo', tag: 'vip',
    name: { vi: 'Combo VIP dưỡng sinh trọn vẹn', en: 'VIP Total Wellness Combo', zh: 'VIP全方位套餐', ko: 'VIP 풀 웰니스', de: 'VIP Komplett', fr: 'VIP bien-être total' },
    description: { vi: '90 phút thượng hạng — hồi sinh năng lượng', en: '90-minute restorative experience', zh: '90分钟恢复能量', ko: '90분 에너지 충전', de: '90 min Erholung', fr: '90 min de régénération' },
    duration: '90m', price: 549000 },

  // ---------- BODY ----------
  { id: 'hs-body-80a', group: 'herbal_spa', category: 'body',
    name: { vi: 'Massage tay 30p', en: 'Hand Massage 30m', zh: '手部按摩30分', ko: '핸드 마사지 30분', de: 'Handmassage 30m', fr: 'Massage mains 30m' },
    description: { vi: 'Đôi tay nhẹ nhõm, hết tê mỏi', en: 'Relieves wrist & hand tension', zh: '舒缓手腕', ko: '손목 피로 해소', de: 'Löst Handverspannungen', fr: 'Soulage poignets' },
    duration: '30m', price: 80000 },
  { id: 'hs-body-80b', group: 'herbal_spa', category: 'body',
    name: { vi: 'Massage chân 30p', en: 'Foot Massage 30m', zh: '足部按摩30分', ko: '풋 마사지 30분', de: 'Fußmassage 30m', fr: 'Massage pieds 30m' },
    description: { vi: 'Đôi chân nhẹ tênh, máu huyết lưu thông', en: 'Boost circulation, lighter feet', zh: '促进循环', ko: '혈액순환 촉진', de: 'Fördert Durchblutung', fr: 'Active la circulation' },
    duration: '30m', price: 80000 },
  { id: 'hs-body-159', group: 'herbal_spa', category: 'body',
    name: { vi: 'Massage cổ vai gáy', en: 'Neck-Shoulder Massage', zh: '颈肩按摩', ko: '목어깨 마사지', de: 'Nacken-Schulter Massage', fr: 'Massage cou-épaule' },
    description: { vi: 'Tan ngay mỏi văn phòng', en: 'Office tension gone', zh: '消除办公疲劳', ko: '직장인 통증 해소', de: 'Büroverspannungen weg', fr: 'Adieu tensions bureau' },
    duration: '45m', price: 159000 },
  { id: 'hs-body-199', group: 'herbal_spa', category: 'body',
    name: { vi: 'Massage lưng', en: 'Back Massage', zh: '背部按摩', ko: '등 마사지', de: 'Rückenmassage', fr: 'Massage dos' },
    description: { vi: 'Cột sống thẳng, đau mỏi tan biến', en: 'Realigns spine, eases aches', zh: '舒缓背痛', ko: '척추 정렬, 통증 완화', de: 'Lindert Rückenschmerzen', fr: 'Soulage le dos' },
    duration: '50m', price: 199000 },
  { id: 'hs-body-279', group: 'herbal_spa', category: 'body',
    name: { vi: 'Massage body 60p', en: 'Full Body Massage 60m', zh: '全身按摩60分', ko: '전신 마사지 60분', de: 'Ganzkörpermassage 60m', fr: 'Massage corps 60m' },
    description: { vi: 'Tái tạo năng lượng toàn thân', en: 'Whole-body energy reset', zh: '全身能量焕新', ko: '전신 에너지 리셋', de: 'Ganzkörper-Energie', fr: 'Énergie globale' },
    duration: '60m', price: 279000 },
  { id: 'hs-body-289', group: 'herbal_spa', category: 'body',
    name: { vi: 'Massage body thảo mộc', en: 'Herbal Body Massage', zh: '草本全身按摩', ko: '한방 전신 마사지', de: 'Kräuter-Ganzkörper', fr: 'Massage corps aux herbes' },
    description: { vi: 'Túi thảo mộc nóng — sâu, ấm, dễ chịu', en: 'Warm herbal pouch — deep & cozy', zh: '热草本袋', ko: '따뜻한 한방 파우치', de: 'Warmer Kräuterbeutel', fr: 'Sachet aux herbes chaud' },
    duration: '70m', price: 289000 },
  { id: 'hs-body-320', group: 'herbal_spa', category: 'body',
    name: { vi: 'Massage đá nóng', en: 'Hot Stone Massage', zh: '热石按摩', ko: '핫스톤 마사지', de: 'Hot-Stone-Massage', fr: 'Massage pierres chaudes' },
    description: { vi: 'Đá nóng làm tan stress sâu', en: 'Deep heat melts stress', zh: '深层放松', ko: '깊은 이완', de: 'Tiefe Entspannung', fr: 'Détente profonde' },
    duration: '75m', price: 320000 },
  { id: 'hs-body-350', group: 'herbal_spa', category: 'body',
    name: { vi: 'Massage trị liệu chuyên sâu', en: 'Deep Therapeutic Massage', zh: '深层治疗按摩', ko: '딥 테라피 마사지', de: 'Tiefen-Therapiemassage', fr: 'Massage thérapeutique' },
    description: { vi: 'Trị mỏi vai, đau lưng kéo dài', en: 'Targets chronic tension', zh: '针对慢性疼痛', ko: '만성 통증 케어', de: 'Bei chronischen Schmerzen', fr: 'Tensions chroniques' },
    duration: '80m', price: 350000 },
  { id: 'hs-body-400', group: 'herbal_spa', category: 'body',
    name: { vi: 'Massage body VIP', en: 'VIP Body Massage', zh: 'VIP全身按摩', ko: 'VIP 바디 마사지', de: 'VIP Körpermassage', fr: 'Massage corps VIP' },
    description: { vi: 'Trải nghiệm 5 sao tại HuongMinri', en: '5-star experience', zh: '五星级体验', ko: '5성급 경험', de: '5-Sterne-Erlebnis', fr: 'Expérience 5 étoiles' },
    duration: '90m', price: 400000 },

  // ---------- ADD-ON ----------
  { id: 'hs-addon-mask',   group: 'herbal_spa', category: 'add_on',
    name: { vi: 'Mặt nạ dưỡng tóc', en: 'Hair Mask Treatment', zh: '发膜护理', ko: '헤어 마스크', de: 'Haarmaske', fr: 'Masque cheveux' },
    description: { vi: 'Tóc bóng mượt như salon', en: 'Salon-shine finish', zh: '沙龙级光泽', ko: '살롱 광채', de: 'Salon-Glanz', fr: 'Brillance salon' },
    price: 50000 },
  { id: 'hs-addon-scrub',  group: 'herbal_spa', category: 'add_on',
    name: { vi: 'Tẩy tế bào da đầu', en: 'Scalp Scrub', zh: '头皮去角质', ko: '두피 스크럽', de: 'Kopfhaut-Peeling', fr: 'Gommage cuir chevelu' },
    description: { vi: 'Sạch sâu, kích thích tuần hoàn', en: 'Deep clean, boosts circulation', zh: '深层清洁', ko: '딥 클렌징', de: 'Tiefenreinigung', fr: 'Nettoyage profond' },
    price: 60000 },
  { id: 'hs-addon-serum',  group: 'herbal_spa', category: 'add_on',
    name: { vi: 'Serum mọc tóc', en: 'Hair Growth Serum', zh: '生发精华', ko: '발모 세럼', de: 'Haarwuchs-Serum', fr: 'Sérum repousse' },
    description: { vi: 'Bổ sung dưỡng chất nang tóc', en: 'Nourishes follicles', zh: '滋养毛囊', ko: '모낭 영양', de: 'Nährt Follikel', fr: 'Nourrit follicules' },
    price: 80000 },
  { id: 'hs-addon-steam',  group: 'herbal_spa', category: 'add_on',
    name: { vi: 'Xông thảo mộc', en: 'Herbal Steam', zh: '草本蒸汽', ko: '한방 스팀', de: 'Kräuter-Dampf', fr: 'Vapeur aux herbes' },
    description: { vi: 'Lỗ chân lông sạch sâu, thư giãn', en: 'Detox & relax', zh: '排毒放松', ko: '디톡스 & 릴렉스', de: 'Detox & Entspannung', fr: 'Détox & relax' },
    price: 70000 },
];

/* ============================================================
 * NAIL SERVICES — visual selling, premium Korean beauty
 * ============================================================ */
const nailServices: Service[] = [
  // ---------- BASIC ----------
  { id: 'n-basic-cutda', group: 'nail_services', category: 'nail_basic',
    name: { vi: 'Cắt da — Dũa form', en: 'Cuticle Trim + Filing', zh: '修甲皮+修形', ko: '큐티클 + 파일링', de: 'Nagelhaut + Feilen', fr: 'Cuticules + limage' },
    description: { vi: 'Móng gọn, sạch, sẵn sàng làm đẹp', en: 'Clean canvas, ready to polish', zh: '干净基底', ko: '깔끔한 베이스', de: 'Saubere Basis', fr: 'Base propre' },
    price: 40000 },
  { id: 'n-basic-dua', group: 'nail_services', category: 'nail_basic',
    name: { vi: 'Dũa form móng', en: 'Nail Filing', zh: '修甲形', ko: '네일 파일링', de: 'Nagelfeilen', fr: 'Limage' },
    description: { vi: 'Định hình móng đẹp, đều', en: 'Even, beautiful shape', zh: '均匀美形', ko: '균일한 모양', de: 'Gleichmäßige Form', fr: 'Forme uniforme' },
    price: 10000 },
  { id: 'n-basic-thaogel', group: 'nail_services', category: 'nail_basic',
    name: { vi: 'Tháo gel cũ', en: 'Gel Removal', zh: '卸甲胶', ko: '젤 제거', de: 'Gel entfernen', fr: 'Retrait gel' },
    description: { vi: 'Tháo nhẹ nhàng, không hại móng', en: 'Gentle, no damage', zh: '温和不伤甲', ko: '손톱 보호', de: 'Sanft, ohne Schäden', fr: 'Doux, sans abîmer' },
    price: 20000 },

  // ---------- COLOR ----------
  { id: 'n-color-thach', group: 'nail_services', category: 'nail_color', tag: 'popular',
    name: { vi: 'Sơn gel thạch', en: 'Jelly Gel Polish', zh: '果冻甲油胶', ko: '젤리 젤', de: 'Jelly-Gel', fr: 'Vernis gel jelly' },
    description: { vi: 'Trong veo, trendy Hàn Quốc', en: 'Crystal-clear K-beauty trend', zh: '韩系透明流行', ko: '한국 트렌드', de: 'K-Beauty Trend', fr: 'Tendance K-beauty' },
    price: 100000 },
  { id: 'n-color-meomeo', group: 'nail_services', category: 'nail_color', tag: 'best',
    name: { vi: 'Sơn gel mắt mèo', en: 'Cat-Eye Gel', zh: '猫眼甲油', ko: '캣아이 젤', de: 'Cat-Eye-Gel', fr: 'Gel œil de chat' },
    description: { vi: 'Lấp lánh, sang chảnh', en: 'Shimmer, luxurious', zh: '闪耀奢华', ko: '럭셔리 글리터', de: 'Schimmernd & luxuriös', fr: 'Scintillant et luxueux' },
    price: 150000 },

  // ---------- EXTENSION ----------
  { id: 'n-ext-up', group: 'nail_services', category: 'nail_extension',
    name: { vi: 'Úp móng', en: 'Press-On Nails', zh: '贴甲片', ko: '팁 부착', de: 'Aufstecknägel', fr: 'Pose capsules' },
    description: { vi: 'Móng dài đẹp trong 30 phút', en: 'Long & pretty in 30m', zh: '30分钟变长', ko: '30분만에 길게', de: 'In 30 min lang', fr: 'Longues en 30 min' },
    price: 100000 },
  { id: 'n-ext-upgel', group: 'nail_services', category: 'nail_extension',
    name: { vi: 'Úp móng gel', en: 'Gel Tip Extension', zh: '凝胶贴甲片', ko: '젤 팁 연장', de: 'Gel-Tip-Verlängerung', fr: 'Extension gel' },
    description: { vi: 'Bền chắc, tự nhiên hơn', en: 'Stronger & natural-looking', zh: '更耐用自然', ko: '내구성 + 자연스러움', de: 'Stärker & natürlich', fr: 'Plus durable' },
    price: 150000 },
  { id: 'n-ext-dapgel', group: 'nail_services', category: 'nail_extension', tag: 'popular',
    name: { vi: 'Đắp gel móng thật', en: 'Builder Gel on Natural Nails', zh: '真甲加固凝胶', ko: '하드젤 보강', de: 'Aufbaugel', fr: 'Gel de construction' },
    description: { vi: 'Cứng móng, dài đẹp tự nhiên', en: 'Reinforced, naturally long', zh: '加固自然', ko: '강화된 자연 네일', de: 'Verstärkt natürlich', fr: 'Renforcé naturel' },
    price: 150000, priceMax: 180000 },
  { id: 'n-ext-dapbot', group: 'nail_services', category: 'nail_extension', tag: 'best',
    name: { vi: 'Đắp bột / gel kéo dài', en: 'Acrylic / Gel Extension', zh: '甲粉/凝胶延长', ko: '아크릴 / 젤 연장', de: 'Acryl / Gel', fr: 'Acrylique / Gel' },
    description: { vi: 'Dáng móng hoàn hảo, bền 3-4 tuần', en: 'Perfect shape, lasts 3-4 weeks', zh: '3-4周持久', ko: '3-4주 지속', de: '3-4 Wochen Halt', fr: 'Tient 3-4 semaines' },
    price: 200000, priceMax: 250000 },

  // ---------- DESIGN ----------
  { id: 'n-design-cung', group: 'nail_services', category: 'nail_design',
    name: { vi: 'Cứng móng', en: 'Nail Strengthening', zh: '加固甲', ko: '네일 강화', de: 'Nagelhärtung', fr: 'Durcisseur' },
    description: { vi: 'Bảo vệ móng yếu', en: 'Protects weak nails', zh: '保护脆弱指甲', ko: '약한 손톱 보호', de: 'Schützt schwache Nägel', fr: 'Ongles fragiles' },
    price: 30000, priceMax: 70000 },
  { id: 'n-design-french', group: 'nail_services', category: 'nail_design',
    name: { vi: 'French đầu móng', en: 'French Tip', zh: '法式甲尖', ko: '프렌치 팁', de: 'French-Spitze', fr: 'French manucure' },
    description: { vi: 'Cổ điển không bao giờ lỗi mốt', en: 'Timeless classic', zh: '永恒经典', ko: '클래식', de: 'Zeitlos', fr: 'Intemporel' },
    price: 10000 },
  { id: 'n-design-da', group: 'nail_services', category: 'nail_design',
    name: { vi: 'Đính đá', en: 'Rhinestone Decoration', zh: '镶钻', ko: '큐빅 장식', de: 'Strass', fr: 'Strass' },
    description: { vi: 'Lấp lánh từng chi tiết', en: 'Sparkle in every detail', zh: '细节闪耀', ko: '디테일 반짝', de: 'Funkelnde Details', fr: 'Détails brillants' },
    price: 1000, priceMax: 10000 },
  { id: 'n-design-charm', group: 'nail_services', category: 'nail_design',
    name: { vi: 'Charm / đá khối', en: 'Charm / Statement Stone', zh: '吊饰/大宝石', ko: '참 / 스톤', de: 'Charm / Stein', fr: 'Charm / pierre' },
    description: { vi: 'Tạo điểm nhấn cá tính', en: 'Bold statement piece', zh: '个性焦点', ko: '포인트 강조', de: 'Eyecatcher', fr: 'Pièce signature' },
    price: 15000, priceMax: 45000 },
  { id: 'n-design-ve', group: 'nail_services', category: 'nail_design', tag: 'best',
    name: { vi: 'Vẽ Nail thủ công', en: 'Hand-Painted Nail Art', zh: '手绘美甲', ko: '핸드페인팅 네일', de: 'Handgemaltes Nageldesign', fr: 'Nail art peint main' },
    description: { vi: 'Tác phẩm độc bản trên mỗi ngón', en: 'Unique art on every nail', zh: '独一无二', ko: '유니크 아트', de: 'Einzigartige Kunst', fr: 'Art unique' },
    price: 10000, priceMax: 50000 },

  // ---------- FOOT CARE ----------
  { id: 'n-foot-120', group: 'nail_services', category: 'foot_care',
    name: { vi: 'Chà gót chân cơ bản', en: 'Basic Foot Scrub', zh: '基础足部去角质', ko: '기본 풋 스크럽', de: 'Basis-Fußpeeling', fr: 'Gommage pieds basique' },
    description: { vi: 'Gót chân mềm mịn', en: 'Soft, smooth heels', zh: '柔软光滑', ko: '부드러운 발', de: 'Weiche Fersen', fr: 'Talons doux' },
    price: 120000, priceMax: 150000 },
  { id: 'n-foot-200', group: 'nail_services', category: 'foot_care', tag: 'popular',
    name: { vi: 'Chà gót chân nâng cao', en: 'Advanced Foot Care', zh: '高级足部护理', ko: '어드밴스 풋케어', de: 'Erweiterte Fußpflege', fr: 'Soin pieds avancé' },
    description: { vi: 'Tẩy + ủ + dưỡng — gót như em bé', en: 'Scrub + mask + balm — baby-soft', zh: '婴儿般柔软', ko: '아기처럼 부드럽게', de: 'Babyzart', fr: 'Doux comme bébé' },
    price: 200000 },
  { id: 'n-foot-350', group: 'nail_services', category: 'foot_care', tag: 'vip',
    name: { vi: 'Chà gót chân VIP', en: 'VIP Foot Therapy', zh: 'VIP足疗', ko: 'VIP 풋 테라피', de: 'VIP Fußtherapie', fr: 'Soin pieds VIP' },
    description: { vi: 'Spa cho đôi chân — full thư giãn', en: 'Full foot spa experience', zh: '全套足部水疗', ko: '풀 풋 스파', de: 'Komplettes Fuß-Spa', fr: 'Spa pieds complet' },
    price: 350000 },
];

export const services: Service[] = [...herbalSpa, ...nailServices];

/* ============================================================
 * HELPERS
 * ============================================================ */
export function formatPrice(vnd: number): string {
  if (vnd >= 1000) {
    const k = vnd / 1000;
    return Number.isInteger(k) ? `${k}k` : `${k.toFixed(0)}k`;
  }
  return `${vnd}`;
}

export function formatPriceRange(s: Service): string {
  if (s.priceMax) return `${formatPrice(s.price)}–${formatPrice(s.priceMax)}`;
  return formatPrice(s.price);
}

export function tx(t: I18nText, lang: Locale): string {
  return t[lang] ?? t.en ?? t.vi;
}

export function servicesByGroup(group: ServiceGroup): Service[] {
  return services.filter((s) => s.group === group);
}

export function servicesByCategory(group: ServiceGroup, categoryId: string): Service[] {
  return services.filter((s) => s.group === group && s.category === categoryId);
}

export function categoriesByGroup(group: ServiceGroup): CategoryDef[] {
  return categories.filter((c) => c.group === group);
}

export function recommendedHerbalSpa(): Service[] {
  return servicesByCategory('herbal_spa', 'recommended');
}

/* ============================================================
 * COMBO SUGGESTIONS — cross-sell engine
 * ============================================================ */
export interface Combo {
  id: string;
  group: ServiceGroup;        // primary funnel
  name: I18nText;
  description: I18nText;
  pieces: string[];            // service ids
  originalPrice: number;
  comboPrice: number;
  badge?: I18nText;
}

export const combos: Combo[] = [
  {
    id: 'combo-relax',
    group: 'herbal_spa',
    name: { vi: 'Relax Combo', en: 'Relax Combo', zh: '放松套餐', ko: '릴렉스 콤보', de: 'Relax-Combo', fr: 'Combo relax' },
    description: { vi: 'Gội thư giãn 109k + Cắt da & dũa form 40k', en: '109k Wash + Basic Manicure', zh: '洗发+基础修甲', ko: '샴푸 + 기본 매니큐어', de: 'Wäsche + Basis-Maniküre', fr: 'Lavage + manucure' },
    pieces: ['hs-rec-109', 'n-basic-cutda'],
    originalPrice: 149000,
    comboPrice: 139000,
    badge: { vi: 'Tiết kiệm 10k', en: 'Save 10k', zh: '省10k', ko: '10k 할인', de: '10k sparen', fr: 'Économisez 10k' },
  },
  {
    id: 'combo-beauty',
    group: 'nail_services',
    name: { vi: 'Beauty Combo', en: 'Beauty Combo', zh: '美丽套餐', ko: '뷰티 콤보', de: 'Beauty-Combo', fr: 'Combo beauté' },
    description: { vi: 'Combo dưỡng tóc 279k + Sơn gel mắt mèo 150k', en: 'Hair Growth Combo + Cat-Eye Gel', zh: '养发+猫眼甲', ko: '헤어 콤보 + 캣아이', de: 'Haar-Combo + Cat-Eye', fr: 'Cheveux + œil de chat' },
    pieces: ['hs-rec-279', 'n-color-meomeo'],
    originalPrice: 429000,
    comboPrice: 399000,
    badge: { vi: 'Best Combo', en: 'Best Combo', zh: '最佳套餐', ko: '베스트 콤보', de: 'Top-Combo', fr: 'Top combo' },
  },
  {
    id: 'combo-vip',
    group: 'herbal_spa',
    name: { vi: 'VIP Combo', en: 'VIP Combo', zh: 'VIP套餐', ko: 'VIP 콤보', de: 'VIP-Combo', fr: 'Combo VIP' },
    description: { vi: 'VIP Dưỡng sinh 549k + Foot Care VIP 350k', en: 'VIP Wellness + VIP Foot Care', zh: 'VIP养生+VIP足疗', ko: 'VIP 웰니스 + VIP 풋케어', de: 'VIP Wellness + Fuß', fr: 'VIP bien-être + pieds' },
    pieces: ['hs-rec-549', 'n-foot-350'],
    originalPrice: 899000,
    comboPrice: 829000,
    badge: { vi: 'Premium —70k', en: 'Premium −70k', zh: 'Premium省70k', ko: '프리미엄 −70k', de: 'Premium −70k', fr: 'Premium −70k' },
  },
];
