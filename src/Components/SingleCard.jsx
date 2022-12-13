function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className="card mx-auto  rounded-2xl sm:w-[24%] w-[32%] sm:h-[32%] h-[24%]">
            <div 
                className={flipped ? "flipped" : ""} 
                style={{position: 'relative', width: '100%', height: '100%'}}
            >
                <div className="front absolute w-full h-full">
                    <img
                        src={card.src} 
                        alt="card front" 
                        className=" rounded-2xl border-2 border-darkGreen dark:border-yellow w-full h-full duration-0"
                    />
                </div>
                <div 
                    onClick={handleClick}
                    className="back relative text-2xl font-light text-center text-darkGreen dark:text-yellow  rounded-2xl w-full h-full border-2 border-darkGreen dark:border-yellow bg-yellow dark:bg-darkGreen duration-0">
                    <span 
                        className="inline-block text-left mx-auto mt-[10%] border-2 border-yellow w-auto h-[80%]">
                        Van <br/> Gogh's <br/> Art
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SingleCard





{/*

                    <svg 
                        className="card-svg mx-auto w-[24%] h-[24%] mt-[38%] fill-darkGreen"
                        xmlns="http://www.w3.org/2000/svg" 
                        class="bi bi-image" 
                        viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                    </svg>

*/}