export interface NewsItem {
    name: string
    url: string
    image: {
        _type: string
        thumbnail: {
            _type: string
            contentUrl: string
        }
    }
    description: string
    provider: object[]
    datePublished: string
}

export type Category = {
    name: string
}