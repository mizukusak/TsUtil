export class Mail {
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
  	var res = {};
  	var m = addr.match(/(.*?)\s*<(.*)>/);
  	if (!m) {
  		res = {name: "", addr: addr.trim().trimChars('"')};
  	} else {
  		res = {name: m[1].trim().trimChars('"'), addr: m[2].trim().trimChars('"')};
  	}
  	return res;
  }
}

