export interface Source {
    id: string | null;
    name: string;
}

export enum Status {
    Ok = 'ok',
    Error = 'error',
}

export interface Article {
    source: Source;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface ArticleJSON {
    status: Status;
    totalResults: number;
    articles: Article[];
}

export interface NewsSource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface SourcesJSON {
    status: Status;
    sources: NewsSource[];
}
