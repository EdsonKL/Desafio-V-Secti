export type TabsInfo = {
  id: string;
  type: string;
  tabTitle: string;
  title: string;
  content: string;
  image: string;
  details: {
    video: string;
    image1: string;
    image2: string;
    description1: string;
    description2: string;
    lat?: string;
    long?: string;
  };
};
