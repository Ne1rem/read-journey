import Link from 'next/link';
import { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

interface DashboardNavProps {
    href: string;
    text: string;
}

export const DashboardNav: FC<DashboardNavProps> = ({ href, text }) => {
    return (
        <div className="flex  items-center justify-between md:mt-[26px]">
            <Link
                href={`/${href}`}
                className="text-sm  font-medium leading-[18px] -tracking-[0.28px] text-lightGrey underline transition-colors duration-300  hover:text-fogWhite"
            >
                {text}
            </Link>
            <Link
                href={`/${href}`}
                className="transition-transform duration-200 hover:scale-[115%]"
            >
                <FaArrowRight
                    size={24}
                    className="cursor-pointer fill-fogWhite "
                />
            </Link>
        </div>
    );
};