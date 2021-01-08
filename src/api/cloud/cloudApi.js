/**
 * 封装知晓云Api,暴露接口
 */

import register from './register'
import login from './login'
import request from '../request'
import {queryImage} from "../API/queryAPI"
 
export default {
    register,
    request,
    login,
    queryImage,
}