import  require  from '../utils/request';
export default {

  namespace: 'city',

  state: {
    cities:{},
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getcities({ payload={} }, { call, put }) {
      const data =  yield call(require,'/api/city',);
      console.log(data,'data')
      yield put({ type: 'save' ,payload:{cities:data}});
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
