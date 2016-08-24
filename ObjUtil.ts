export default class ObjUtil {
    static deepMap(obj, func) {
        if (Array.isArray(obj)) {
            for (let i = obj.length - 1; i >= 0; i--) {
                obj[i] = ObjUtil.deepMap(obj[i], func);
            }
        }
        else if (typeof obj == "object") {
            for (let k in obj) {
                obj[k] = ObjUtil.deepMap(obj[k], func);
            }
        }
        else {
            obj = func(obj);
        }
        return obj;
    }
}

