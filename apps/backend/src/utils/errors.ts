import { ResultAsync } from 'neverthrow';

// We could define aliases for each module we got
// There are two ways of doing this:
// 1. Create a specific Error type

// type DbError = {
//     code: string;
//     message: string;
// }

// ResultAsync<DB, DbError>;
// ..., errorContext: E (DbError)

//Or, create a type alias that wraps ResultAsync.
// type ProductError =
//   | {
//   type: "CreateProductError",
//   message: "Error creating product"
// } | {
//   type: "FindProductError",
//   message: "Error finding a product"
// } | {
//   type: "FindAllProductError",
//   message: "Error finding all product"
// } | {
//   type: "UpdateProductError",
//   message: "Error updating a product"
// } | {
//   type: "RemoveProductError",
//   message: "Error removing a product"
// }

// type ProductResult<T> = ResultAsync<T, ProductError>

export function handleAsyncOperation<T>(
  operation: Promise<T>,
  errorContext: string,
): ResultAsync<T, Error> {
  return ResultAsync.fromPromise(operation, () => new Error(errorContext));
}
