import S from 'fluent-json-schema'

export const createUserSchema = {
  body: S.object(),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
}

export const editUserSchema = {
  body: S.object(),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
}
