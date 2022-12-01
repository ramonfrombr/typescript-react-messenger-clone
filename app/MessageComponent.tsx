import Image from "next/image";
import React from "react";
import { Message } from "../typings";

type Props = {
    message: Message;
};

const MessageComponent = ({ message }: Props) => {
    const isUser = true;
    return (
        <div className={`flex w-fit ${isUser && "ml-auto"}`}>
            <div className={`flex-shrink-0 ${isUser && "order-2"}`}>
                <Image
                    src={message.profilePic}
                    className="mx-2 rounded-full"
                    height={10}
                    width={50}
                    alt="Profile Picture"
                />
            </div>

            <div>
                <p
                    className={`px-[2px] pb-[2px] text-[0.65rem] ${
                        isUser
                            ? "text-right text-blue-400"
                            : "text-left text-red-400"
                    }`}
                >
                    {message.username}
                </p>

                <div className="flex items-end">
                    <div
                        className={`w-fit rounded-lg bg-red-400 px-3 py-2 text-white ${
                            isUser
                                ? "order-2 ml-auto bg-blue-400"
                                : "bg-red-400"
                        }`}
                    >
                        <p>{message.message}</p>
                    </div>

                    <p
                        className={`px-2 text-[0.65rem] italic text-gray-400 ${
                            isUser && "text-right"
                        }`}
                    >
                        {new Date(message.created_at).toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MessageComponent;
