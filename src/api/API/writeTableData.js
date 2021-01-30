/**
 * writeTableData 向指定的数据表写入一条数据
 * tableName: 数据表名
 * value:参数
 */

import BaaS from "../cloud/init";

export function writeTableData(tableName,value){
    let Product = new BaaS.TableObject(tableName) //向指定数据表插入一条记录
    let product = Product.create()  //创造
    product.set(value).save()  //保存

}