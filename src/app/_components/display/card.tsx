type Props = {
    title: string
    description: string
    isBadgeVisible?: boolean
    badgeLabel?: string | undefined
    footerDesc?: string | undefined
}
const Card = (props: Props) => {
    const { title, description, badgeLabel = '', isBadgeVisible = false, footerDesc = '' } = props;
    return <div className="card w-96 bg-base-100 shadow-xl min-h-50">
        <div className="card-body">
            <h2 className="card-title">
                {title}
                {isBadgeVisible && <div className="badge badge-secondary">{badgeLabel}</div>}
            </h2>
            <p>{description}</p>
            {footerDesc && <div className="card-actions justify-end">
                <div>{footerDesc}</div>
            </div>}
        </div>
    </div>
};

export default Card;