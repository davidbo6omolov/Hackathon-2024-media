import SearchIcon from '../../../assets/search.svg'

const SearchBar = () => {
    return (
        <form className={'relative min-w-[280px] flex items-center'}>
            <input type={'text'} placeholder={'Search...'} className={'w-full p-2 px-3 flex items-center  rounded-full border-primary bg-secondary border-2 mx-2 text-white placeholder:text-white'} maxLength={20}/>
            <img src={SearchIcon} className={'absolute right-[20px] w-[24px] h-[24px]'}/>
        </form>

    );
};

export default SearchBar;