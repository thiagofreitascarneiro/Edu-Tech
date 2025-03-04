import { shallowMount } from '@vue/test-utils';
import ContentSelect from '~/components/ContentSelectMobile.vue';

describe('ContentSelect.vue', () => {
  let wrapper;
  const contentList = [
    { id: '1', title: 'Content 1' },
    { id: '2', title: 'Content 2' },
    { id: '3', title: 'Content 3' },
  ];

  beforeEach(() => {
    wrapper = shallowMount(ContentSelect, {
      propsData: {
        contentList,
        selectedContentId: '2', 
      },
    });
  });

  it('should render the dropdown with content list options', () => {
    const options = wrapper.findAll('option');
    expect(options.length).toBe(contentList.length); 
    expect(options.at(0).text()).toBe(contentList[0].title);
  });

  it('should bind the selected value to the dropdown', () => {
    const select = wrapper.find('select');
    expect(select.element.value).toBe('2');
  });

  it('should emit the contentSelected event with the selected content ID when an option is selected', async () => {
    const select = wrapper.find('select');
    await select.setValue('3');
    
    expect(wrapper.emitted().contentSelected[0]).toEqual(['3']);
  });

  it('should update the selected value when an option is selected', async () => {
    const select = wrapper.find('select');
    await select.setValue('1'); 
    
    expect(wrapper.vm.selected).toBe('1');
  });
});
