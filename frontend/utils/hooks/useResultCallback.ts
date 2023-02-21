import React from "react";

export function useResultCallback<
  Result,
  ResultData extends NonNullable<
    Result[Exclude<keyof Result, Exclude<keyof Result, "data">>]
  >,
  ResultDataInner extends ResultData[Exclude<keyof ResultData, "__typename">],
  ResultError extends NonNullable<
    Result[Exclude<keyof Result, Exclude<keyof Result, "error">>]
  >,
>(
  result: Result,
  callbackData: (data: ResultDataInner) => void,
  callbackError: (data: ResultError) => void,
) {
  const obj = result as any;
  React.useEffect(() => {
    if (typeof obj.data) {
      for (const key in obj.data) {
        if (key === "__typename") continue;
        callbackData(obj.data[key]);
        break;
      }
    }
    if (obj.error) callbackError(obj.error);
  }, [obj.data, obj.error]);
}
