import { ensureNxProject, uniq } from '@nrwl/nx-plugin/testing';
describe('svelte e2e', () => {
  it('should create svelte', async done => {
    const plugin = uniq('svelte');
    ensureNxProject('@community/svelte', 'dist/libs/svelte');

    done();
  });
});
