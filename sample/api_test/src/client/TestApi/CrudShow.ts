import HttpCommon from '../lib/HttpCommon';
import LibConfig  from '../lib/LibConfig';
import Crud from './Crud';
//
const CrudShow = {
    /**
     *
     * @param
     *
     * @return
     */
    get :async function (id: number): Promise<any>
    {
        try{
            let ret = {};
            const postItem = {
                id: id,
            }
            //console.log(postItem); 
            const json = await HttpCommon.serverPost(postItem, "/test/get");
console.log(json);      
            let items: any[] = [];
            /*
            items = json.data;
            if(items.length < 1){
                console.error("error, length = 0");
            }
            */
            ret = json.data;
            return ret;
        } catch (e) {
            console.error(e);
            throw new Error("Error, get");
        } 
    },  
   /**
   * delete:
   * @param key: any
   *
   * @return
   */   
    delete : async function(id: number) : Promise<any>
    {
        try{
            let ret = false;
            const item = {
                id: id
            }
        //console.log(item);
            const json = await HttpCommon.serverPost(item, "/test/delete");
console.log(json);
            if (json.ret ===  LibConfig.OK_CODE) {
                ret = true;
            }      
            return ret;      
        } catch (e) {
            console.error(e);
        }
    },         

}

export default CrudShow;
