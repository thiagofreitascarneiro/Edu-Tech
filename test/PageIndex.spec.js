import { mount } from '@vue/test-utils';
import CardComponent from '~/components/CardComponent.vue';
import ContentDetail from '~/components/ContentDetail.vue';
import ContentSelectMobile from '~/components/ContentSelectMobile.vue';
import ProgressBar from '~/components/ProgressBar.vue';
import MainPage from '~/pages/index.vue';

describe('MainPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MainPage);
  });

  it('renders the page container', () => {
    expect(wrapper.find('.page-container').exists()).toBe(true);
  });

  it('renders a list of CardComponents', () => {
    const cards = wrapper.findAllComponents(CardComponent);
    expect(cards.length).toBe(wrapper.vm.contentList.length);
  });

  it('renders the ProgressBar component', () => {
    expect(wrapper.findComponent(ProgressBar).exists()).toBe(true);
  });

  it('renders ContentDetail when a content is selected', async () => {
    await wrapper.setData({ selectedContentId: wrapper.vm.contentList[0].id });
    expect(wrapper.findComponent(ContentDetail).exists()).toBe(true);
  });

  it('renders ContentSelectMobile only on mobile', async () => {
    await wrapper.setData({ contentList: [{ id: '1', title: 'Test' }] });
    expect(wrapper.findComponent(ContentSelectMobile).exists()).toBe(true);
  });

  it('updates selectedContentId when showContentDetail is called', async () => {
    const newContentId = wrapper.vm.contentList[1].id;
    await wrapper.vm.showContentDetail(newContentId);
    expect(wrapper.vm.selectedContentId).toBe(newContentId);
  });

  it('increases progress correctly when the button is clicked', async () => {
    const button = wrapper.find('.btn');
    await button.trigger('click');
    expect(wrapper.vm.progress).toBe(18);

    await button.trigger('click');
    expect(wrapper.vm.progress).toBe(36);
  });

  it('caps progress at 100%', async () => {
    wrapper.setData({ progress: 90 });
    const button = wrapper.find('.btn');
    await button.trigger('click');
    expect(wrapper.vm.progress).toBe(100);
  });
});
