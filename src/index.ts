type undefNumb = number | undefined

type RemoveUndef<T> = Exclude<T, undefined>

type numb = RemoveUndef<string | boolean | undefined>