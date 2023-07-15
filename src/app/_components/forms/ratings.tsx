'use client'

type Props = {

    label: string
    name?: string

}

const Ratings = (props: Props) => {
    const { label, name = '' } = props;
    return <div className="form-control">
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <div className="rating rating-lg rating-half">
            <input type="radio" name={name} className="rating-hidden" />
            <input type="radio" name={name} className="bg-yellow-500 mask mask-star-2 mask-half-1" value={1} />
            <input type="radio" name={name} className="bg-yellow-500 mask mask-star-2 mask-half-2" value={1.5} />
            <input type="radio" name={name} className="bg-yellow-500 mask mask-star-2 mask-half-1" value={2} />
            <input type="radio" name={name} className="bg-yellow-500 mask mask-star-2 mask-half-2" value={2.5} />
            <input type="radio" name={name} className="bg-yellow-500 mask mask-star-2 mask-half-1" value={3} />
            <input type="radio" name={name} className="bg-yellow-500 mask mask-star-2 mask-half-2" value={3.5} />
            <input type="radio" name={name} className="bg-yellow-500 mask mask-star-2 mask-half-1" value={4} />
            <input type="radio" name={name} className="bg-yellow-500 mask mask-star-2 mask-half-2" value={4.5} />
            <input type="radio" name={name} className="bg-yellow-500 mask mask-star-2 mask-half-1" value={5} />
            <input type="radio" name={name} className="bg-yellow-500 mask mask-star-2 mask-half-2" value={5} />
        </div>

    </div>
};

export default Ratings;