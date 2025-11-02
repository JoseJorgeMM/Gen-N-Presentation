export interface BaseSlideData {
  title: string;
  backgroundImageUrl: string;
}

export interface Creator {
    name: string;
    role: string;
}

export interface TitleSlideData extends BaseSlideData {
  type: 'title';
  subtitle: string;
  creator: Creator;
}

export type IconType = 'lightbulb' | 'code' | 'community' | 'rocket' | 'chart' | 'globe' | 'idea' | 'lab';

export interface ContentItem {
    icon: IconType;
    title: string;
    text: string;
}

export interface ContentSlideData extends BaseSlideData {
  type: 'content';
  content: ContentItem[];
}

export interface ListSlideData extends BaseSlideData {
    type: 'list';
    mainContent: string;
    mainContentLink?: string;
    listItems: string[];
}

export type SlideData = TitleSlideData | ContentSlideData | ListSlideData;