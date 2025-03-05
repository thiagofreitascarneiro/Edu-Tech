import { mount } from '@vue/test-utils';
import VideoContent from '~/components/Content/VideoContent.vue';

describe('VideoContent', () => {
  const content = {
    url: 'http://example.com/video.mp4',
    title: 'Sample Video',
    description: 'This is a sample video.',
    format: 'mp4',
    metadata: {
      duration: 120,
      resolution: '1920x1080'
    }
  };

  it('should render a video with correct src, alt, and title', () => {
    const wrapper = mount(VideoContent, {
      propsData: { content }
    });

    const video = wrapper.find('video');
    expect(video.attributes('src')).toBe(content.url);
    expect(video.attributes('alt')).toBe(content.title);
    expect(video.attributes('title')).toBe(content.title);
  });

  it('should render title and description', () => {
    const wrapper = mount(VideoContent, {
      propsData: { content }
    });

    expect(wrapper.find('h3').text()).toBe(content.title);
    expect(wrapper.find('p').text()).toContain(content.description);
  });

  it('should render metadata information when available', () => {
    const wrapper = mount(VideoContent, {
      propsData: { content }
    });

    const metadata = wrapper.findAll('p');
    expect(metadata.at(2).text()).toContain('Duração: 120 segundos');
    expect(metadata.at(3).text()).toContain('Resolução: 1920x1080');
  });

  it('should display content format correctly', () => {
    const wrapper = mount(VideoContent, {
      propsData: { content }
    });

    expect(wrapper.find('.content-format').text()).toContain(content.format);
  });

});
