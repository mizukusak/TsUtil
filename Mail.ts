import {StringUtil} from "./StringUtil";

var trimChars = StringUtil.trimChars;

export class MailUtil {
  /**
   * アドレスの表示を整形
   */
  convertHeaderAddr(addr:string) :string {
  	var parsed = this.parseHeaderAddr(addr);
  	var res = "";
  	if (parsed.name) {
  		res = parsed.name + " <"+parsed.addr+">";
  	} else {
  		res = parsed.addr;
  	}
  	return res;
  }
  /**
   * メールヘッダのアドレスをパース
   */
  parseHeaderAddr(addr:string) :{name:string, addr:string} {
  	var res = {name: "", addr: ""};
  	var m = addr.match(/(.*?)\s*<(.*)>/);
  	if (!m) {
  		res = {name: "", addr: trimChars(addr.trim(), '"')};
  	} else {
  		res = {name: trimChars(m[1].trim(), '"'), addr: trimChars(m[2].trim(), '"')};
  	}
  	return res;
  }
}

