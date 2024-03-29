const sectionTitle = ({title, color = TitleColor.primary}: SectionTitleProps) => {
    return (
        <h3 className={`text-center font-primary text-[20px] md:text-[48px] ${color}`}>
            <span className="before:block before:absolute before:inset-x-0 before:h-2 before:-bottom-3 before:bg-p-yellow-2 relative">
                {title}
            </span>
        </h3>
    )
}

type SectionTitleProps = {
    title: string,
    color?: TitleColor
}

export enum TitleColor {
    white = 'text-white',
    primary = 'text-p-primary'
}

export default sectionTitle;