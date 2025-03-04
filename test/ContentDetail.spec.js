import ContentDetail from '@/components/ContentDetail.vue';
import ImageContent from '@/components/ImageContent.vue';
import LinkContent from '@/components/LinkContent.vue';
import PdfContent from '@/components/PdfContent.vue';
import VideoContent from '@/components/VideoContent.vue';
import { shallowMount } from '@vue/test-utils';

jest.mock('@/components/Loader.vue', () => ({
  name: 'Loader',
  render: () => null
}));

jest.mock('@/components/VideoContent.vue', () => ({
  name: 'VideoContent',
  render: () => null
}));

jest.mock('@/components/ImageContent.vue', () => ({
  name: 'ImageContent',
  render: () => null
}));

jest.mock('@/components/PdfContent.vue', () => ({
  name: 'PdfContent',
  render: () => null
}));

jest.mock('@/components/LinkContent.vue', () => ({
  name: 'LinkContent',
  render: () => null
}));

describe('ContentDetail.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ContentDetail, {
      propsData: {
        contentId: '12345'
      },
      mocks: {
        $apollo: {
          query: jest.fn().mockResolvedValue({
            data: {
              provision: {
                id: '12345',
                title: 'Sample Content',
                description: 'Description here',
                format: 'mp4',
                url: 'http://example.com'
              }
            }
          })
        }
      }
    });
  });


  it('should show error message when there is an error', async () => {
    wrapper.setData({ error: 'Erro ao carregar conteúdo' });
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('Erro ao carregar conteúdo');
  });

  it('should render VideoContent when content.format is mp4', async () => {
    wrapper.setData({
      content: {
        format: 'mp4'
      }
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(VideoContent).exists()).toBe(true);
  });

  it('should render ImageContent when content.format is jpg', async () => {
    wrapper.setData({
      content: {
        format: 'jpg'
      }
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(ImageContent).exists()).toBe(true);
  });

  it('should render PdfContent when content.format is pdf', async () => {
    wrapper.setData({
      content: {
        format: 'pdf'
      }
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(PdfContent).exists()).toBe(true);
  });

  it('should render LinkContent when content.url is provided', async () => {
    wrapper.setData({
      content: {
        format: null,
        url: 'http://example.com'
      }
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(LinkContent).exists()).toBe(true);
  });

  it('should call fetchContent method on created', () => {
    const fetchContentSpy = jest.spyOn(wrapper.vm, 'fetchContent');
    wrapper.vm.$options.created[0].call(wrapper.vm);
    expect(fetchContentSpy).toHaveBeenCalled();
  });
});
