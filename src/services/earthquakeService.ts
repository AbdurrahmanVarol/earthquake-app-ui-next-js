import EarthquakeRequest from "@/models/request/EarthquakeRequest"
import PaginatedResponse from "@/models/response/PaginatedResponse"

const baseUrl = process.env.BASE_URL

const getRequest = async (path:string,params?:string):Promise<any> =>{
    let url = `${baseUrl}${path}`
    if(params){
        url += `?${params}`
    }
    const response = await fetch(url)
    return response.json()
}

const getEarthquakesWithPaginated =async (model:EarthquakeRequest):Promise<PaginatedResponse> => {
    const path = `/paginated`
    const params = `index=${model.index}&size=${model.size}&siteType=${model.siteType}`
    return getRequest(path,params)
}

export{
    getEarthquakesWithPaginated
}