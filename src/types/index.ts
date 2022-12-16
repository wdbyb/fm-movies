export interface Movie {
  title: string;
  thumbnail: {
    trending?: Url;
    regular: Url;
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface Url {
  small: string;
  medium?: string;
  large: string;
}
