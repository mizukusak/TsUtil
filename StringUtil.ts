export class StringUtil {
    static trimChars(str:string, chars:string) :string {
        return str.replace(new RegExp("^" + chars + "+|" + chars + "+$", "g"),'');
    }
}
