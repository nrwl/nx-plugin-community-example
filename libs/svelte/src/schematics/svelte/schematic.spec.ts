import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { SvelteSchematicSchema } from './schema';

describe('svelte schematic', () => {
  let appTree: Tree;
  const options: SvelteSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@community/svelte',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('svelte', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
