/*
 * action 类型
 */

export const ADD = 'ADD'
export const DEL = 'DEL'

/*
 * 其它的常量
 */

export const base = {
  cn: '',
  dk: '',
  wt: '',
  we: '',
  s: '1',
  a: '',
  pc: '',
  sc: '',
  cc: '',
  cy: '',
  cyn: '',
  ws: '',
  ci: { p: '', f: '', e: '', pf: '', gn: '', sn: '' }
}

/*
 * action 创建函数
 */

export const add = obj => {
  return { type: ADD, obj }
}

export const del = idx => {
  return { type: DEL, idx }
}

export const getBaseData = obj => ({
  type: 'getBaseData',
  obj
})
