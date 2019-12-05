import request from '@/utils/request';
import { formPost } from "../utils/request";

export function jsonRequest(params){
    return request({
        url: '/jsonRequest',
        method: 'post',
        data:params
    })
}

export function formRequest(params){
    return formPost('/formRequest',params);
}

/*
#### 后台接收说明 ####
    @RequestMapping("/jsonRequest")
    public String jsonRequest(@RequestBody Map map){ // json提交的需要@RequestBody注解
        System.out.println(map);
        // {id=22, name=Xiuming, address=China}
        return "json success！";
    }

    @RequestMapping("/formRequest")
    public String formRequest(User user){  // form表单提交，实体类可以直接映射成功。
        System.out.println(user);
        // User(id=22, name=Xiuming, address=China)
        return "form success！";
    }

    @RequestMapping("/formRequest")
    public String formRequest(@RequestParam Map user){  // 表单提交Map需要@RequestParam才能映射成功。
        System.out.println(user);
        // {id=22, name=Xiuming, address=China}
        return "form success！";
    }

*/