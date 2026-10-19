export interface socialsProps {
  tiktok: string;
  instagram: string;
  threads: string;
  x: string;
  goodreads: string;
  pagebound: string;
  youtube: string;
  twitch: string;
}

export interface dataProps {
  socials: socialsProps;
  taskDocumentationTemplate: string;
  weeklyPlannerTemplate: string;
  myBooksAmazon: string;
  kindleUnlimitedAmazon: string;
  skincareProductsAmazon: string;
  stylevana: string;
}

const data: dataProps = {
  socials: {
    tiktok: "https://www.tiktok.com/@anacbort_",
    instagram: "https://www.instagram.com/anacbort_/",
    threads: "https://www.threads.net/@anacbort_",
    x: "https://x.com/anacbort_",
    goodreads: "https://www.goodreads.com/anacbort_",
    pagebound: "https://pagebound.co/users/anacbort",
    youtube: "https://www.youtube.com/@anacbort",
    twitch: "https://www.twitch.tv/anacbort",
  },
  taskDocumentationTemplate: "https://www.notion.com/templates/task-documentation",
  weeklyPlannerTemplate: "https://www.notion.com/templates/your-weekly-planner",
  myBooksAmazon: "https://www.amazon.com.br/shop/aninha.dev/list/1DW22VSMRLA70?ref_=aipsflist",
  kindleUnlimitedAmazon: "https://www.amazon.com.br/shop/aninha.dev/list/PRTOEGIXZWEK?ref_=aipsflist",
  skincareProductsAmazon: "https://www.amazon.com.br/shop/aninha.dev/list/30ZEM60IMRJHA?ref_=aipsflist",
  stylevana: "https://vana.ly/aYltZR",
};

export default data;
