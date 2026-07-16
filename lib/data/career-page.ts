import type { CareerPage } from "@/lib/types/sanity";

export const CAREER_PAGE_FALLBACK: CareerPage = {
  _id: "careerPageFallback",
  _type: "careerPage",
  seo: {
    title: { en: "Career - Bike", id: "Karir - Bike", zh: "职业 - Bike" },
    description: {
      en: "Explore career opportunities at Bike.",
      id: "Jelajahi peluang karir di Bike.",
      zh: "探索 Bike 的职业机会。",
    },
  },
  hero: {
    eyebrow: { en: "Career", id: "Karir", zh: "职业" },
    title: { en: "Build Your Future with Bike.", id: "Bangun Masa Depan Anda bersama Bike.", zh: "与 Bike 共建未来。" },
    description: {
      en: "Join a team that values growth, collaboration, and innovation. Explore opportunities to make an impact across industries.",
      id: "Bergabunglah dengan tim yang menghargai pertumbuhan, kolaborasi, dan inovasi. Jelajahi peluang untuk memberikan dampak di berbagai industri.",
      zh: "加入一个重视成长、协作和创新的团队。探索在各行业产生影响的机会。",
    },
  },
  jobOpenings: {
    sectionHeader: {
      eyebrow: { en: "Current Opportunities", id: "Peluang Saat Ini", zh: "当前机会" },
      heading: { en: "Open Positions.", id: "Posisi Tersedia.", zh: "开放职位。" },
    },
    emptyMessage: {
      en: "No vacancies are currently available.",
      id: "Tidak ada lowongan yang tersedia saat ini.",
      zh: "目前没有空缺职位。",
    },
    jobs: [],
  },
  cta: {
    title: { en: "Ready to Join Our Team?", id: "Siap Bergabung dengan Tim Kami?", zh: "准备好加入我们的团队了吗？" },
    description: {
      en: "Send us your resume and we'll reach out when a matching opportunity arises.",
      id: "Kirimkan resume Anda dan kami akan menghubungi saat ada peluang yang cocok.",
      zh: "发送您的简历，当有匹配的机会时我们会与您联系。",
    },
    primaryButton: { label: { en: "Contact Us", id: "Hubungi Kami", zh: "联系我们" }, href: "/contact", external: false },
    secondaryButton: { label: { en: "About Bike", id: "Tentang Bike", zh: "关于 Bike" }, href: "/about", external: false },
  },
};
