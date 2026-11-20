// ─────────────────────────────────────────────────────────────
// 행사 콘텐츠는 이 파일만 수정하면 페이지 전체에 반영됩니다.
// 출처: 「명품스터디클럽 연합 학술 박람회 운영계획(안)」
// ─────────────────────────────────────────────────────────────

export const event = {
  name: "명품스터디클럽 연합 학술 박람회",
  nameEn: "Joint Academic Fair",
  tagline: "연구와 프로젝트의 성과를 한 공간에서 나누고, 다음 협업으로 잇는 하루",
  date: "2027. 1. 9. (토)",
  dateISO: "2027-01-09T11:30:00+09:00",
  time: "11:30 – 18:30",
  venue: "성균관대학교 교내 행사 공간",
  venueNote: "장소 추후 확정",
  // 신청 링크가 생기면 URL을 넣으세요. 비어 있으면 버튼이 "오픈 예정"으로 표시됩니다.
  registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScoaHtgIsFvj11JPM0bBA5bQxIPmUDmy3v0KME2skct1AIWeA/viewform",
  contactEmail: "",
};

// ── 참관 신청 폼 (사이트 팝업 → 구글 폼으로 전송) ───────────────
// action: 구글 폼 신청 링크의 .../viewform 을 .../formResponse 로 바꾼 주소
// entries: 각 문항의 entry.숫자 (docs/create_form.gs 의 printEntryIds 실행 결과)
// 모든 값이 채워지기 전에는 "미리보기"로 동작하며 실제로 전송하지 않습니다.
export const registerForm = {
  action: "https://docs.google.com/forms/d/e/1FAIpQLScoaHtgIsFvj11JPM0bBA5bQxIPmUDmy3v0KME2skct1AIWeA/formResponse",
  entries: {
    consent: "entry.823503321", // 개인정보 수집·이용 동의
    name: "entry.201651801", // 이름
    email: "entry.1109387544", // 이메일
    department: "entry.1693772254", // 학과
    memo: "entry.1682746841", // 문의·요청 사항
  },
  // 개인정보 보유 기간 (확정 후 입력, 예: "행사 종료 후 30일 이내 파기")
  privacyRetention: "",
};

export const stats = [
  { value: "3", label: "공동 운영 학회" },
  { value: "9", label: "우수 발표팀 (Oral)" },
  { value: "2회", label: "포스터 발표 세션" }
];

export const purposes = [
  {
    title: "학술 교류의 장",
    body: "명품스터디클럽을 중심으로 교내 학술단체의 연구·프로젝트 성과를 한 공간에서 공유하며, 성균관대학교 양 캠퍼스를 아우르는 교류의 장을 만듭니다.",
  },
  {
    title: "통합형 성과발표회",
    body: "단체별로 따로 열던 성과발표회를 포스터, 구두 발표, 키노트, 네트워킹이 결합된 하나의 행사로 확장합니다.",
  },
  {
    title: "융합과 후속 협업",
    body: "서로 다른 전공과 학회 사이에서 연구 주제와 기술의 접점을 찾고, 공동 프로젝트와 융합 연구로 이어질 기회를 마련합니다.",
  },
];

export type ProgramKind = "stage" | "oral" | "poster" | "break" | "network";

export interface ProgramItem {
  start: string;
  end: string;
  title: string;
  who: string;
  note: string;
  kind: ProgramKind;
}

