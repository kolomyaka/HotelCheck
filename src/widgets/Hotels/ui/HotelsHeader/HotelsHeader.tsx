import cls from './HotelsHeader.module.scss';
import { memo } from 'react';
import { Typography } from 'shared/ui/Typography/Typography';
import ArrowIcon from 'shared/assets/icons/arrowIcon.svg';
import slide1 from 'shared/assets/images/slide_1.webp';
import slide2 from 'shared/assets/images/slide_2.webp';
import slide3 from 'shared/assets/images/slide_3.webp';
import slide4 from 'shared/assets/images/slide_4.webp';

interface HotelsHeaderProps {
    className?: string
}

const imagesSlider = [
    slide1,
    slide2,
    slide3,
    slide4
];

export const HotelsHeader = memo(({ className }: HotelsHeaderProps) => {
    return (
        <div className={cls.hotelsHeader}>
            <div className={cls.hotelsHeaderData}>
                <div className={cls.hotelsTitle}>
                    <Typography
                        weight={'medium'}
                        variant={'h3'}
                        size={'XL'}
                    >
                        Отели
                    </Typography>
                    <ArrowIcon />
                    <Typography
                        weight={'medium'}
                        variant={'h3'}
                        size={'XL'}
                    >
                        Москва
                    </Typography>
                </div>
                <div className={cls.hotelsDate}>
                    <Typography
                        size={'L'}
                    >
                        07 июля 2020
                    </Typography>
                </div>
            </div>
            <div className={cls.hotelsImages}>
                {
                    imagesSlider.map((slide, index) => (
                        <img width={164} src={slide} key={index} alt={'Slide image'}/>
                    ))
                }
            </div>
        </div>
    );
});


