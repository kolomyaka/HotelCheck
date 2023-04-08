import classNames from 'classnames';
import cls from './StarsGroup.module.scss';
import { memo } from 'react';
import StarIcon from 'shared/assets/icons/starIcon.svg';

interface StarsGroupProps {
    className?: string;
    stars: number;
}

export const StarsGroup = memo((props: StarsGroupProps) => {
    const {
        className,
        stars
    } = props;
    const maxStars = 5;

    return (
        <div className={classNames(cls.starsGroup, {}, [className])}>
            {[...Array(maxStars)].map((star, index) => {
                const mods = {
                    [cls.active]: index < stars
                };

                return (
                    <StarIcon
                        className={classNames(cls.star, mods)}
                        key={index}
                    />
                );
            })}
        </div>
    );
});


