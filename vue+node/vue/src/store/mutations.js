
// import { VIEW_LOADING } from './type'
import * as types from './type'

export default {
  // 'VIEW_LOADING':(state,payload)=>state.bLoading=payload
  // VIEW_LOADING:(state,payload)=>state.bLoading=payload
  // [VIEW_LOADING]:(state,payload)=>state.bLoading=payload,
  // [types.VIEW_LOADING]:(state,payload)=>state.bLoading=payload,
  // [types.VIEW_NAV]:(state,payload)=>state.bNav=payload,
  // [types.VIEW_FOOT]:(state,payload)=>state.bFoot=payload,
  [types.UPDATE_BANNER]:(state,payload)=>state.banner=payload,
  [types.UPDATE_COLUMN]:(state,payload)=>state.goods=payload,
  [types.UPDATE_DETAIL]:(state,payload)=>state.detail=payload,
  [types.CHECK_USER]:(state,payload)=>state.user=payload,
  [types.VIEW_LOADING]:(state,payload)=>state.loading=payload

}

/* var proname='proname'
Oobj['proname']
Oobj[proname]
 */