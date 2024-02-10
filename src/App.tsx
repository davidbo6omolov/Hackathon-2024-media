import Cards from "./components/cards/Cards";
import Logo from "./components/ui/logo/Logo";
import SearchBar from "./components/ui/search-bar/SearchBar";
import FilterBar from "./components/ui/filter-bar/FilterBar";
import HtmlCodeSign from "./components/ui/html-code-sign/HtmlCodeSign";
function App() {


    return (
        <div className={'min-h-screen'}>
            <header className={'flex justify-between h-[80px] items-center'}>
                <div className={'flex w-[40%] h-[60%] items-center'}>
                    <Logo/>
                    <FilterBar/>
                    <HtmlCodeSign/>
                </div>
                <div className={'w-[40%] flex justify-end'}>
                    <SearchBar/>
                </div>
            </header>
            <main >
                <Cards/>
            </main>
        </div>
    )
}

export default App
