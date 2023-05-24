import { MdOutlineSearch, MdKeyboardArrowDown } from 'react-icons/md';

import { StyledSearch, StyledSearchInput } from './search.styles';
import Button from '../button/button.component';
import Dropdown from '../dropdown/dropdown.component';

const Search = () => {
    return (
        <StyledSearch>
            <Dropdown>
                <Button type='button' bgColor='transparent'>
                    All categories <MdKeyboardArrowDown />
                </Button>
            </Dropdown>
            <StyledSearchInput type='text' />
            <Button
                type='button'
                bgColor='var(--additional-color)'
                color='var(--bg-color)'
            >
                <MdOutlineSearch />
            </Button>
        </StyledSearch>
    );
};

export default Search;
