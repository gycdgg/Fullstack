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
  let categoryParams = ''
  let subcategory = ''
  console.log(product.category, '3333333333333333333')
  if(product.category && product.category.length > 0) {
    if(product.category.length === 2) {
      subcategory = product.category[0] ? `&subcategory=${product.category[0]}` : ''
    }
    categoryParams = product.category.slice(-1)[0] ? '&category=' + product.category.slice(-1)[0] : ''
  }
  return fetch(`/api/admin/products?limit=${product.limit}&offset=${(product.page - 1) * product.limit}${categoryParams}${subcategory}`).then(res => {
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
  category: [ query.subcategory, query.category ]
} }) : dispatch({ type: SET_QUERY, payload: {
  category: [ query.subcategory, query.category ]
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
  GET_PRODUCT_CATEGORY,
  getProduct,
  changePage,
  changeCategory,
  setQuery,
  getCategory
}