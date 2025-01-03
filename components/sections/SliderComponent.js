import { useState } from 'react';

export default function SliderComponent() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const slides = [
        {
            id: 1,
            imgSrc:
                'assets/images/slider/slider-sartax-bg.png',
            title: 'SAR Tax & Management Consulting',
        },
        {
            id: 2,
            imgSrc:
                'assets/images/slider/slider-pkm-bg2.png',
            title: 'Padjadjaran Karya Mandiri',
        },
        {
            id: 3,
            imgSrc:
                'assets/images/slider/slider-ssn-bg.png',
            title: 'Sarana SOlusi Nawala',
        },
        {
            id: 4,
            imgSrc:
                'https://www.oakame.com/wp-content/uploads/2024/07/camus_table-a-manger.png',
            title: 'Naryadanta Consulting',
        },
    ];

    const displaySlide = (index) => {
        if (index > slides.length) setCurrentIndex(1);
        else if (index < 1) setCurrentIndex(slides.length);
        else setCurrentIndex(index);
    };

    const changeSlide = (delta) => {
        displaySlide(currentIndex + delta);
    };

    return (
        <div>
            <div className="slider-container">
                <div className="slider-wrapper">
                    {slides.map((slide, idx) => (
                        <div
                            key={slide.id}
                            className={`slider-slide ${currentIndex === idx + 1 ? 'slider-active' : 'slider-deactivating'
                                }`}
                            style={{ display: currentIndex === idx + 1 ? 'block' : 'none' }}
                        >
                            <img
                                className="slider-image"
                                src={slide.imgSrc}
                                alt={slide.title}
                            />
                            <div className='slider-component-content'>
                                <span>{slide.title}</span>
                                <a href="https://t.me/htmlcssss" className="slider-link">
                                    <h4>Green Code</h4>
                                </a>
                                {/* <div className="thumbnail-container">
                                    {slides.map((slide, idx) => (
                                        <img
                                            key={slide.id}
                                            className={`thumbnail ${currentIndex === idx + 1 ? 'thumbnail-active' : ''
                                                }`}
                                            src={slide.imgSrc}
                                            alt={slide.title}
                                            onClick={() => displaySlide(idx + 1)}
                                        />
                                    ))}
                                </div> */}
                            </div>
                        </div>
                    ))}
                    <a className="slider-prev" onClick={() => changeSlide(-1)}>
                        ❮
                    </a>
                    <a className="slider-next" onClick={() => changeSlide(1)}>
                        ❯
                    </a>
                </div>


            </div>
        </div>
    )
}
