import SettingsSvg from '../../../assets/settings.svg';
const FilterBar = () => {
    return (
        <div className={`w-fit min-w-[165px] p-2 px-3 flex items-center  rounded-full border-primary bg-secondary border-2  mx-5`}>
          <img src={SettingsSvg} className={`w-[24px] h-[24px]`} alt= {'image'}/>
           <p className={'text-white ml-2'}>Feed settings</p>
        </div>
    );
};

export default FilterBar;