import {useState, useEffect}  from 'react';
import React from 'react'
//mport { Link } from 'react-router-dom';
import Head from '../components/Head'
import HttpCommon from './lib/HttpCommon';
import CrudIndex from './TestApi/CrudIndex';
import CrudShow from './TestApi/CrudShow';
//
let pageItems: any[] = [];
let pageItem: any = {};
let itemId: number = 0;
//
function Page(){
  const [updatetime, setUpdatetime] = useState<string>("");
  //
  useEffect(() => {
    (async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get('id') || "";
      itemId = Number(id);
console.log("itemId=", itemId);
      getItem(itemId);
    })()
  }, []);
  //
  const testProc = async function(){
    console.log("testProc" + new Date().toString() );
  }
  /**
   *
   * @param
   *
   * @return
   */
  const deleteProc = async function(){
    const ret = await CrudShow.delete(itemId);
    //console.log("ret=", ret);
    if(ret) {
      location.href = '/testapi';
    }
  }
  /**
   *
   * @param
   *
   * @return
   */
  const getItem = async function(id: number) {
    try{
        if(id < 1) { return; }
        const item = await CrudShow.get(id);
        pageItem = item;
console.log(pageItem);
        setUpdatetime(new Date().toString());
    } catch (e) {
        console.error(e);
    } 
  }  
  //
  return(
  <div  className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <a href={`/testapi`}>
      <button className="btn-outline-purple my-2 ms-2">Back</button>
    </a>
    <hr />
    <h1 className="text-4xl font-bold my-2">TestApiShow</h1>
    <hr className="my-1" />
    <h1 className="text-4xl font-bold">{pageItem.title}</h1>
    <p>ID: {pageItem.id}</p>
    <hr className="my-1" />
    <pre>{pageItem.content}</pre>
    <hr className="my-1" />
    <button className="btn-red" onClick={()=>deleteProc()}>Delete
    </button>    
    <hr className="my-2" />
  </div>
  );
}
export default Page;
/*
*/