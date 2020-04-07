import {
  BuilderContext,
  BuilderOutput,
  createBuilder
} from '@angular-devkit/architect';
import { createDirectory } from '@nrwl/workspace';
import { writeFileSync } from 'fs';
import { Observable } from 'rxjs';
import { compile } from 'svelte/compiler';
import { SvelteBuilderSchema } from './schema';

function compileCode(options: SvelteBuilderSchema): Observable<BuilderOutput> {
  return new Observable(subscribe => {
    try {
      const compiled = compile(options.mainFile);
      createDirectory(options.dist);
      writeFileSync(`${options.dist}/output.js`, compiled.js.code);
      subscribe.next({ success: true });
    } catch (error) {
      console.error(error.message);
      subscribe.error({ success: false, error });
    }
  });
}

export function runBuilder(
  options: SvelteBuilderSchema,
  context: BuilderContext
): Observable<BuilderOutput> {
  return compileCode(options);
}

export default createBuilder(runBuilder);
