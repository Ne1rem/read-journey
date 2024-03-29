import { FC } from 'react';

interface DashboardProps {
    children: React.ReactNode;
}

export const Dashboard: FC<DashboardProps> = ({ children }) => {
    return (
        <div className=" w-full rounded-[30px] bg-darkGrey p-5 md:p-8 xl:w-[353px]  xl:px-5 xl:py-10">
            {children}
        </div>
    );
};