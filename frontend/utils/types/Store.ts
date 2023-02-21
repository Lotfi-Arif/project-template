import { AuthStore } from "./Auth";
import { BaseStore } from "./BaseStore";
import { ProgressStore } from "./Progress";

export interface ZustandStore extends AuthStore, ProgressStore, BaseStore {}
