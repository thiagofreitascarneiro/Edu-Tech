import { mount } from '@vue/test-utils';
import LinkContent from '~/components/Content/LinkContent.vue';

describe('LinkContent', () => {
  const content = {
    title: 'Test Link Title',
    description: 'Test Link Description',
    url: 'https://example.com/test-link'
  };

  it('should render title and description correctly', () => {
    const wrapper = mount(LinkContent, {
      propsData: { content }
    });

    expect(wrapper.find('h3').text()).toBe(content.title);
    expect(wrapper.find('p').text()).toBe(content.description);
  });

  it('should have a link to access content', () => {
    const wrapper = mount(LinkContent, {
      propsData: { content }
    });

    const link = wrapper.find('.btn-view-link');
    expect(link.attributes('href')).toBe(content.url);
    expect(link.attributes('target')).toBe('_blank');
  });
});
