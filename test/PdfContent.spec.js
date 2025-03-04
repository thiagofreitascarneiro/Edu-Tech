import { mount } from '@vue/test-utils';
import PdfContent from '~/components/PdfContent.vue';

describe('PdfContent', () => {
  const content = {
    title: 'Test PDF Title',
    description: 'Test PDF Description',
    url: 'https://example.com/test.pdf'
  };

  it('should render title and description correctly', () => {
    const wrapper = mount(PdfContent, {
      propsData: { content }
    });

    expect(wrapper.find('h3').text()).toBe(content.title);
    expect(wrapper.find('p').text()).toBe(content.description);
  });

  it('should toggle PDF viewer when clicking on "Visualizar PDF" button', async () => {
    const wrapper = mount(PdfContent, {
      propsData: { content }
    });

    const toggleButton = wrapper.find('.btn-toggle-view');

    expect(wrapper.find('.pdf-viewer').exists()).toBe(false);

    await toggleButton.trigger('click');
    expect(wrapper.find('.pdf-viewer').exists()).toBe(true); 

    await toggleButton.trigger('click');
    expect(wrapper.find('.pdf-viewer').exists()).toBe(false); 
  });

  it('should have a link to open the PDF', () => {
    const wrapper = mount(PdfContent, {
      propsData: { content }
    });

    const link = wrapper.find('.btn-view-pdf');
    expect(link.attributes('href')).toBe(content.url);
    expect(link.attributes('target')).toBe('_blank');
  });
});