export const program: ProgramItem[] = [
  { start: "11:30", end: "12:00", title: "참가 등록 및 부스 준비", who: "전체 참가 단체", note: "포스터·전시물 최종 점검", kind: "break" },
  { start: "12:00", end: "12:10", title: "행사 오프닝", who: "주요 인사 / 운영진", note: "개회 인사 및 운영 안내", kind: "stage" },
  { start: "12:10", end: "12:40", title: "키노트", who: "외부 연사", note: "학술 활동 및 융합 연구 방향", kind: "stage" },
  { start: "12:40", end: "12:55", title: "단체별 소개", who: "3개 참여 단체", note: "키노트와 연계하여 진행", kind: "stage" },
  { start: "12:55", end: "14:15", title: "우수 발표회 (Oral) 1", who: "우수 성과 3팀", note: "팀당 20분 발표·질의응답", kind: "oral" },
  { start: "14:15", end: "14:30", title: "휴식 및 자유 관람", who: "전체", note: "부스 이동 및 자유 질의응답", kind: "break" },
  { start: "14:30", end: "14:45", title: "소규모 발표회 (Poster) 1", who: "전체 부스", note: "포스터 발표 1회차", kind: "poster" },
  { start: "14:45", end: "16:05", title: "우수 발표회 (Oral) 2", who: "우수 성과 3팀", note: "팀당 20분 발표·질의응답", kind: "oral" },
  { start: "16:05", end: "16:30", title: "소규모 발표회 (Poster) 2 및 인기상 투표", who: "전체 부스", note: "포스터 발표 2회차", kind: "poster" },
  { start: "16:30", end: "17:50", title: "우수 발표회 (Oral) 3", who: "우수 성과 3팀", note: "팀당 20분 발표·질의응답", kind: "oral" },
  { start: "17:50", end: "18:00", title: "시상 및 전체 랩업", who: "운영진", note: "우수 성과 공유·후속 협업 안내", kind: "stage" },
  { start: "18:00", end: "18:30", title: "네트워킹 및 식사", who: "전체 참가자", note: "단체 간 교류 및 협업 논의", kind: "network" },
];

// 메인 무대와 병행되는 상시 운영 트랙
export const boothTrack = {
  start: "12:10",
  end: "17:50",
  title: "성과발표회 · 포스터 부스 상시 운영",
  note: "메인 프로그램과 병행 — 언제든 부스를 자유롭게 둘러보세요.",
};

export const formats = [
  {
    tag: "Exhibition",
    title: "성과발표회",
    points: [
      "참여 단체가 한 학기 동안 수행한 학술 활동 성과를 통합 공개",
      "단체별 지정 부스에 프로젝트 포스터 게시, 필요 시 프로토타입·영상 전시",
      "메인 프로그램이 진행되는 동안에도 부스 상시 운영",
    ],
  },
  {
    tag: "Oral",
    title: "우수 발표회",
    points: [
      "각 단체 추천 후보 중 완성도·학술성·확장성 기준으로 9팀 사전 선정",
      "팀당 발표 15분 + 질의응답 5분, 3팀씩 3개 세션",
      "문제 정의 · 핵심 결과 · 후속 연구 방향 중심 발표",
    ],
  },
  {
    tag: "Keynote",
    title: "키노트",
    points: [
      "외부 연사가 학부 연구와 산업·학술 현장의 연결 방향 제시",
      "연구 문화, 진로, 융합 협업 관점의 메시지",
      "키노트에 이어 3개 단체 소개 진행",
    ],
  },
  {
    tag: "Poster",
    title: "소규모 발표회",
    points: [
      "전체 부스가 동시에 진행, 행사 중 총 2회 반복",
      "부스 담당자가 핵심 성과를 7~10분 설명 후 자유 질의응답",
      "1회차에 놓친 발표는 2회차에 참여 가능",
    ],
  },
  {
    tag: "Networking",
    title: "네트워킹",
    points: [
      "공식 발표 종료 후 18:00–18:30 참가 단체 식사 자리",
      "공동 연구 주제, 기술 교류, 대회·프로젝트 협업 가능성 논의",
    ],
  },
];

export interface Club {
  id: string;
  name: string;
  fullName: string;
  affiliation: string;
  field: string;
  description: string;
  url?: string;
  // public/logos/ 안의 파일명. 없으면 학회 이름 글자로 대체됩니다.
  logo?: string;
  // cover: 정사각형 로고를 원에 꽉 채움 / contain: 투명 배경 로고를 흰 원 안에 맞춤
  logoFit?: "cover" | "contain";
}

