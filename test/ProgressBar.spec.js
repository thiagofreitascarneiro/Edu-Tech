import { mount } from '@vue/test-utils';
import ProgressBar from '~/components/ProgressBar.vue';

describe('ProgressBar', () => {
  it('should render progress bar with correct width', async () => {
    const wrapper = mount(ProgressBar, {
      propsData: {
        progress: 50
      }
    });
    
    const progressBar = wrapper.find('.progress-bar');
    expect(progressBar.attributes('style')).toContain('width: 50%');
  });

  it('should render the default progress as 0 if no prop is passed', async () => {
    const wrapper = mount(ProgressBar, {
      propsData: {
        progress: 0,  
      }
    });
  
    const progressBar = wrapper.find('.progress-bar');
    expect(progressBar.attributes('style')).toContain('width: 0%');
  });
  

  it('should update the progress when prop changes', async () => {
    const wrapper = mount(ProgressBar, {
      propsData: {
        progress: 20
      }
    });

    let progressBar = wrapper.find('.progress-bar');
    expect(progressBar.attributes('style')).toContain('width: 20%');

    await wrapper.setProps({ progress: 70 });
    progressBar = wrapper.find('.progress-bar');
    expect(progressBar.attributes('style')).toContain('width: 70%');
  });
});
