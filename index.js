/**
 * @description object链式取值 例如 let a = {a:{b:{c:''}}}; let b = get(a,'b.c')
 * @param {object} obj 取值对象
 * @param {string} keys 取值keys
 * @returns 
 */
 export function get(obj,keys){
	if(typeof keys == 'number'){keys = keys+''}
	if(keys == undefined){return obj}
	
	if(!obj){
		return undefined
	}
  keys = keys.split('.')
  return keys.reduce(function(pre,key){
    if(pre && pre[key] != undefined){
      pre = pre[key]
    }else{
      pre = undefined
    }
    return pre
  },obj)
}

export default get
