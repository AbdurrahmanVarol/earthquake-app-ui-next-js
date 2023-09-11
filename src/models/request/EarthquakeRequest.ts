import { WebSiteType } from "../enums/WebSiteType";

export default interface EarthquakeRequest{
    //TODO:Rename
   siteType:WebSiteType,
   index:number,
   size:number
}