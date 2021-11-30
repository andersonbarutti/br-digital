export const EMAIL_REQUIRED = 'Email is required'
export const EMAIL_NOT_FOUND = 'Email not found'
export const EMAIL_INVALID = 'Email is invalid'
export const EMAIL_ALREADY_EXISTS = 'Email already taken'

export const PASSWORD_REQUIRED = 'Password is required'
export const PASSWORD_INVALID = 'Password is incorrect'
export const PASSWORD_TOO_SHORT = 'Password is too short (minimum 6 characters)'
export const PASSWORD_TOO_LONG = 'Password is too long (maximum 30 characters)'
export const PASSWORD_TOO_SIMPLE =
  'Password must include at least one lowercase letter, one uppercase letter and one number'

export const USERNAME_REQUIRED = 'Username is required'
export const USERNAME_ALREADY_EXISTS = 'Username already taken'
export const USERNAME_TOO_SHORT = 'Username is too short (minimum 2 characters)'
export const USERNAME_TOO_LONG = 'Username is too long (maximum 15 characters)'

export const ZIP_CODE_REQUIRED = 'Zip code is required'
export const ZIP_CODE_FORMAT = 'Must be a valid zip code, no spaces'

export const FIRST_NAME_REQUIRED = 'First name is required'
export const LAST_NAME_REQUIRED = 'Last name is required'

export const SOMETHING_WRONG_HAPPENED =
  'Something wrong happened. Please try again later.'

export const SIGN_IN_FAILED = 'Wrong email or password'

export const email = {
  presence: {
    message: EMAIL_REQUIRED,
  },
  email: {
    message: EMAIL_INVALID,
  },
}

export const password = {
  presence: {
    message: PASSWORD_REQUIRED,
  },
}

export const username = {
  presence: {
    message: USERNAME_REQUIRED,
  },
  length: {
    tooShort: USERNAME_TOO_SHORT,
    tooLong: USERNAME_TOO_LONG,
    minimum: 2,
    maximum: 15,
  },
}

export const zipcode = {
  presence: {
    message: ZIP_CODE_REQUIRED,
  },
  format: {
    pattern: /(\d{5}|([ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z]\s?[0-9][ABCEGHJ-NPRSTV-Z][0-9]))/i,
    message: ZIP_CODE_FORMAT,
  },
}

export const firstName = {
  presence: {
    message: FIRST_NAME_REQUIRED,
  },
}

export const lastName = {
  presence: {
    message: LAST_NAME_REQUIRED,
  },
}

export const signInConstraints = {
  email,
  password,
}

export const signUpConstraints = {
  email,
  username,
  zipcode,
  password: {
    ...password,
    length: {
      tooShort: PASSWORD_TOO_SHORT,
      tooLong: PASSWORD_TOO_LONG,
      minimum: 6,
      maximum: 30,
    },
  },
}
