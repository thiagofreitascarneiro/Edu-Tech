import { mount } from '@vue/test-utils';
import CardComponent from '~/components/CardComponent.vue';

describe('CardComponent', () => {
  const propsData = {
    title: 'Título do Card',
    description: 'Descrição do card',
    cover: 'https://example.com/image.jpg',
    type: 'Video',
    total_likes: 10,
    id: '123'
  };

  it('renders the title and description correctly', () => {
    const wrapper = mount(CardComponent, { propsData });

    expect(wrapper.find('.card-title').text()).toBe(propsData.title);
    expect(wrapper.find('.card-description').text()).toBe(propsData.description);
  });

  it('renders the cover image with correct src and alt attributes', () => {
    const wrapper = mount(CardComponent, { propsData });

    const img = wrapper.find('.card-image img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(propsData.cover);
    expect(img.attributes('alt')).toBe(propsData.title);
  });

  it('renders the type badge correctly', () => {
    const wrapper = mount(CardComponent, { propsData });

    expect(wrapper.find('.badge').text()).toBe(propsData.type);
  });

  it('renders the total likes correctly', () => {
    const wrapper = mount(CardComponent, { propsData });

    expect(wrapper.find('.likes').text()).toBe(`${propsData.total_likes} Likes`);
  });

  it('emits "contentClicked" event when link is clicked', async () => {
    const wrapper = mount(CardComponent, { propsData });

    await wrapper.find('.learn-more').trigger('click');

    expect(wrapper.emitted('contentClicked')).toBeTruthy();
    expect(wrapper.emitted('contentClicked')[0]).toEqual([propsData.id]);
  });
});
