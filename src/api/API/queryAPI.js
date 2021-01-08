/***
 * 知晓云 查询显示 数据API接口
 */
import BaaS from "../cloud/init";
import { Toast, Notify } from "vant";
import store from "@/store/home";  //引入vuex
//查询图片接口
export function queryImage(queryName) {
    return new Promise(()=>{
        let MyFile = new BaaS.File();
        let query = new BaaS.Query();
        //查询某一文件分类下的所有文件
        query.compare("category_name", "=", queryName);
        MyFile.setQuery(query).find().then(res => {
            // this.swiper = res.data.objects;
        })  
    })
}

