"use client";

const LogoutButton = () => {
    return (
        <button
            onClick={() => console.log("hello")}
            className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        >
            Sign Out
        </button>
    );
};

export default LogoutButton;
