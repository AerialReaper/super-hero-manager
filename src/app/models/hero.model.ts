export interface Hero {
    id: string;
    name: string;
}

export interface GetHeroesResponse {
    data: HeroList;
}

export interface HeroList {
    heroes: Hero[];
}

export interface HeroByIdParams {
    id : string | null;
}