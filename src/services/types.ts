export interface ICharacter {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    image: string
}

export interface IInfo {
    count: number
    prev: string
    next: string
}

export interface IGetAllCharacters {
    characters: {
        info: IInfo
        results: ICharacter[]
    }
}
