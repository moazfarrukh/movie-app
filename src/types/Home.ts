export  interface MovieCardData{
    imageUrl:string;
    name:string;
    rating:number
  }

export interface result{
    poster_path:string;
    title:string;
    vote_average:number;
    id:number;
}

export interface MovieJson{
    results:result[],
    total_pages:number,
    total_results:number,
}

