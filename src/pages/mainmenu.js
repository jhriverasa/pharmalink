function Mainmenu(page) {
    return(
        <div className="flex bg-pic-login h-screen bg-center bg-no-repeat bg-cover font-Rosario">
            <div className="flex h-5/6 w-3/4 m-auto rounded-2xl">
                <div className="flex flex-col border-2 border-green-600 h-full w-1/2 rounded-l-2xl">
                    {page.part1}
                </div>
                <div className="flex bg-gradient-to-b from-login-blue via-blue-300 to-login-green h-full w-1/2 rounded-r-2xl">
                    {page.part2}
                </div>
            </div>
        </div>
    );
}