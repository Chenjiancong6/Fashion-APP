import BaaS from "./init"
import router from "../../config/router"
import {
    Toast
} from "vant";

/**
 * @param {phone:"",password:""}   //登录参数
 */

function login(form) {
    return new Promise((resolve, reject) => {
        BaaS.auth.login(form).then(user => {
            Toast("登录成功.")
              
            console.log(user,66);
                     
        }).catch(err => {
            Toast("登录失败.")
        })
    })
}

export default login