/* eslint-disable react/prop-types */
export default function Button({children, classNames}) {
    return (
        <button className={`font-bold rounded-lg ${classNames}`}>
            {children}
        </button>
    );
}

