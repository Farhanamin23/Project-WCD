const ActionButton = ({title}: ActionButtonProps) => {
    return (
        <p className='text-[12px] py-[8px] px-[16px] font-primary bg-p-yellow rounded-[12px] text-white lg:text-[16px]'>
            {title}
        </p>
    )
}

type ActionButtonProps = {
    title: string
}

export default ActionButton;