export type ISearch = {
    tracks: {
        href: string
        items: Array<{}>
        limit: number
        next: string
        offset: number
        previous: string
        total: number
    }
    artists: {
        href: string
        items: Array<{}>
        limit: number
        next: string
        offset: number
        previous: string
        total: number
    }
    albums: {
        href: string
        items: Array<{}>
        limit: number
        next: string
        offset: number
        previous: string
        total: number
    }
    playlists: {
        href: string
        items: Array<{}>
        limit: number
        next: string
        offset: number
        previous: string
        total: number
    }
    shows: {
        href: string
        items: Array<{}>
        limit: number
        next: string
        offset: number
        previous: string
        total: number
    }
    episodes: {
        href: string
        items: Array<{}>
        limit: number
        next: string
        offset: number
        previous: string
        total: number
    }
}
