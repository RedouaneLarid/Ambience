const River = ({ style }) => {
    const river = Array.from({ length: 20 }, (_, i) => (
        <div
            key={i}
            className={`river ${style}`}
            style={{ right: `${i * 48}px` }}
        />
    ))

    return river;
}

export default River;