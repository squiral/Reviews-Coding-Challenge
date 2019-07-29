import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


const sortByFrequency = (wordArray) => {
    const sortedArray = wordArray.sort((word1, word2) => {
        return word2.value - word1.value;
    })

    return sortedArray
    
}

export default sortByFrequency



// const localStorageMock = {
//     getItem: jest.fn(),
//     setItem: jest.fn(),
//     removeItem: jest.fn(),
//     clear: jest.fn(),
//   };
//   global.localStorage = localStorageMock;