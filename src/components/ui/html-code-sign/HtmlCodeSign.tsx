
import HtmlCode from '../../../assets/htmlCodeSign.svg';

const HtmlCodeSign = () => {
    return (
        <a className={`w-[48px] p-2 flex items-center  rounded-full border-primary bg-secondary border-2  mx-2 min-w-[48px] min-h-[48px] `} href={'#'}>
            <img src={HtmlCode} className={`w-[24px] h-[24px] ml-1 mb-1 rotate-[45deg]`} alt= {'image'}/>
        </a>
    );
};

export default HtmlCodeSign;