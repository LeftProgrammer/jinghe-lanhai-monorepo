import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Component from '../src/components/MyComponent.vue'

describe('Sample Test Suite', () => {
	it('mounts', () => {
		const wrapper = mount(Component, {
			props: {
				message: 'Test in Vitest',
			},
		})

		expect(wrapper.exists()).toBe(true)
	})
})
