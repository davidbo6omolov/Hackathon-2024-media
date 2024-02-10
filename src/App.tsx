import Cards from "./components/cards/Cards";
import Logo from "./components/ui/logo/Logo";
import SearchBar from "./components/ui/search-bar/SearchBar";
import FilterBar from "./components/ui/filter-bar/FilterBar";
import HtmlCodeSign from "./components/ui/html-code-sign/HtmlCodeSign";


const topics = ['Ai','React','Java','JS','Weather','Politics','Music','Movies','Crypto','Tech-News','.Net','Gaming','Machine-Learning','Testing','Database','Data-science']
const cardInfo = [
    {
        title: 'The future of AI',
        topic: 'AI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: 'Feb 08',
    },
    {
        title: 'The future of AI',
        topic: 'AI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: 'Feb 08',
    },
    {
        title: 'The future of AI',
        topic: 'AI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: 'Feb 08',
    },
    {
        title: 'The future of AI',
        topic: 'AI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: 'Feb 08',
    }
    ,
    {
        title: 'The future of AI',
        topic: 'AI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: 'Feb 08',
    },
    {
        title: 'The future of AI',
        topic: 'AI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: 'Feb 08',
    },
    {
        title: 'The future of AI',
        topic: 'AI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: 'Feb 08',
    },
    {
        title: 'The future of AI',
        topic: 'AI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: 'Feb 08',
    },
    {
        title: 'The future of AI',
        topic: 'AI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: 'Feb 08',
    }
    ,
    {
        title: 'The future of AI',
        topic: 'AI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: 'Feb 08',
    }
]
function App() {


    return (
        <div className={'min-h-screen h-full relative overflow-hidden'}>
            <header className={'flex justify-center h-[80px]'}>
                <div className={'w-[95%] h-full flex items-center justify-between'}>
                <div className={'flex w-[40%] h-[60%] items-center'}>
                    <Logo/>
                    <FilterBar topics={topics}/>
                    <HtmlCodeSign/>
                </div>
                <div className={'w-[40%] flex justify-end'}>
                    <SearchBar/>
                </div>
                </div>
            </header>
            <main className={'flex justify-center h-full'}>
                <div className={'w-[95%] h-full flex flex-wrap'}>
                    <Cards cardInfo={cardInfo}/>
                </div>
            </main>
        </div>
    )
}

export default App
