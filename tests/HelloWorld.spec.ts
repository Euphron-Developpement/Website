import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld', () => {
    it('renders properly with a message', () => {
        const wrapper = mount(HelloWorld, {
            props: {
                msg: 'Hello Vitest'
            }
        });
        expect(wrapper.text()).toContain('Hello Vitest');
    });
});