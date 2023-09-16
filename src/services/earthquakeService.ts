import { WebSiteType } from "@/models/enums/WebSiteType"
import EarthquakeRequest from "@/models/request/EarthquakeRequest"
import EarthquakeResponse from "@/models/response/EarthquakeResponse"
import PaginatedResponse from "@/models/response/PaginatedResponse"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

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

const getEarthquakes = async (siteType: WebSiteType): Promise<EarthquakeResponse[]> => {
    const path = `/earthquakes?webSiteType=${siteType}`
    console.log("path")
    console.log(path)
    return getRequest(path)
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
    getEarthquakes,
    getEarthquakesWithPaginated
}