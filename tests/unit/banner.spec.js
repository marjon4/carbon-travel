import { mount } from '@vue/test-utils';
import Banner from '../../src/components/Banner.vue';

describe('Banner.vue', () => {
  it('renders Carbon travel', () => {
    const msg = 'Carbon Travel'
    const wrapper = mount(Banner);
    const bannerHeader = wrapper.get('[data-test="bannerHeader"]');
    expect(bannerHeader.text()).toContain(msg);
  })
})
