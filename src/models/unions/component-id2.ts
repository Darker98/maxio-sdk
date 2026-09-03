import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ComponentId2 = string | number;

export const componentId2Schema: Schema<ComponentId2> = s.of<ComponentId2>(s.union([s.string(), s.number()]));
