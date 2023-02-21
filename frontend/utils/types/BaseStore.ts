export interface BaseStore {
  loading: boolean;
  setLoading(loading: boolean): void;
  scroll: string;
  setScrollRef(scroll: string): void;
}
