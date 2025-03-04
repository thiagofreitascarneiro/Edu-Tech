import { mount } from '@vue/test-utils';
import ImageContent from '~/components/Content/ImageContent.vue';

describe('ImageContent', () => {
  const content = {
    title: 'Test Image Title',
    description: 'Test Image Description',
    url: 'https://example.com/test-image.jpg'
  };

  it('should render title and description correctly', () => {
    const wrapper = mount(ImageContent, {
      propsData: { content }
    });

    expect(wrapper.find('h3').text()).toBe(content.title);
    expect(wrapper.find('.image-description').text()).toBe(content.description);
  });

  it('should display the correct image with the correct src and alt attributes', () => {
    const wrapper = mount(ImageContent, {
      propsData: { content }
    });

    const image = wrapper.find('img');
    expect(image.attributes('src')).toBe(content.url);
    expect(image.attributes('alt')).toBe(content.title);
  });
});
