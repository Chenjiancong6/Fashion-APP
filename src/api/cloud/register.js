 import BaaS from './init'
 import {
     Toast
 } from "vant";
 /**
  * 
  * @param {username:"",phone:"",password:""} form //注册参数
  * @returns
  * 
  */
 function register(form) {
     return new Promise((resolve, reject) => {
         BaaS.auth.register(form).then(user => {
             resolve(user)
             Toast("注册成功.")
         }).catch(err => {
             reject(err)
             Toast("注册失败.")
         })
     })

 }

 export default register


 /**avatar: "https://media.ifanrusercontent.com/hydrogen/default_avatar.png"
created_at: 1604219707
created_by: 237235844876096
id: 237235844876096
is_authorized: false
session_expires_at: 1606811676
updated_at: 1604219707
user_id: 237235844876096
_anonymous: false
_attribute: {_anonymous: false, _email_verified: false, _phone_verified: false, _provider: {…}, _username: "admin", …}
_email_verified: false
_phone_verified: false
_provider: {}
_record: {$set: {…}, $unset: {…}}
_recordID: undefined
_username: "admin"
__proto__: t
  * 
  * 
  */