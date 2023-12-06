const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: '',
};

const getListChatWorkerReducers = (state = initialState, action) => {
  if (action.type === 'GET_LIST_CHAT_WORKER_PENDING') {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === 'GET_LIST_CHAT_WORKER_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isError: false,
      data: action.payload,
    };
  } else if (action.type === 'GET_LIST_CHAT_WORKER_ERROR') {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isError: true,
      errorMessage: action.payload,
    };
  } else {
    return state;
  }
};

export default getListChatWorkerReducers;
