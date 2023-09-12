import EarthquakeRequest from "@/models/request/EarthquakeRequest"
import PaginatedResponse from "@/models/response/PaginatedResponse"

const baseUrl = process.env.BASE_URL

const getRequest = async (path: string, params?: { key: string, value: any }[]): Promise<any> => {
    try {
        let url = new URL(`${baseUrl}${path}`)
        if (params) {
            params.forEach(p => {
                url.searchParams.append(p.key, p.value)
            })
        }
        const response = await fetch(url.href)
        return response.json()
    }
    catch (error) {
        console.log(error)
    }
}

const getEarthquakesWithPaginated = async (model: EarthquakeRequest): Promise<PaginatedResponse> => {
    const path = `/earthquakes/paginated`
    const params = [
        { key: 'index', value: model.index },
        { key: 'size', value: model.size },
        { key: 'siteType', value: model.siteType },
    ];
    return getRequest(path, params)
}

export {
    getEarthquakesWithPaginated
}