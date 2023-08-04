export type MovieParams={
 id:string;
}

export type Genre={
    id:number;
    name:string;
}

export type movieDetailJson={
    id:number;
    vote_average:number;
    title:string;
    overview:string;
    poster_path:string;
    genres:Genre;

}