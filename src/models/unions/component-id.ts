import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ComponentId = string | number;

export const componentIdSchema: Schema<ComponentId> = s.of<ComponentId>(s.union([s.string(), s.number()]));
