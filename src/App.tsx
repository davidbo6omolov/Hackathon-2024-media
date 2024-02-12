import React,{useEffect, useState, useRef} from "react";
import {RootState} from "./store/store";
import {CardInfo} from "./components/cards/Cards";
import {getAllNews} from './service/ApiService';
import {useSelector} from "react-redux";
// @ts-expect-error: This import is necessary for backward compatibility with a legacy module.
import _throttle from "lodash/throttle"
import Cards from "./components/cards/Cards";
import Logo from "./components/ui/logo/Logo";
import SearchBar from "./components/ui/search-bar/SearchBar";
import FilterBar from "./components/ui/filter-bar/FilterBar";
import CircleButton from "./components/ui/html-code-sign/CircleButton";

import HtmlSign from './assets/htmlCodeSign.svg';
import Bot from './assets/bot.svg';
import BurgerMenu from "./components/ui/burger-menu/BurgerMenu";





const topics = ['Ai', 'React', 'Java', 'JS', 'Weather', 'Politics', 'Music', 'Movies', 'Crypto', 'Tech-News', '.Net', 'Gaming', 'Machine-Learning', 'Testing', 'Database', 'Data-science']


function App() {
    const [clicked, setClicked] = useState(false);
    const [page, setPage] = useState(0)
    const [loadMore,setLoadMore] = useState(false)
    const [loading, setLoading] = useState(true);
    const date = new Date();
    const year = date.getFullYear();
    const [cardInfo, setCardInfo] = useState<CardInfo[]>([]);
    const elRef = useRef<HTMLDivElement>(null)
    const selectedFilters = useSelector((state: RootState) => state.app.filter);

    const handleScroll = _throttle(() => {
        setLoadMore(false)
        const pageHeight = window.innerHeight;
        const footerTopPosition = elRef.current?.getBoundingClientRect().top;

        if (footerTopPosition && pageHeight - footerTopPosition > 30 && !loading) {
            setLoadMore(true)
            setPage((prevPage) => prevPage + 1);
        }
    }, 500);

    const onSearch = (e:React.FormEvent<HTMLFormElement>,input:string) =>{
        e.preventDefault()
        setPage(0)
        getAllNews(input,page).then((res) => {
            setLoading(false);
            setCardInfo(res)
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading]);

    useEffect(() => {
        if (clicked) {
            getAllNews(selectedFilters.join(',').toLowerCase(), page)
                .then((res) => {
                    setLoading(false);
                    setCardInfo((prevCardInfo:CardInfo[]) => [...prevCardInfo, ...res] as CardInfo[]);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }
    }, [clicked, page]);

    function formatDate(dateString: string) {
        const options = {month: 'short', day: 'numeric'} as const;
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }



    return (
        <div className={'min-h-screen h-full relative overflow-hidden flex flex-col justify-between'}>
            <header className={'flex justify-center h-[80px]'}>
                <div className={'w-[95%] h-full flex items-center justify-between'}>
                    <div className={'flex w-[45%] h-[60%] items-center '}>
                        <Logo/>
                        <FilterBar topics={topics} setClicked={() => setClicked(!clicked)} clicked={clicked}/>
                        <CircleButton className={'sm:hidden'} link={'http://mediainsightsservice.northeurope.cloudapp.azure.com:8080/api/articles/feed'} image={HtmlSign}
                                      classImage={'rotate-[45deg] ml-1 mb-1 '}/>
                    </div>
                    <div className={'w-[40%] flex justify-end'}>
                        <CircleButton className={'sm:hidden '} link={'https://t.me/Mesight_bot'} image={Bot}
                                      classImage={'ml-[0.1rem]'}/>
                        <SearchBar className={'sm:hidden justify-center '} onSearch={(e, input) => onSearch(e, input)}/>
                        <BurgerMenu/>
                    </div>
                </div>
            </header>
            <main className={'flex justify-center h-full my-3'}>
                <div className={'w-[95%] h-full flex flex-wrap justify-between md:justify-center sm:justify-center'}>
                    <div
                        className={'h-full flex flex-wrap justify-between md:justify-center sm:justify-center'}>
                        {loading ? (
                            Array.from({ length: 10 }, (_, index) => (
                                <Cards key={index} loading={loading} />
                            ))
                        ) : (
                            cardInfo?.map((card, index) => (
                                <Cards key={index} card={{ ...card as CardInfo, publishDate: formatDate(card.publishDate) }} loading={loading} />
                            ))
                        )}
                        {
                            loadMore &&  <div className={'w-full flex justify-center'}>
                              <div className={'flex items-center'}>
                                  <p className={'text-white mr-2'}>Loading...</p>
                                  <svg className="animate-spin h-5 w-5 bg-quinary rounded" viewBox="0 0 24 24">
                                  </svg>
                              </div>
                            </div>
                        }
                    </div>
                </div>
            </main>
            <footer ref={elRef}>
                <div
                    className={'w-full h-[50px] bg-primary flex justify-center items-center border-t-2 border-primary '}>
                    <p className={'text-white'}>© {year} bibus.dev</p>
                </div>
            </footer>
        </div>
    )
}

export default App
