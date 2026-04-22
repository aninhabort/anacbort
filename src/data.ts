export interface socialsProps {
  tiktok: string;
  instagram: string;
  threads: string;
  x: string;
  goodreads: string;
  pagebound: string;
}

export interface dataProps {
  socials: socialsProps;
  taskDocumentationTemplate: string;
  weeklyPlannerTemplate: string;
  myBooksAmazon: string;
  skincareProductsAmazon: string;
  kofi: string;
}

const data: dataProps = {
  socials: {
    tiktok: "https://www.tiktok.com/@anacbort_",
    instagram: "https://www.instagram.com/anacbort_/",
    threads: "https://www.threads.net/@anacbort_",
    x: "https://x.com/anacbort_",
    goodreads: "https://www.goodreads.com/anacbort_",
    pagebound: "https://pagebound.co/users/anacbort",
  },
  taskDocumentationTemplate: "https://www.notion.com/templates/task-documentation",
  weeklyPlannerTemplate: "https://www.notion.com/templates/your-weekly-planner",
  myBooksAmazon: "https://amzn.to/4fZ8HoF",
  skincareProductsAmazon: "https://amzn.to/499allp",
  kofi: "https://ko-fi.com/anacbort",
};

export default data;
