import { JsonObject } from '@angular-devkit/core';

export interface SvelteBuilderSchema extends JsonObject {
  mainFile: string;
  dist: string;
}
