import fetch from '$fetch'
/**
 * action type
 */
const CHANGE_TAB = 'CHANGE_TAB'
const CHANGE_PAGE = 'CHANGE_PAGE'
const FETCH_SUCCESS = 'FETCH_SUCCESS'

const getProduct = () => (dispatch, getState) => {
  const { product } = getState()
  const categoryParams = `${product.category ? '&category=' + product.category : '' }`
  return fetch(`/api/admin/products?limit=${product.limit}&offset=${(product.page - 1) * product.limit}${categoryParams}`).then(res => {
    dispatch({ type: FETCH_SUCCESS, payload: { productList: res.rows, amount: res.count } })
  })
}

const changePage = (pageId) => (dispatch) => dispatch({ type: CHANGE_PAGE, payload: { page: pageId } })

// const changeCategory = (category) => ()

export  {
  FETCH_SUCCESS,
  CHANGE_TAB,
  CHANGE_PAGE,
  getProduct,
  changePage
}