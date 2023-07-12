import { Context } from "koishi";
import { getContext } from "koishi-plugin-leaves/src";


export const name = "leaves-core";

export function apply (ctx: Context) {
    getContext();
}

export * from "./helpers/decorators";

