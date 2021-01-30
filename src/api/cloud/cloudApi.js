/**
 * 封装知晓云Api,暴露接口
 */

import register from './register'
import login from './login'
import request from '../request'
import { queryImage, queryData} from "../API/queryAPI"
import { writeTableData } from "../API/writeTableData"
 
export default {
    register,
    request,
    login,
    queryImage,
    queryData,
    writeTableData
}