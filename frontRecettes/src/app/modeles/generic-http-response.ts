export type GenericHttpResponse<T> = {
   statut: "OK" | "KO",
   data?: T
}