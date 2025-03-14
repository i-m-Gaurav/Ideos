const Spinner = ({ size = 16 }) => {
    return (
        <div
            className="relative rounded-full"
            style={{ width: size, height: size }}
        >
            {/* Outer rotating ring */}
            <div
                className="absolute inset-0 rounded-full animate-spin"
                style={{
                    border: "2px solid transparent",
                    borderTopColor: "#000000",
                    borderRightColor: "#000000",
                }}
            />
        </div>
    );
};

export default Spinner;
