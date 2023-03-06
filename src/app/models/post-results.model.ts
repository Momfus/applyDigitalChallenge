import { Post } from './post.model';

export interface PostResultsSearch {
  hits: Post[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  exhaustive: {
    nbHits: boolean;
    typo: boolean;
  };
  query: string;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: {
    request: {
      roundTrip: number;
    };
  };
}