export const clubs: Club[] = [
  {
    id: "skkai",
    name: "SKKAI",
    fullName: "성균관대학교 인공지능학회",
    affiliation: "성균관대학교",
    field: "인공지능",
    description: "학회 소개 문구가 들어갈 자리입니다. 주요 활동과 연구 분야를 2~3문장으로 적어 주세요.",
    logo: "skkai.jpg",
    logoFit: "cover",
  },
  {
    id: "brain",
    name: "brAIn",
    fullName: "글로벌융합학부 인공지능학회",
    affiliation: "성균관대학교 글로벌융합학부",
    field: "인공지능",
    description: "학회 소개 문구가 들어갈 자리입니다. 주요 활동과 연구 분야를 2~3문장으로 적어 주세요.",
    logo: "brain.jpg",
    logoFit: "cover",
  },
  {
    id: "dscover",
    name: "DScover",
    fullName: "글로벌융합학부 데이터분석학회",
    affiliation: "성균관대학교 글로벌융합학부",
    field: "데이터 분석",
    description: "학회 소개 문구가 들어갈 자리입니다. 주요 활동과 연구 분야를 2~3문장으로 적어 주세요.",
    logo: "dscover.png",
    logoFit: "contain",
  },
];

// ── 발표 프로젝트 ───────────────────────────────────────────
// 선정이 끝나면 아래 배열을 채우세요. 비어 있으면 "추후 공개"로 표시됩니다.
export interface OralTeam {
  session: 1 | 2 | 3;
  title: string;
  club: string; // clubs[].id
  members?: string;
  summary?: string;
}

export const oralSessions = [
  { session: 1, time: "12:55 – 14:15" },
  { session: 2, time: "14:45 – 16:05" },
  { session: 3, time: "16:30 – 17:50" },
] as const;

export const oralTeams: OralTeam[] = [
  // { session: 1, title: "프로젝트 제목", club: "skkai", members: "홍길동 외 3명", summary: "한 줄 요약" },
];

export interface Booth {
  no: string; // 부스 번호 (예: "A1")
  title: string;
  club: string; // clubs[].id
  field?: string;
  oral?: boolean; // 우수 발표팀 여부
}

export const booths: Booth[] = [
  // { no: "A1", title: "프로젝트 제목", club: "dscover", field: "추천 시스템" },
];

export const boothGuide = [
  {
    title: "분야별 배치",
    body: "유사한 연구 분야의 단체를 인접 배치해 동선을 단순화하고, 분야가 만나는 경계에는 융합형 프로젝트를 배치합니다.",
  },
  {
    title: "포스터 발표 시간",
    body: "1회차 14:30–14:45, 2회차 16:05–16:30. 전체 부스가 동시에 발표하니 관심 분야를 골라 이동하세요.",
  },
  {
    title: "인기상 투표",
    body: "자기 소속 단체를 제외한 포스터에 투표합니다. 포스터 참여 학회별 1팀씩, 총 3팀의 인기상을 선정합니다.",
  },
  {
    title: "자유로운 질의응답",
    body: "발표자와 참관자가 수평적으로 묻고 토론하는 학생 주도형 행사입니다. 부스에서 편하게 질문해 주세요.",
  },
];

export const faqs = [
  {
    q: "누가 참관할 수 있나요?",
    a: "참관 대상과 신청 방법은 확정되는 대로 이 페이지에 안내합니다.",
  },
  {
    q: "행사 장소는 어디인가요?",
    a: "성균관대학교 교내 대규모 행사 공간에서 열리며, 정확한 장소는 추후 확정 후 공지합니다.",
  },
  {
    q: "중간에 입장하거나 퇴장해도 되나요?",
    a: "포스터 부스는 12:10부터 17:50까지 상시 운영되므로 원하는 시간에 자유롭게 둘러볼 수 있습니다.",
  },
  {
    q: "우수 발표팀은 어떻게 선정되나요?",
    a: "각 참여 단체가 추천한 후보 중 완성도, 학술성, 확장성 등을 기준으로 9팀을 사전 선정합니다. 우수 발표팀도 포스터를 제작해 전시에 참여합니다.",
  },
];
