import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import SettingsSvg from '../../../assets/settings.svg';
import {addFilter, removeFilter} from "../../../store/slices/app";
import {RootState} from "../../../store/store";

type FilterBarProps = {
    topics: string[]
}

const FilterBar = ({topics}:FilterBarProps) => {
    const [clicked, setClicked] = useState(false);
    const selectedFilters = useSelector((state:RootState) => state.app.filter);
    const dispatch = useDispatch()


    const onSelectFilter = (topic:string) => {
        if ((selectedFilters as string[]).includes(topic)) {
            dispatch(removeFilter(topic));
        } else {
            dispatch(addFilter(topic));
        }
    }


    return (
        <>
            <div className={`w-fit min-w-[165px] p-2 px-3 flex items-center cursor-pointer rounded-full border-primary bg-secondary border-2  mx-5 z-30`}
                 onClick={()=>setClicked(!clicked)}>
                <img src={SettingsSvg} className={`w-[24px] h-[24px]`} alt= {'image'}/>
                <p className={'text-white ml-2 select-none'}>{clicked ? 'Feed settings' : 'Back'}</p>
            </div>
            <span className={`${clicked ? 'bg-quaternary rounded-full duration-300' : 'bg-primary opacity-75 scale-[4000%] duration-500 '} min-w-[165px] h-[44px]  translate-x-[147px] z-[5] absolute flex justify-center items-center`}></span>
            <div className={` ${clicked ? 'hidden' : 'flex'} absolute flex-col w-full h-full top-0 z-20 items-center justify-evenly`}>
                <h1 className={'text-3xl text-white '}>Pick tags what relevant to you :)</h1>
                <div className={'flex  w-[40%] items-center justify-center flex-wrap mb-[70px]'}>
                    {topics.map((topic: string, index: number) => {
                        return (
                            <button
                                key={index}
                                className={`p-2 px-3 rounded-md m-2 ${
                                    (selectedFilters as string[]).includes(topic)
                                        ? ' bg-emptyImage text-white'
                                        : 'bg-quinary'
                                }`}
                                onClick={() => onSelectFilter(topic)}
                            >
                                <p>{topic}</p>
                            </button>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default FilterBar;