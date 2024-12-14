import React, { useState } from 'react'
import './FilterWrap.scss'


const FilterWrap = () => {
    const [minValue, setMinValue] = useState(50);
    const [maxValue, setMaxValue] = useState(200);
    const min = 0;
    const max = 300;
  
    const handleMinChange = (e) => {
      const value = Math.min(Number(e.target.value), maxValue - 10);
      setMinValue(value);
    };
  
    const handleMaxChange = (e) => {
      const value = Math.max(Number(e.target.value), minValue + 10);
      setMaxValue(value);
    };

    return (
        <>
            <div className="filter">
                <div className="filter__top">
                    <h3>Filters</h3>
                    <img src="" alt="" />
                </div>

                <div className="filter__menu">

                    <div>
                        <p>T-shirts</p>
                        <span> ▶️ </span>
                    </div>

                    <div>
                        <p>Shorts</p>
                        <span> ▶️ </span>
                    </div>

                    <div>
                        <p>Shirts</p>
                        <span> ▶️ </span>
                    </div>

                    <div>
                        <p>Hoodie</p>
                        <span> ▶️ </span>
                    </div>

                    <div>
                        <p>Jeans</p>
                        <span> ▶️ </span>
                    </div>



                </div>

                <div className="filter__price">
                    <div className="filter__top">
                        <h3>Price</h3>
                        <span>▲</span>
                    </div>
                    <div className="double-range">
                        <div className="range-container">
                            <input
                                type="range"
                                min={min}
                                max={max}
                                value={minValue}
                                onChange={handleMinChange}
                                className="range-input"
                            />
                            <input
                                type="range"
                                min={min}
                                max={max}
                                value={maxValue}
                                onChange={handleMaxChange}
                                className="range-input"
                            />
                            {/* Прогресс линия между ползунками */}
                            <div
                                className="range-progress"
                                style={{
                                    left: `${((minValue - min) / (max - min)) * 100}%`,
                                    right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
                                }}
                            ></div>
                        </div>
                        <div className="range-values">
                            <span>${minValue}</span>
                            <span>${maxValue}</span>
                        </div>
                    </div>

                </div>

                <div className="filter__colors">
                    <div className="filter__top">
                        <h3>Colors</h3>
                        <span>▲</span>
                    </div>

                    <div className="filter__colors-wrap">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                </div>

                <div className="filter__size">
                    <div className="filter__top">
                        <h3>Size</h3>
                        <span>▲</span>
                    </div>

                    <div className="filter__size-wrap">
                        <button>XX-Small</button>
                        <button>X-Small</button>
                        <button>Small</button>
                        <button>Medium</button>
                        <button>Large</button>
                        <button>X-Large</button>
                        <button>XX-Large</button>
                        <button>3X-Large</button>
                        <button>4X-Large</button>

                    </div>
                </div>

                <div className="filter__dress">
                    <div className="filter__top">
                        <h3>Dress style</h3>
                        <span>▲</span>
                    </div>

                    <div className="filter__menu">

                        <div>
                            <p>Casual</p>
                            <span> ▶️ </span>
                        </div>

                        <div>
                            <p>Formal</p>
                            <span> ▶️ </span>
                        </div>

                        <div>
                            <p>Party</p>
                            <span> ▶️ </span>
                        </div>

                        <div>
                            <p>Gym</p>
                            <span> ▶️ </span>
                        </div>

                    </div>

                </div>

                <button className='filter__btn'>Apply Filter</button>


            </div>
        </>
    )
}

export default FilterWrap
