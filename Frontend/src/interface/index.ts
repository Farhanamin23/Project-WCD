export interface iEvent {
    id: number
    title: string
    description: string
    date: string
    imageSrc: string
    detailEvent?: string
    slug:string
    excerpt: string
}

export interface iProgram {
    excerpt: string
    slug: string
    id: number
    title: string
    description: string
    imageSrc: string,
    programImages?: string[]
}

export interface iArticle {
    id: number
    title: string
    description: string
    imageSrc: string
    slug:string
    excerpt: string
}