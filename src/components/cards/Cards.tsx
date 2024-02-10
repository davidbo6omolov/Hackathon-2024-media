import Reply from '../../assets/reply.svg'
import Share from '../../assets/share.svg'
import TestIcon2  from '../../assets/TestIcon2.webp'
import ImageOverview from '../../assets/imageOverview.jpeg'
import styles from './Cards.module.css'


type CardInfo = {
    cardInfo: {
        title: string,
        description: string
    }[]
}

const Cards = ({cardInfo}:CardInfo) => {
    return (
        <>
            {cardInfo.map((card, index) => {
                return (
                    <div key={index} className={`w-[250px] h-[350px] mb-6 m-auto relative cursor-pointer ${styles.cardSide}`}>
                        <div className={`flex justify-center items-center w-full h-full bg-secondary border-primary border-2 rounded-md  ${styles.cardFront}`}>
                            <div className={'w-[85%] h-[95%] flex flex-col relative'}>
                                <div className={'flex h-[10%] items-center'}>
                                    <div className={'bg-emptyImage rounded-full w-[32px] h-[32px] bg-center bg-contain mr-2'}>
                                        <img src={TestIcon2} alt={'icon'} className={'rounded-full w-full h-full '}/>
                                    </div>
                                    <div className={'flex flex-col'}>
                                        <h1 className={'text-sm text-white'}>bibus.dev group</h1>
                                        <p className={'text-xs text-white'}>creator • Feb 08</p>
                                    </div>
                                </div>
                                <div className={'mt-5 '}>
                                    <h1 className={'font-bold text-white '}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                                </div>
                                <div className={'mt-6 h-[35%] flex justify-center items-center bg-emptyImage rounded  '}>
                                   <img src={ImageOverview}  alt={'image overview'}   className={'w-full h-full object-cover rounded'} />
                                </div>
                                <div className={'h-[5%] w-full flex justify-end absolute bottom-0'}>
                                     <img src={Reply} alt={'reply'} className={'min-h-[16px] min-w-[16px]'}/>
                                </div>
                            </div>
                        </div>
                        <div className={`flex justify-center items-center w-full h-full bg-secondary border-primary border-2 rounded  ${styles.cardBack}`}>
                            <div className={'w-[85%] h-[95%] flex flex-col relative'}>
                                <div className={'flex h-[10%] items-center'}>
                                    <div className={'bg-emptyImage rounded-full w-[32px] h-[32px] bg-center bg-contain mr-2'}>
                                        <img src={TestIcon2} alt={'icon'} className={'rounded-full w-full h-full '}/>
                                    </div>
                                    <div className={'flex flex-col'}>
                                        <h1 className={'text-sm text-white'}>bibus.dev group</h1>
                                        <p className={'text-xs text-white'}>creator • Feb 08</p>
                                    </div>
                                </div>
                                <div className={'mt-5 '}>
                                    <p className={'text-white text-sm font-bold'}>{card.description}</p>
                                </div>
                                <div className={'h-[8%] w-full flex justify-between absolute bottom-0 items-center'}>
                                    <a href={'#'} className={'flex text-sm  bg-quinary px-3 rounded py-1 items-center border-[2px] border-primary'}>
                                        <img src={Share} alt={'share icon'} className={'h-[16px] w-[16px] mr-1'}/>
                                            Read post
                                    </a>
                                    <img src={Reply} alt={'reply'} className={'h-[16px] w-[16px]'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default Cards;