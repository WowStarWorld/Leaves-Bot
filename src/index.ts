import { Context, Schema, Logger } from 'koishi';
import { RuntimeError } from "./core/helpers/errors";

export const name = "leaves";

export interface Config {
    name: string;
}

export const Config: Schema <Config> = Schema.object(
    {
        name: Schema.string().default("Leaves")
    }
);

export const logger = new Logger(Config.name);
export let context: Context;

export function getContext () {
    try {
        return context;
    } catch {
        let error = new RuntimeError("context is not defined");
    }
}

export function apply (ctx: Context) {
    context = ctx;
    require("./core");
}

