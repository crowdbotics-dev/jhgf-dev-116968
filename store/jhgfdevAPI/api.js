import axios from "axios"
const jhgfdevAPI = axios.create({
  baseURL: "https://jhgf-dev-116968.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return jhgfdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_cdfs_list(payload) {
  return jhgfdevAPI.get(`/api/v1/cdfs/`)
}
function api_v1_cdfs_create(payload) {
  return jhgfdevAPI.post(`/api/v1/cdfs/`, payload)
}
function api_v1_cdfs_retrieve(payload) {
  return jhgfdevAPI.get(`/api/v1/cdfs/${payload.id}/`)
}
function api_v1_cdfs_update(payload) {
  return jhgfdevAPI.put(`/api/v1/cdfs/${payload.id}/`, payload)
}
function api_v1_cdfs_partial_update(payload) {
  return jhgfdevAPI.patch(`/api/v1/cdfs/${payload.id}/`, payload)
}
function api_v1_cdfs_destroy(payload) {
  return jhgfdevAPI.delete(`/api/v1/cdfs/${payload.id}/`)
}
function api_v1_cvbgh_list(payload) {
  return jhgfdevAPI.get(`/api/v1/cvbgh/`)
}
function api_v1_cvbgh_create(payload) {
  return jhgfdevAPI.post(`/api/v1/cvbgh/`, payload)
}
function api_v1_cvbgh_retrieve(payload) {
  return jhgfdevAPI.get(`/api/v1/cvbgh/${payload.id}/`)
}
function api_v1_cvbgh_update(payload) {
  return jhgfdevAPI.put(`/api/v1/cvbgh/${payload.id}/`, payload)
}
function api_v1_cvbgh_partial_update(payload) {
  return jhgfdevAPI.patch(`/api/v1/cvbgh/${payload.id}/`, payload)
}
function api_v1_cvbgh_destroy(payload) {
  return jhgfdevAPI.delete(`/api/v1/cvbgh/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return jhgfdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return jhgfdevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_vbfd_list(payload) {
  return jhgfdevAPI.get(`/api/v1/vbfd/`)
}
function api_v1_vbfd_create(payload) {
  return jhgfdevAPI.post(`/api/v1/vbfd/`, payload)
}
function api_v1_vbfd_retrieve(payload) {
  return jhgfdevAPI.get(`/api/v1/vbfd/${payload.id}/`)
}
function api_v1_vbfd_update(payload) {
  return jhgfdevAPI.put(`/api/v1/vbfd/${payload.id}/`, payload)
}
function api_v1_vbfd_partial_update(payload) {
  return jhgfdevAPI.patch(`/api/v1/vbfd/${payload.id}/`, payload)
}
function api_v1_vbfd_destroy(payload) {
  return jhgfdevAPI.delete(`/api/v1/vbfd/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return jhgfdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return jhgfdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return jhgfdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return jhgfdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return jhgfdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return jhgfdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return jhgfdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return jhgfdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return jhgfdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return jhgfdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return jhgfdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_cdfs_list,
  api_v1_cdfs_create,
  api_v1_cdfs_retrieve,
  api_v1_cdfs_update,
  api_v1_cdfs_partial_update,
  api_v1_cdfs_destroy,
  api_v1_cvbgh_list,
  api_v1_cvbgh_create,
  api_v1_cvbgh_retrieve,
  api_v1_cvbgh_update,
  api_v1_cvbgh_partial_update,
  api_v1_cvbgh_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_vbfd_list,
  api_v1_vbfd_create,
  api_v1_vbfd_retrieve,
  api_v1_vbfd_update,
  api_v1_vbfd_partial_update,
  api_v1_vbfd_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
