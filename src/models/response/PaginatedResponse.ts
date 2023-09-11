import EarthquakeResponse from "./EarthquakeResponse";

export default interface PaginatedResponse{
   index:number,
   size:number,
   count:number,
   items:EarthquakeResponse[],
   pages:number,
   hasPrevious:boolean,
   hasNext:boolean
}