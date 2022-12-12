export type InfoCardType = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: string;
  price: string;
  total: string;
};

export type LargeCardType = {
  img: string;
  title: string;
  description: string;
  buttonText: string;
};

export type MediumCardType = {
  img: string;
  title: string;
};

export type SmallCardType = {
  img: string;
  location: string;
  distance: string;
};

export type SearchResultType = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};

export type SearchResultsType = {
  searchResults: SearchResultType[];
};

export type ExploreDataType = {
  img: string;
  location: string;
  distance: string;
};

export type CardsDataType = {
  img: string;
  title: string;
};

export type HomepageType = {
  exploreData: ExploreDataType[];
  cardsData: CardsDataType[];
};
