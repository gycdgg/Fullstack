import fetch from '$fetch'
/**
 * action type
 */
const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
const CHANGE_PAGE = 'CHANGE_PAGE'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const SET_QUERY = 'SET_QUERY'
const GET_PRODUCT_CATEGORY = 'GET_PRODUCT_CATEGORY'

/**
 * action creator
 */
const getProduct = () => (dispatch, getState) => {
  const { product } = getState()
  const categoryParams = `${product.category ? '&category=' + product.category : '' }`
  return fetch(`/api/admin/products?limit=${product.limit}&offset=${(product.page - 1) * product.limit}${categoryParams}`).then(res => {
    dispatch({ type: FETCH_SUCCESS, payload: { productList: res.rows, amount: res.count } })
  })
}

const changePage = (pageId) => (dispatch) => dispatch({ type: CHANGE_PAGE, payload: { page: pageId } })

const changeCategory = (category) => (dispatch) => dispatch({
  type: CHANGE_CATEGORY,
  payload: {
    page: 1,
    category
  }
})

const setQuery = (query) => (dispatch) => query.page ? dispatch({ type: SET_QUERY, payload: {
  page: query.page,
  category: query.category
} }) : dispatch({ type: SET_QUERY, payload: {
  category: query.category
} })

const getCategory = () => (dispatch) => {
  return fetch('/api/client/category').then(res => {
    dispatch({ type: GET_PRODUCT_CATEGORY, payload: { categoryArr: res } })
  })
}

export  {
  FETCH_SUCCESS,
  CHANGE_CATEGORY,
  CHANGE_PAGE,
  SET_QUERY,
  getProduct,
  changePage,
  changeCategory,
  setQuery,
  getCategory
}