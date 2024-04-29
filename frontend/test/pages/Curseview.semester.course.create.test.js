/* eslint-disable no-undef */
import { render } from '@testing-library/svelte';
import Page from '../../src/routes/courseview/[semester]/[course]/create/+page.svelte';
import { mockData } from '../../__mocks__/Data.js';

describe('Courseview semester course create', () => {
	test('Test the "ready"-state of the card', () => {
		render(Page, { data: mockData[0] });
	});
});
