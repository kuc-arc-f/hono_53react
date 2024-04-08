//import axios from 'axios';
//
const router = {
  /**
  * 
  * @param
  *
  * @return
  */
 //getList: async function (postBody: any, axios: any)
  sendPost: async function (postBody: any, axios: any)
  {
    const retObj = {ret: "NG", data: [], message: ""};
   try{
      console.log(postBody);
      if (postBody) {
        const url = import.meta.env.VITE_EXTERNAL_API_URL;
        const body: any = JSON.stringify(postBody);	
//console.log(body);
        const path = postBody.api_url;	
console.log("path=", url + path);
        const res = await fetch(url + path, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},      
          body: body
        });
        const json = await res.json()
        return json;
      }
      return retObj;
    } catch (e) {
      console.error(e);
      return Response.json(retObj);
    } 
  }, 
}

export default router;
